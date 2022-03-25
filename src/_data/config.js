// Config for the entire site.
module.exports = {
  // Site title.
  title: "Contact Bryon Tjanaka",

  // Default description for pages. Provide "description" in the front matter of
  // a page to override this.
  description: "Contact info for Bryon Tjanaka.",

  // Site URLs.
  baseUrl: "https://contact.btjanaka.net", // No slash at the end.
  shortBaseUrl: "contact.btjanaka.net", // Same as baseUrl but without http or https.

  // Your name.
  name: "Bryon Tjanaka",

  // Profile picture on home page. Set to null to leave out.
  profilePic: {
    best: "https://btjanaka.net/static/btjanaka.jpg",
    small: "https://btjanaka.net/static/btjanaka-200x200.jpg",
  },

  // Name pronunciation. Set to null to leave out.
  pronunciation: "/audio/btjanaka.mp3",

  // Tagline that shows up below the profile picture on the home page and below
  // the name on the business card. Set to null to leave out.
  tagline: "PhD Student, ICAROS Lab @ USC",

  // Path to Open Graph image. Change this URL whenever the image changes so
  // that sites like FB change their preview. Set to null to leave out.
  openGraph: "/imgs/btjanaka.jpg",

  // Path to Twitter preview image. Set to null to leave out.
  twitterPreview: "/imgs/btjanaka.jpg",

  // Links to your other websites.
  // - "fa" is the FontAwesome code for the icon; for example, see here:
  //   https://fontawesome.com/v5.15/icons/globe-americas
  // - textColor and hoverBg are configured strangely because tailwind needs to
  //   pick up on it and avoid purging the class name -- see here:
  //   https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
  //   - See tailwind.config.js (in the root of this repo) for how to add custom
  //     colors.
  links: [
    {
      name: "Website",
      desc: "btjanaka.net",
      url: "https://btjanaka.net",
      fa: "fas fa-globe-americas",
      textColor: "text-website",
      hoverBg: "hover:bg-website",
    },
    {
      name: "GitHub",
      desc: "@btjanaka",
      url: "https://github.com/btjanaka",
      fa: "fab fa-github",
      textColor: "text-black",
      hoverBg: "hover:bg-black",
    },
    {
      name: "Twitter",
      desc: "@btjanaka",
      url: "https://twitter.com/btjanaka",
      fa: "fab fa-twitter",
      textColor: "text-twitter",
      hoverBg: "hover:bg-twitter",
    },
    {
      name: "LinkedIn",
      desc: "@btjanaka",
      url: "https://www.linkedin.com/in/btjanaka/",
      fa: "fab fa-linkedin",
      textColor: "text-linkedin",
      hoverBg: "hover:bg-linkedin",
    },
    {
      name: "CV",
      url: "https://btjanaka.net/btjanaka-cv.pdf",
      fa: "fas fa-file-alt",
      textColor: "text-green-500",
      hoverBg: "hover:bg-green-500",
    },
    {
      name: "Resume",
      url: "https://btjanaka.net/btjanaka-resume.pdf",
      fa: "fas fa-file-alt",
      textColor: "text-yellow-500",
      hoverBg: "hover:bg-yellow-500",
    },
    {
      name: "Personal Email",
      desc: "bryon@tjanaka.net",
      url: "mailto:bryon@tjanaka.net",
      fa: "fas fa-envelope",
      textColor: "text-gray-600",
      hoverBg: "hover:bg-gray-600",
    },
    {
      name: "Professional Email",
      desc: "tjanaka@usc.edu",
      url: "mailto:tjanaka@usc.edu",
      fa: "fas fa-envelope",
      textColor: "text-gray-600",
      hoverBg: "hover:bg-gray-600",
    },
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?hl=en&user=851Y-O8AAAAJ",
      fa: "ai ai-google-scholar-square",
      textColor: "text-scholar",
      hoverBg: "hover:bg-scholar",
    },
    {
      name: "ORCID",
      desc: "0000-0002-9602-5039",
      url: "https://orcid.org/0000-0002-9602-5039",
      fa: "ai ai-orcid",
      textColor: "text-orcid",
      hoverBg: "hover:bg-orcid",
    },
    {
      name: "ICAROS Lab",
      url: "https://icaros.usc.edu",
      fa: "fas fa-robot",
      textColor: "text-black",
      hoverBg: "hover:bg-black",
    },
    {
      name: "pyribs",
      url: "https://pyribs.org",
      fa: "fas fa-laptop",
      textColor: "text-pyribs",
      hoverBg: "hover:bg-pyribs",
    },
    {
      name: "VGSA",
      url: "https://vgsa.usc.edu",
      fa: "fas fa-users",
      textColor: "text-vgsa",
      hoverBg: "hover:bg-vgsa",
    },
    {
      name: "QR Code",
      url: "/qr",
      fa: "fas fa-link",
      textColor: "text-black",
      hoverBg: "hover:bg-black",
    },
    {
      name: "Thingiverse",
      url: "https://www.thingiverse.com/btjanaka/makes",
      fa: "fas fa-tools",
      textColor: "text-blue-500",
      hoverBg: "hover:bg-blue-500",
    },
    {
      name: "How to Make This Website",
      url: "https://github.com/btjanaka/contact",
      fa: "far fa-clipboard",
      textColor: "text-black",
      hoverBg: "hover:bg-black",
    },
  ],
};
