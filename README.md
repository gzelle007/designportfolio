# Gizelle portfolio — upload-ready website

Upload **all contents of this folder** to the root of your GitHub Pages repository, replacing the old `index.html`, `styles.css`, and `script.js`. Keep the `images/` directory next to `index.html`.

## Replace project images
Each tile loads an image from `images/`. You can replace `buddy.jpg`, `beauty.jpg`, `dive.jpg`, `prepress.jpg`, `cube.jpg`, or `code.jpg` with your own images **using the same filenames**. Or edit the corresponding `<img src="images/…">` path in `index.html`. The remaining tiles use editable SVG placeholder files: `kidz.svg`, `ktl.svg`, `signwriting.svg`, `hotels.svg`.

**Important:** The six JPGs are CROPS OF YOUR SUPPLIED REFERENCE SCREENSHOT, not independently sourced original project photographs. Replace these with images you have the rights to use before publishing. The four SVGs are illustrative placeholders, not screenshots of the live websites.

Recommended images: 1200 px or wider, JPEG or WebP for photos, SVG or PNG for graphics. Use meaningful alt text in `index.html`.

## Edit external links and pop-up content
Open `script.js` and edit `projectInfo` near the top. Each project has `links` such as `website`, `facebook`, `instagram`, `github`. Add the URL to show an icon; omit it to hide that icon. Clicking the project image opens the case study pop-up. Clicking a social/website icon opens an external tab instead.

## Layout
Desktop: asymmetric image mosaic; tablet: two-column grid with featured tile; mobile: two columns with Buddy spanning two rows. Project filters retain their functionality.

## Preview
Open `index.html` in your browser, or run a local server (`python3 -m http.server 8000`) and visit `http://localhost:8000`.
