# SvaraScience — The Rhythm Brain

The website for **svarascience.org**. Plain HTML, CSS and JavaScript: no build tools, no frameworks. Open any `.html` file in a browser to see it.

## What's in the folder

```
index.html        Home: question, vision and mission, three parts, story, demo, status, talk video
clap.html         The CLAP method: four steps, demo, what it's built for
research.html     Experiment 1 timeline, Experiment 2, advisors
about.html        Founder, recognition, Svara Learning in action, podcast, contact
assets/css/style.css   ALL the styling. Colors and fonts are at the top in :root
assets/js/tala.js      The tap-along tala demo (used on Home and CLAP)
assets/img/            Logo (light and dark), icon, favicons, photos, video poster
assets/video/          The Orator Academy talk (MP4)
```

## Making changes

- **Change words:** edit the text inside the `.html` file. Each page has the same menu (`<header class="site-nav">`) and footer (`<footer class="site-footer">`), so if you change the menu, change it on all four pages.
- **Change a color everywhere:** edit the value in `:root` at the top of `style.css`. For example, `--navy` is used for headings, the hero and the footer.
- **Change a photo:** replace the file in `assets/img/` with one of the same name, or change the `src` in the page.
- **Update research results:** edit `research.html` (and the "Where things stand" section on `index.html`).

## Before going live: check these

- [ ] Replace both `[add link]` placeholders on `about.html` with Ajay's portfolio link, or delete those lines.
- [ ] Professor Glass and Professor Dorrity are okay being named on a public website.
- [ ] The podcast link plays for anyone (test it in a private browser window).

## Putting it live on svarascience.org (GitHub Pages)

1. Create a free GitHub account and a new **public** repository, for example `svarascience-site`.
2. Upload everything in this folder (drag and drop on the GitHub website). `index.html` must be at the top level, not inside another folder.
3. In the repository: **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, branch **main**, folder **/ (root)**. Save. After a minute or two the site appears at `https://<your-username>.github.io/svarascience-site/`. Check every page there.
4. On the same Pages screen, type `svarascience.org` under **Custom domain** and click **Save**. Do this before step 5.
5. With Dad, at the company where svarascience.org is registered:
   - Disconnect the domain from Carrd first.
   - In the DNS settings, replace Carrd's website records with GitHub's: four **A** records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and a **CNAME** record for `www` pointing to `<your-username>.github.io`.
   - **Do not touch the MX (email) records**, so hello@svarascience.org keeps working.
   - Check GitHub's own instructions on the day, in case the addresses have changed.
6. Wait. DNS changes can take up to 24 hours.
7. Back on the Pages screen, tick **Enforce HTTPS** once it's available. Then open svarascience.org on a phone and a laptop.

## Updating later

Edit the files, upload them to the same repository (replace the old ones), and the live site updates within a few minutes.
