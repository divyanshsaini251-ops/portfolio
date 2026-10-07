# Divyansh Saini - 8 Ball Pool Portfolio

A mobile-game style portfolio themed on 8 Ball Pool. Plain HTML, CSS and JavaScript, with no build step and no dependencies.

## Pages (tabs)
- **Lobby**: intro, profile, quick links
- **Play**: playable pool table (drag back from the cue ball, release to shoot)
- **Locker**: skills
- **Tables**: projects (DocWatch, ShopEase, TaskFlow) with GitHub links
- **Levels**: internships and education
- **Chat**: email, call, text, WhatsApp, GitHub, message composer

## Structure
```
index.html
css/style.css
js/main.js        (content data, router, chat, pool game)
resume/Divyansh_Saini_Resume.pdf
```

## Run locally
Open `index.html` in a browser, or serve the folder:
```
npx serve .
```

## Deploy
Upload the folder to any static host: Vercel, Netlify, GitHub Pages or Cloudflare Pages. Use the folder root as the publish directory.

## Edit your content
Open `js/main.js`. The skills (`SK`), projects (`PJ`) and internships (`EX`) arrays at the top hold all the text and links. Contact details are in `index.html` (search for `divyanshsaini251@gmail.com` and `6377808960`).

## Notes
- Headings use Google Fonts (Bungee, Rajdhani) and need an internet connection; a fallback font is used offline.
- WhatsApp links assume WhatsApp is active on +91 6377808960.

## Contact form (EmailJS)
The Chat page sends messages to your inbox through EmailJS. Put your Public Key, Service ID and Template ID in `js/config.js`. Paste `emailjs-template.html` into your EmailJS template (Code Editor). Until the keys are set, the form shows a message and the "Open mail app" fallback still works.
