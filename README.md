# Building a Modern Business Card with Eleventy

[![Netlify Status](https://api.netlify.com/api/v1/badges/e6286d91-fdc6-4e35-b8cf-c5276c888036/deploy-status)](https://app.netlify.com/sites/btjanakacontact/deploys)

This repo contains the tutorial and code for my 2021 Eleventies talk, "Building
a Modern Business Card with Eleventy."

**TL;DR:** We build a
[minimalist SVG business card](https://contact.btjanaka.net/card.svg) that
contains a name and QR code linking to an
[Eleventy site with all the contact info](https://contact.btjanaka.net). The
card can be printed out, folded up to standard business card size, and handed
out.

- [Tutorial and Code](https://github.com/btjanaka/contact)
- [Presentation Slides](https://btjanaka.net/eleventy-business-card/)
- [Demo](https://contact.btjanaka.net)

## Tutorial

### Quick Deployment

1. [Fork this repo.](https://github.com/btjanaka/contact/fork)
1. In your fork, edit all the fields in
   [`src/_data/config.js`](src/_data/config.js).
1. Deploy your site to Netlify with a guide such as
   [this one](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/).

### Developing Locally

1. Clone your fork locally, e.g. `git clone FORK_URL`.
1. Install dependencies with `npm install`.
1. Start the development server with `npm start`. This should open
   <http://localhost:3000/dev> in your browser.
1. To build the website, run `npm run build`.

### Editing the Card

To modify the design of the business card, download `/card.svg` and
`/link.qrcode.svg` from the website (or copy them from the `build` folder) and
edit them with a vector graphics editor like [Inkscape](https://inkscape.org).

**Note:** `link.qrcode.svg` is needed because `card.svg` links to it.

## Credits

This project's initial structure was based on a wonderful
[tutorial](https://dev.to/stowball/creating-a-production-ready-eleventy-project-with-webpack-babel-and-sass-35ep)
by Matt Stow.
