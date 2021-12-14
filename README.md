# Building a Modern Business Card with Eleventy

[![Netlify Status](https://api.netlify.com/api/v1/badges/e6286d91-fdc6-4e35-b8cf-c5276c888036/deploy-status)](https://app.netlify.com/sites/btjanakacontact/deploys)

This repo contains the tutorial and code for "Building a Modern Business Card
with Eleventy," a talk I gave at the 2021
[Eleventies](https://www.meetup.com/JAMstack-Toronto/events/281278073/). The
Eleventies is a series of lightning talks on the
[Eleventy](https://www.11ty.dev) web framework hosted by
[Jamstack Toronto](https://twitter.com/JAMstackTORONTO).

**TL;DR:** We build a
[minimalist SVG business card](https://contact.btjanaka.net/card.svg) that
contains (1) a person's name and (2) a QR code linking to an
[Eleventy site with all the person's contact info](https://contact.btjanaka.net).
The card can be printed out, folded up to standard business card size, and
handed out.

- [Tutorial and Code](https://github.com/btjanaka/contact)
- [Presentation Slides](https://slides.btjanaka.net/eleventy-business-card/)
- [Eleventies Talk Video](https://www.youtube.com/watch?v=_HxoV9BP95c)
- [Demo](https://contact.btjanaka.net)

## Tutorial

### Quick Deployment

1. [Fork this repo.](https://github.com/btjanaka/contact/fork)
1. In your fork, edit all the fields in
   [`src/_data/config.js`](src/_data/config.js).
1. Replace `src/favicon.svg` in your fork with your own favicon.
1. Deploy your site to Netlify with a guide such as
   [this one](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/).
1. Visit `/card.svg` on your deployed site and print out the page.

   **Note 1:** Printing from the browser seems to interfere with the proportions
   of the SVG. It is ideal if you download both `/card.svg` and
   `/link.qrcode.svg` to the same directory and then print out `card.svg` from a
   vector graphics editor like Inkscape.

   > `link.qrcode.svg` is needed because `card.svg` links to it.

   **Note 2:** The card generation is still in its early stages. For instance,
   we only support letter paper (8.5" x 11"), and long names will overflow onto
   the QR code. In these cases, you may need to edit the card on your own (see
   [below](#editing-the-card)). PRs are welcome if anybody knows how to
   implement this card generation properly.

1. Follow [this tutorial](https://youtu.be/oSXVQ_N-7D0) to fold the card.

### Developing Locally

1. Clone your fork locally, e.g. `git clone FORK_URL`.
1. Install dependencies with `npm install`.
1. Start the development server with `npm start`. This should open
   <http://localhost:3000/dev> in your browser.
1. To build the website, run `npm run build`.

### Editing the Card

To modify the design of the business card, download `/card.svg` and
`/link.qrcode.svg` from the website (or copy them from the `build/` directory)
and edit them with a vector graphics editor like
[Inkscape](https://inkscape.org).

**Note:** `link.qrcode.svg` is needed because `card.svg` links to it.

## Future Ideas

- Improve automatic generation of the business card by using a library such as
  [labelmake](https://github.com/hand-dot/labelmake) rather than trying to hack
  SVGs. labelmake would be able to automatically generate the PDF, which is
  better than creating an SVG and asking the browser to print the SVG (the
  browser tends to distort the SVG).
- Enable the card to work offline. For example, switching the QRCode to
  represent a [vCard](https://en.wikipedia.org/wiki/VCard) (rather than a single
  link) would enable people to easily add the contact to their phone even
  without internet access. However, the vCard would introduce a lot more info
  that could potentially change over time, which would mean reprinting the
  business card. Furthermore, it is still possible to simply hand out the card.

## Credits

This project's initial code structure was based on a wonderful
[tutorial](https://dev.to/stowball/creating-a-production-ready-eleventy-project-with-webpack-babel-and-sass-35ep)
by Matt Stow.
