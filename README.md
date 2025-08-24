# zeroone-hosting — GitHub Pages deployment

This repository contains a static site (HTML/CSS/JS) intended to be published via GitHub Pages at the custom domain `zeroone.traefikturkey.com`.

What I added:
- `CNAME` — contains `zeroone.traefikturkey.com` so Pages serves the site at your custom domain.
- `.github/workflows/deploy-pages.yml` — GitHub Actions workflow that deploys the repository root to GitHub Pages on push to `main`.

Next steps (push and DNS configuration):

1) Create a GitHub repository and push this project. Replace `<GITHUB_USER>` and `<REPO>` in the commands below.

```powershell
# from this project root
git init
git add .
git commit -m "Initial site + GitHub Pages workflow"
git branch -M main
# create the remote repo on GitHub (or create via web UI) and then:
git remote add origin https://github.com/<GITHUB_USER>/<REPO>.git
git push -u origin main
```

2) Enable GitHub Pages (usually automatic after the workflow deploys). The workflow will publish to the special Pages deployment target.

3) Cloudflare DNS: create a CNAME for the subdomain and set proxy to "DNS only" (grey cloud). Point `zeroone` to your GitHub Pages host:

 - Name: `zeroone`
 - Type: `CNAME`
 - Target: `<GITHUB_USER>.github.io`
 - Proxy status: DNS only (important — GitHub Pages TLS requires this)

4) Wait a few minutes for the workflow to run after pushing. In the repository Settings → Pages you should see the site and the custom domain. Enable HTTPS if available.

Notes and assumptions:
- I assumed your default branch will be `main`. If you use `master` or another branch, update `.github/workflows/deploy-pages.yml` accordingly.
- I cannot create the remote repo or change Cloudflare settings from here, so you'll need to perform those two steps.

If you want, I can:
- create a `package.json` + tiny build step (if you later add a static site generator),
- switch the workflow to publish only `docs/` or another directory, or
- generate an automatic Cloudflare API script to create the DNS record (you'd need to provide an API token).
