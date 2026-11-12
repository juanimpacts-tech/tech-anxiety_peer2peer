# project checkpoint. — GitHub Pages website

A static, responsive website for project checkpoint., a free non-clinical peer-listening initiative focused on uncertainty about AI and emerging technologies.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server 8000` in this directory and visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a public GitHub repository (for example, `project-checkpoint-site`).
2. Upload the five files in this folder to the **root** of the repository: `index.html`, `styles.css`, `script.js`, `config.js`, and `README.md`.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, branch **main**, folder **/(root)**, then **Save**.
5. GitHub will show your public site URL once the deployment is available.

No build system, Node.js, framework, or server is required.

## Connect bookings, volunteer registration, and email interest

Edit `config.js`:

```js
window.CHECKPOINT_CONFIG = {
  BOOKING_URL: 'https://your-booking-page.example',
  VOLUNTEER_URL: 'https://your-volunteer-form.example',
  FORMSPREE_ENDPOINT: 'https://formspree.io/f/your-form-id'
};
```

- **Booking:** use the *actual* public Acuity/Squarespace Scheduling link; configure a free 20-minute appointment in Acuity. GitHub Pages does not itself schedule appointments.
- **Volunteer:** link to a live application or interest form. Until configured, the page says registration is coming soon.
- **Email interest:** if desired, create a form at Formspree and connect its endpoint. Until connected, the page does **not** pretend to collect email addresses. The copy explicitly says there is no newsletter. Make sure your privacy notice matches the information you collect and how you use it.
- **Avoid collecting sensitive personal stories** in the email-interest form. It requests an email address and consent only.

**Important:** GitHub Pages is public hosting for static files; do not put private data, API keys, passwords, or participant information in this repository or `config.js`.

## Content and launch checklist

- [ ] Configure real booking URL, free appointment type, and availability
- [ ] Configure volunteer registration URL (or keep the coming-soon label)
- [ ] Decide whether to collect email interest; connect a form service and publish an appropriate privacy notice if so
- [ ] Confirm peer-volunteer training and safeguarding processes before accepting sessions
- [ ] Review non-clinical scope statement and crisis referral (988 is U.S.-specific)
- [ ] Test mobile layout, keyboard accessibility, links, and scheduling checkout
- [ ] Add custom domain in **Settings → Pages** if purchased, then configure DNS and HTTPS

Fonts load from Google Fonts; when offline, the design falls back to system fonts.

## Editing the site

- `index.html` — page wording and sections
- `styles.css` — layout, colors, responsive design
- `script.js` — navigation and optional form behavior
- `config.js` — external URLs/settings

This is an original implementation based on the project checkpoint. messaging. It is not a Squarespace export or pixel-perfect copy of the current Squarespace theme.
