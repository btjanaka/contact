// Modified eleventy-favicon plugin. Original:
// https://github.com/atomrc/eleventy-favicon/blob/master/.eleventy.js
//
// I reference the "How to Favicon in 2021" article below
// https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs
//
// Modifications:
// - The shortcode now uses a pathPrefix parameter so that favicons do not have
//   to be mounted at root, e.g.
//
//     {% favicon 'src/favicon.svg' '/prefix' %}
//
// - Added `sizes="any"` flag to link for favicon.ico file (refer to the article)
// - Switched `favicon.ico` to only contain 32x32 (removed 64x64, refer to the
//   article)
// - Apple favicons are now generated with a background and padding
//   (configurable with appleBkgdColor and applePad).
const sharp = require("sharp");
const toIco = require("to-ico");
const fsPromises = require("fs").promises;

// Caches all the file generations that were made.
// It keeps track of the mtime of the source file so the cache can be invalidated if the source changes
const cache = {};

function saveFile(destination) {
  return function (buffer) {
    return fsPromises.writeFile(destination, buffer);
  };
}

function generateIcoFavicon({ width, height, density }, sourcePath, destPath) {
  const faviconDimensions = [32];
  // Create buffer for each size
  return Promise.all(
    faviconDimensions.map((dimension) =>
      sharp(sourcePath, {
        density: (dimension / Math.max(width, height)) * density,
      })
        .resize(dimension, dimension)
        .toBuffer()
    )
  )
    .then((buffers) => toIco(buffers))
    .then(saveFile(destPath));
}

function generateAppleFavicon(
  { density, width, height },
  sourcePath,
  destPath,
  bkgdColor,
  pad
) {
  fsPromises
    .readFile(sourcePath, "utf8")
    .then((s) => {
      // Removes the XML declaration. Test regexes here: https://regex101.com
      s = s.replace(/\<.*xml[^>]*\>/, "");

      // Scale so there can be padding.
      const scale = (180 - 2 * pad) / Math.max(width, height);

      // Create a new SVG with this one embedded within it. This SVG has white
      // background and a padding of 10 around the original SVG.
      const appleSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="180" height="180">
  <rect x="0" y="0" width="100%" height="100%" fill="${bkgdColor}"/>
  <g transform="translate(${pad} ${pad}) scale(${scale} ${scale})">
    ${s}
  </g>
</svg>
`;
      return Buffer.from(appleSvg);
    })
    .then((s) => {
      return sharp(s, {
        density: 300, // Turn up density a bunch since we resize anyway.
      })
        .resize(180, 180)
        .png()
        .toBuffer();
    })
    .then(saveFile(destPath));
}

const defaultOptions = {
  destination: "./_site",
  pathPrefix: "",
  appleBkgdColor: "white",
  applePad: 10,
};

module.exports = function (config, options = defaultOptions) {
  const destination = options.destination || defaultOptions.destination;
  const pathPrefix = options.pathPrefix || defaultOptions.pathPrefix;
  const appleBkgdColor =
    options.appleBkgdColor || defaultOptions.appleBkgdColor;
  const applePad = options.applePad || defaultOptions.applePad;

  config.addAsyncShortcode("favicon", async function (faviconFile) {
    const { mtimeMs } = await fsPromises.stat(faviconFile);
    const lastGeneration = cache[faviconFile] || { mtime: 0, svg: false };
    if (mtimeMs > lastGeneration.mtime) {
      const metadata = await sharp(faviconFile).metadata();
      cache[faviconFile] = { mtime: mtimeMs, svg: metadata.format === "svg" };

      // favicon.ico
      generateIcoFavicon(metadata, faviconFile, `${destination}/favicon.ico`);

      // apple-touch-icon.png
      generateAppleFavicon(
        metadata,
        faviconFile,
        `${destination}/apple-touch-icon.png`,
        appleBkgdColor,
        applePad
      );

      if (cache[faviconFile].svg) {
        fsPromises.copyFile(faviconFile, `${destination}/favicon.svg`);
      }
    }

    const svgEntry = cache[faviconFile].svg
      ? `<link rel="icon" type="image/svg+xml" href="${pathPrefix}/favicon.svg"></link>`
      : "";

    return `
<link rel="icon" href="${pathPrefix}/favicon.ico" sizes="any">
${svgEntry}
<link rel="apple-touch-icon" href="${pathPrefix}/apple-touch-icon.png">
    `;
  });
};
