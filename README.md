# Blue Crane Vineyards — EU ingredient e-labels

This repository is the source of truth for the ingredient and nutrition pages that the bottle QR codes open.

Each printed code encodes a URL on `www.bluecrane.co.za`. The matching page in `elabels/` carries the EU ingredient list, allergen statement, and nutrition declaration (English, Spanish, French, German, and Mandarin). The pages do not use tracking.

Production files:

| Path | Role |
| --- | --- |
| `elabels/` | Pages to publish at `/ingredients/` (`index.html`, four wine pages, `style.css`, `common.js`) |
| `qrcodes/` | Print QR images (`*-qr-print.png`, 900 × 900 px) |
| `Blue_Crane_Wine_Ingredient_QR_Codes.pdf` | Print sheet with the four codes, destinations, and nutrition figures |
| `archive/draft-elabels/` | Earlier draft pack. Reference only. |

## Wines

Nutrition below is per 100 ml, taken from the print pack (laboratory alcohol and residual sugar). On these four wines, sugars equal carbohydrate.

| Wine | Alcohol | Energy | Carbohydrate | Destination URL |
| --- | --- | --- | --- | --- |
| Shiraz 2022 | 15.32% vol | 356 kJ / 86 kcal | 0.3 g | https://www.bluecrane.co.za/ingredients/shiraz-2022 |
| Pinotage 2022 | 14.65% vol | 340 kJ / 82 kcal | 0.3 g | https://www.bluecrane.co.za/ingredients/pinotage-2022 |
| Sauvignon Blanc / Viognier 2025 | 13.82% vol | 318 kJ / 77 kcal | 0.1 g | https://www.bluecrane.co.za/ingredients/sauvignon-blanc-viognier-2025 |
| Sauvignon Blanc 2025 | 13.0% vol | 301 kJ / 73 kcal | 0.2 g | https://www.bluecrane.co.za/ingredients/sauvignon-blanc-2025 |

| Wine | Page | Print QR |
| --- | --- | --- |
| Shiraz 2022 | `elabels/shiraz-2022.html` | `qrcodes/shiraz-2022-qr-print.png` |
| Pinotage 2022 | `elabels/pinotage-2022.html` | `qrcodes/pinotage-2022-qr-print.png` |
| Sauvignon Blanc / Viognier 2025 | `elabels/sauvignon-blanc-viognier-2025.html` | `qrcodes/sauvignon-blanc-viognier-2025-qr-print.png` |
| Sauvignon Blanc 2025 | `elabels/sauvignon-blanc-2025.html` | `qrcodes/sauvignon-blanc-2025-qr-print.png` |

Supplier on every page: Blue Crane Vineyards (Pty) Ltd, P.O. Box 306, Tulbagh 6820, South Africa.

## Print size

Use the PNG files in `qrcodes/` or the marks in `Blue_Crane_Wine_Ingredient_QR_Codes.pdf`.

- Print each QR at **16 mm × 16 mm**.
- Do not print smaller than **12 mm**.
- Keep the quiet zone and print in high contrast. The supplied artwork already includes the quiet zone.
- Place the word **INGREDIENTS** next to the code, in the same field of vision as the other mandatory particulars. The print sheet already sets that word under each mark.
- The physical label still carries the energy value for 100 ml (for example `E = 356 kJ / 86 kcal`) and **Contains sulphites**.

The codes already encode the four `www.bluecrane.co.za` URLs above. Leave them unchanged unless those live URLs change.

## Hosting on bluecrane.co.za

Publish the **contents** of `elabels/` at `https://www.bluecrane.co.za/ingredients/`. File names match the QR slugs. `style.css` and `common.js` stay beside the HTML files, because the pages load them with relative URLs.

| Public URL | File |
| --- | --- |
| https://www.bluecrane.co.za/ingredients/ | `index.html` |
| https://www.bluecrane.co.za/ingredients/shiraz-2022 | `shiraz-2022.html` |
| https://www.bluecrane.co.za/ingredients/pinotage-2022 | `pinotage-2022.html` |
| https://www.bluecrane.co.za/ingredients/sauvignon-blanc-viognier-2025 | `sauvignon-blanc-viognier-2025.html` |
| https://www.bluecrane.co.za/ingredients/sauvignon-blanc-2025 | `sauvignon-blanc-2025.html` |

Checklist:

1. Copy `index.html`, the four wine pages, `style.css`, and `common.js` together into the site directory that serves `/ingredients/`.
2. Serve the URLs **without** a `.html` suffix. The printed codes omit it.
   - Apache, in that directory: `Options +MultiViews`
   - nginx: `try_files $uri $uri.html $uri/ =404;`
3. Serve the pages over HTTPS on `www.bluecrane.co.za`.
4. Open each of the four URLs on a phone. Confirm the wine name, “Contains sulphites”, the nutrition table, and the language buttons.
5. Leave the pages as the ingredient and nutrition declaration only. Do not add analytics, cookies, or marketing.
6. Scan each file in `qrcodes/` after the pages are live and confirm it opens the matching URL.

GitHub Pages can preview `elabels/` from this repository (for this repo, a root Pages site would expose the folder under the project path, for example `https://nixanix.github.io/Blue-Crane-/elabels/`). That preview is optional. Bottle QR codes still open `www.bluecrane.co.za` until the live site is updated. Do not regenerate the QR codes to point at GitHub Pages.

## Draft pack

`archive/draft-elabels/` keeps the earlier draft so it is not lost. It is not the production pack.

Do not print its QR codes, publish its HTML, or use its nutrition figures on labels. Those codes point at placeholder `yourdomain.com` URLs (such as `https://yourdomain.com/elabel/bluecrane-shiraz-2022`), and the energy values in its `README.txt` are older estimates that differ from the laboratory figures in the table above.
