# Unplug Me website

Standalone static website for https://unplugmeapp.com. No build step, JavaScript runtime, or package installation is needed. All app code remains in the separate Landline project.

## Preview

From this folder, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. Stop with Control-C. Opening index.html directly also works for the homepage and guide links.

## Edit

Edit `index.html` for the homepage and `guides/<topic>/index.html` for articles. Shared styling is in `assets/style.css`. The HTML is deliberately static; update shared navigation/footer consistently across pages. Guide dates reflect the content review date, not a claimed publication date. Update visible dates and Article dateModified when reviewing content.

Product claims are based on the App Store listing for app ID 6791308579, reviewed October 7, 2026. There are no visitor trackers or forms. Existing privacy and terms links remain on findfreetime.com. The FAQ links visitors to App Store developer support; add a direct support address when one is confirmed for Unplug Me.

## Publish with GitHub Pages

1. Create a public GitHub repository named `unplugmeapp` under `nicolekelner`. Upload this folder's contents to its root, including `CNAME` and `.nojekyll`. Do not upload the Landline app repository.
2. In repository Settings → Pages, choose **Deploy from a branch**, branch **main**, folder **/(root)**. Save.
3. Verify ownership of unplugmeapp.com in your GitHub account's Pages settings using the TXT record GitHub supplies. Set the repository's Pages custom domain to `unplugmeapp.com` before changing its routing records.
4. At the domain provider, set the apex (`@`) A records to:

   ```text
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   Set `www` as a CNAME pointing to `nicolekelner.github.io`. Preserve unrelated email and verification records. Replace conflicting website routing records only.
5. Once DNS validates, enable **Enforce HTTPS** in Pages. GitHub redirects www to the primary domain. Certificate availability can take time.
6. Confirm the homepage, all three direct guide URLs, privacy/terms links, App Store links, and a nonexistent URL (custom 404) work on the live domain. Verify https://www.unplugmeapp.com redirects to https://unplugmeapp.com.

Official setup instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

The GitHub CLI was unavailable during implementation. No remote repository, deployment, DNS change, Search Console verification, or sitemap submission has been performed.

## Search launch

- Verify the domain in Google Search Console and Bing Webmaster Tools using the verification records they provide.
- Submit https://unplugmeapp.com/sitemap.xml to both services.
- Inspect the four canonical URLs for indexability after deployment.
- Update the App Store marketing website URL to https://unplugmeapp.com when live. Retain existing legal URLs unless deliberately migrated.
- Review impressions, clicks, and indexed pages in the webmaster tools. Website-to-install attribution is not implemented. Search visibility and inclusion in AI answers are not guaranteed.

## Assets

Phone illustrations and app icon are copied, resized, and optimized from the Unplug Me app's existing assets. Jost is bundled with its SIL Open Font License in assets/Jost-LICENSE.txt. The social preview is composed from the same original artwork. No external font requests are made.

## Validation completed

- Checked all five HTML pages for local link/fragment targets, images with alt text, unique IDs, and one primary heading each.
- Parsed JSON-LD and confirmed all four sitemap routes exist.
- Checked homepage and article template in Chrome at 320, 390, 768, and 1440 pixels: no horizontal overflow; all images decoded successfully.
- Confirmed FAQ opens from the keyboard and reduced-motion mode disables smooth scrolling.
- Visually reviewed desktop homepage and full mobile homepage.
- Confirmed privacy and terms URLs redirect to working HTTPS pages (HTTP 200).

Live custom-domain routing, HTTPS, and webmaster-tool submission still require deployment.

## Blog

The blog lives at `/blog/` and has ten original static articles under `/blog/<topic>/`. Each article has its own canonical URL, description, visible byline/date, BlogPosting data, related reading, and App Store link. Update the blog index, homepage link, and `sitemap.xml` when adding or removing a post. Product claims should be checked against the current App Store listing before updating articles. Search and AI answer inclusion are not guaranteed.


## Resources

The `/resources/` hub links to a U.S. retreat guide, a searchable 43-center directory, and an eight-tool screen time app comparison. The retreat directory's editable source data is `data/retreats.json`; its visible cards are pre-rendered in HTML for crawling and no-JavaScript use. `assets/retreat-finder.js` filters those cards in the browser. The directory adapts Free Time's June 2025 list; the changed names and broken destination links were updated October 7, 2026. Phone policies, program availability, and pricing should be reviewed directly with each center before future content updates. The comparison intentionally omits volatile prices and links to vendor sources for current details.
