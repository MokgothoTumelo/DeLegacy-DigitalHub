# DE LEGACY Digital Hub

A small static HTML, CSS and JavaScript landing page for the four independent DE LEGACY destinations. It has no build step, server code or dependency installation.

## Edit destination links

Open `destinations.js` and replace the empty URL strings when the destination sites are ready:

```js
window.DE_LEGACY_DESTINATIONS = {
  run: "https://derun-eta.vercel.app/",
  clothing: "https://your-clothing-site.example/",
  opportunities: "https://your-opportunities-site.example/",
  partnerships: "https://your-partnerships-site.example/"
};
```

Leave a value empty to keep its card visible as “Coming soon”. DE RUN points to the existing deployment; this project does not include or change the DE RUN application.

## About section and founder image

The About section appears below the destination cards in the normal page scroll; it is not linked from the top navigation. Its text is in `index.html`. Replace the illustrative placeholder at `images/founder-placeholder.svg` with the founder's approved portrait when it is available, and update the image's `alt` text to describe the real photo.

## Preview locally

Open `index.html` in a browser. The page uses Google Fonts when internet access is available and falls back to system fonts when it is not.

## Deploy through the client's Vercel account

1. Create a new GitHub repository for this Hub and add the files in this folder to the repository root. Keep the DE RUN repository separate.
2. In the client's Vercel team, choose **Add New → Project**, import the new GitHub repository and deploy it. This static site needs no framework preset, build command or output directory.
3. Review the generated `*.vercel.app` preview and set the production branch in Vercel. Future pushes to the connected GitHub branch deploy automatically.
4. Decide the public address with the domain manager before assigning the custom domain:
   - **Subdomain**, such as `hub.delegacy.co.za`: add that hostname in the Hub project's **Settings → Domains**. Vercel will show the DNS record the client needs to add with their domain provider.
   - **Path**, such as `delegacy.co.za/digital-hub`: if the main domain already serves another website, route that path from the existing site's Vercel project to this Hub deployment (for example with a rewrite). Do not assign the apex domain to the new project unless the intention is to replace the existing site.
5. Wait for Vercel to verify the DNS and issue HTTPS, then check the final address and each configured destination link.

The client or domain manager needs to make DNS changes because they control the domain. Keep existing DNS records intact unless Vercel's domain screen specifically calls for a change. Vercel's required records can vary by domain and project; use the values shown in its dashboard rather than copying generic examples.

References: [Vercel custom domain setup](https://vercel.com/docs/domains/set-up-custom-domain) · [Vercel monorepos and project root directories](https://vercel.com/docs/monorepos)
