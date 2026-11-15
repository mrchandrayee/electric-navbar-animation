# Electric Navbar Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/electric-navbar-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A complete responsive recreation of the 15.5-second supplied screen recording.

## Visible design and interactions
- Dark navy/black stage with subtle square grid
- Centered rounded glass navigation bar
- Five navigation labels: HOME, PROJECTS, SERVICES, ABOUT, CONTACT
- Electric cyan/blue glow indicator follows the hovered or focused item
- Active item text glows cyan
- Clicking a nav item updates the selected section and preview copy
- CSS source panel with Copy CSS button

## Run
1. Extract the ZIP.
2. Open `index.html` in a modern browser, or use VS Code Live Server.
3. Hover, tab-focus, or click the navigation labels.
4. Use Copy CSS to copy the visible `.navbar` and `.nav-list` snippet.

No external dependencies, npm install, or build step required.

## CSS values directly readable in the video
The `.navbar` source in the recording shows:
- `background: rgba(18, 20, 29, 0.7)`
- `backdrop-filter: blur(10px)`
- `-webkit-backdrop-filter: blur(10px)`
- `border: 1px solid rgba(255, 255, 255, 0.05)`
- `padding: 1.5rem 3rem`
- `border-radius: 20px`
- `box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(0, 243, 255, 0.02)`
- `position: relative`
- `z-index: 10`

The `.nav-list` source shows:
- `display: flex`
- `list-style: none`
- `gap: 3rem`

## Reconstruction note
The recording displays the rendered electric hover effect but only a small portion of its source CSS is legible. The visible declarations above are preserved. The electric indicator, hover tracking, responsive behavior, and preview panel have been recreated as working supporting code; they are not claimed to be byte-for-byte recovered from the original unseen source.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
