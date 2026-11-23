# Marjiyas' Cake Studio — Website Starter

## 1) Add your cake photos
Open `assets/images/` and upload your photos using these exact filenames:

- `hero-cake.jpg` — large homepage banner cake photo
- `birthday.jpg`
- `anniversary.jpg`
- `wedding.jpg`
- `chocolate.jpg`
- `kids.jpg`
- `corporate.jpg`
- `custom.jpg`
- `gallery-1.jpg` through `gallery-6.jpg`

**Important:** Keep the filenames exactly the same, including `.jpg`. If your photo is PNG, either convert it to JPG or update the matching filename in `index.html`. Use your own cake photos for best results. Recommended banner image: landscape, around 1600 × 1000 px. Product/gallery photos: square or portrait, at least 900 px wide.

## 2) Upload to GitHub
1. Create a public repository named `marjiyas-cake-studio` (or another name you prefer).
2. Upload all files and folders from this project. Do not upload only `index.html`; upload the `assets` folder too.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then Save.
6. Wait for GitHub Pages to publish and open the website URL shown on the Pages screen.

The homepage file `index.html` must stay in the repository root.

## 3) Connect the Google Order Form
1. Create a Google Form with customer name, phone, occasion, flavour, size/weight, cake message, delivery date, delivery area/address, budget, reference photo upload and notes.
2. Click **Send → Link** and copy the public responder link.
3. Open `assets/js/script.js` in GitHub.
4. Replace `https://forms.google.com/` in `ORDER_FORM_URL` with your real Google Form URL.
5. Commit the change.

Note: Google Forms file-upload questions generally require the customer to sign in to a Google Account.

## 4) WhatsApp and Facebook
The WhatsApp number is already connected to `https://wa.me/8801983559830`.
The Facebook link is already set to `https://www.facebook.com/share/1CxCuUKdJ7/`.

## 5) Before launch
- Replace all photo slots with real cake photos.
- Add your actual delivery areas, starting prices, flavours and order lead time.
- Test WhatsApp links on a phone.
- Submit a test order using your Google Form.
- Do not put private customer information, passwords or payment credentials in this public repository.

GitHub Pages serves static HTML/CSS/JavaScript. It does not provide a private database or admin order dashboard by itself.
