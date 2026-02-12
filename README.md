# Space Tourism Website 🌌

A multi-page space tourism website built with **Vanilla JavaScript**. This project focuses on asynchronous data fetching, dynamic DOM manipulation and complex responsive layouts without relying on frameworks.

## 🚀 Overview

The goal was to build a multi-page experience (Home, Destination, Crew, Technology) where content changes dynamically based on user interaction. The project handles data retrieval from a local JSON file and updates the UI seamlessly, ensuring a smooth user experience across all device sizes.

## 🔗 Links

- **Live Site:** [View Live Demo](https://altindaselif.github.io/26-space-tourism-website-main/)
- **Code:** [View GitHub Repository](https://github.com/altindaselif/26-space-tourism-website-main)

## 💡 Key Features

- **📂 JSON Data Management:** Content is fetched asynchronously from a `data.json` file rather than being hardcoded in HTML.
- **🔄 Dynamic Content Switching:** Tabs (e.g., Moon/Mars, Crew Members) update text and images instantly without page reloads.
- **📱 Responsive Art Direction:** Uses the `<picture>` element and `srcset` to switch between landscape (tablet/mobile) and portrait (desktop) images.
- **✨ Glassmorphism UI:** Features a modern, frosted-glass navigation bar using `backdrop-filter`.
- **♿ Accessibility:** Includes `aria-label` attributes, keyboard navigation support, and respect for `prefers-reduced-motion` settings.

## 🛠️ Technical Implementation

### 1. Asynchronous Data Handling

To simulate a real-world application, data is separated from the view.

- **Solution:** An `async/await` function **was implemented** to fetch the `data.json` file. The data is stored in a global variable (`jsonData`) and specific helper functions (e.g., `updateCrewContent`) filter this data to update the DOM based on the user's selection.

### 2. Robust DOM Updates

Loading data dynamically can lead to errors if the data isn't ready when a user clicks.

- **Solution:** Safety checks (`if (!jsonData) return;`) **were added** within event listeners. This ensures the application doesn't crash if interactions occur before the data fetch is complete.

### 3. Advanced Layouts (CSS Grid)

The design shifts dramatically from a stacked layout on mobile to a complex grid on desktop.

- **Solution:** **CSS Grid was utilized** for the main layout structure, allowing for precise placement of overlapping elements (like the crew text and image) and ensuring the layout remains stable during dynamic content updates.

## 📸 Screenshots

- [View Desktop Version](./desktop-screenshot.png)
- [View Tablet Version](./tablet-screenshot.png)
- [View Mobile Version](./mobile-screenshot.png)

## 🧰 Built With

- **Semantic HTML5**
- **CSS3 (Grid, Flexbox & Custom Properties)**
- **Vanilla JavaScript (ES6+, Async/Await)**
- **Mobile-First Workflow**

## ✍️ Author

- **LinkedIn:** [Elif Altındaş](https://www.linkedin.com/in/elifaltindas/)
- **Frontend Mentor:** [@altindaselif](https://www.frontendmentor.io/profile/altindaselif)
- **GitHub:** [@altindaselif](https://github.com/altindaselif)
