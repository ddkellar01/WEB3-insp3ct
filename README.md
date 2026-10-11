[![Build Browser Extension](https://github.com/ddkeller01/WEB3-insp3ct/actions/workflows/build-extension.yml/badge.svg)](https://github.com/ddkeller01/WEB3-insp3ct/actions/workflows/build-extension.yml)
[![Build Mobile Binaries](https://github.com/ddkeller01/WEB3-insp3ct/actions/workflows/build-mobile.yml/badge.svg)](https://github.com/ddkeller01/WEB3-insp3ct/actions/workflows/build-mobile.yml)

# WEB3-insp3ct

## What is this about?
This project is a helpful toolkit named **WEB3-insp3ct** built for computer programmers[span_0](start_span)[span_0](end_span). It lets them look inside web pages, browser helpers, and crypto money networks[span_1](start_span)[span_1](end_span).

---

## What this does?
* It checks web page structures and browser extensions[span_2](start_span)[span_2](end_span).
* It listens to and records crypto network messages[span_3](start_span)[span_3](end_span).
* It builds phone apps for both iOS and Android using Flutter[span_4](start_span)[span_4](end_span).
* It uses automated robot helpers on GitHub to test and package everything safely[span_5](start_span)[span_5](end_span).

---

## How does this works?
* It uses a special browser extension that sneaks a peek at web pages and catches crypto network calls[span_6](start_span)[span_6](end_span).
* It includes a mobile companion app built with Flutter so you can monitor things on your phone[span_7](start_span)[span_7](end_span).
* It relies on handy script files and Docker tools to build zip packages and phone apps automatically[span_8](start_span)[span_8](end_span).

---

## Why is this cool? (10 reasons)
1. It works on both regular computer web browsers and mobile phones[span_9](start_span)[span_9](end_span).
2. It catches hidden crypto network messages easily[span_10](start_span)[span_10](end_span).
3. It builds itself automatically using robot helpers in GitHub Actions[span_11](start_span)[span_11](end_span).
4. It has a simple popup button to turn the inspector on and off[span_12](start_span)[span_12](end_span).
5. It shows live status updates right inside your browser's developer tools[span_13](start_span)[span_13](end_span).
6. It includes mock servers so you can test your code even without the internet[span_14](start_span)[span_14](end_span).
7. It comes with clean shell scripts to wipe away junk files and build fast[span_15](start_span)[span_15](end_span).
8. It supports building apps for both Apple and Android gadgets[span_16](start_span)[span_16](end_span).
9. It uses modern building tools like Webpack and Flutter[span_17](start_span)[span_17](end_span).
10. It keeps all its files organized neatly in a clean project folder[span_18](start_span)[span_18](end_span).

---

## What problems this solves? (10 solutions)
1. Solves the mystery of not knowing what a crypto app is doing behind the scenes[span_19](start_span)[span_19](end_span).
2. Fixes the boring chore of building phone apps by making robots do it[span_20](start_span)[span_20](end_span).
3. Stops programmers from guessing if their code works by adding unit tests[span_21](start_span)[span_21](end_span).
4. Cleans up messy build folders automatically with quick cleanup scripts[span_22](start_span)[span_22](end_span).
5. Makes it easy to test browser extensions using modern Manifest V3 rules[span_23](start_span)[span_23](end_span).
6. Bridges web tools with mobile phones so you can check things on the go[span_24](start_span)[span_24](end_span).
7. Prevents broken code from being published using automatic workflow checks[span_25](start_span)[span_25](end_span).
8. Helps fix broken project setups using automated helper scripts[span_26](start_span)[span_26](end_span).
9. Eliminates waiting around by keeping fake network data ready for offline practice[span_27](start_span)[span_27](end_span).
10. Keeps code tidy and easy to share with a clear folder layout[span_28](start_span)[span_28](end_span).

---

## How to install this?
1. Download or clone the project folder to your computer[span_29](start_span)[span_29](end_span).
2. Open your command terminal and type `npm install` to download the web tools[span_30](start_span)[span_30](end_span).
3. Type `npm run dev` to start testing your extension[span_31](start_span)[span_31](end_span).
4. To build mobile apps, make sure you have Flutter installed and run the build scripts[span_32](start_span)[span_32](end_span).

---

## Requirements?
* Node.js and npm[span_33](start_span)[span_33](end_span)
* Flutter SDK (for building phone apps)[span_34](start_span)[span_34](end_span)
* Docker (optional, for running container builds)[span_35](start_span)[span_35](end_span)
* Git and GitHub for automatic workflows[span_36](start_span)[span_36](end_span)

---

## Project Tree
```text
WEB3-insp3ct/
├── .github/
│   └── workflows/
│       ├── build-extension.yml[span_37](start_span)[span_37](end_span)
│       └── build-mobile.yml[span_38](start_span)[span_38](end_span)
├── android/[span_39](start_span)[span_39](end_span)
├── extension/[span_40](start_span)[span_40](end_span)
├── ios/[span_41](start_span)[span_41](end_span)
├── lib/[span_42](start_span)[span_42](end_span)
├── scripts/[span_43](start_span)[span_43](end_span)
├── src/[span_44](start_span)[span_44](end_span)
├── tests/[span_45](start_span)[span_45](end_span)
├── .gitignore[span_46](start_span)[span_46](end_span)
├── Dockerfile[span_47](start_span)[span_47](end_span)
├── LICENSE[span_48](start_span)[span_48](end_span)
├── README.md[span_49](start_span)[span_49](end_span)
├── build_ios.sh[span_50](start_span)[span_50](end_span)
├── fix_project.sh[span_51](start_span)[span_51](end_span)
├── package.json[span_52](start_span)[span_52](end_span)
├── pubspec.yaml[span_53](start_span)[span_53](end_span)
└── webpack.config.js[span_54](start_span)[span_54](end_span)
