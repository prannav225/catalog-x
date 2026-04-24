# CatalogX | Dynamic Multi-Category Archive

**CatalogX** is a high-fidelity, data-driven product catalog system built with React and Tailwind CSS. It is designed to serve as a sophisticated industrial directory for diverse product categories, ranging from automotive assets to technological hardware.

---

## Core Features

### 1. Dynamic Category Architecture

The application dynamically parses `data.json` to generate category-specific sections and specification grids. This abstraction allows for seamless scaling as new categories or properties are added to the source data.

### 2. Dual-Theme Intelligence

Includes a robust Light/Dark theme switcher with persistent storage.

- **Light Mode**: An editorial, off-white (`#FBFAF8`) layout focused on high-contrast readability.
- **Dark Mode**: A deep-surface (`#1C1D21`) experience with optimized accent colors for technical data visualization.

### 3. Editorial Typography

- **Headings**: Uses **Boska** (Serif) for an authoritative, high-end editorial feel.
- **Body**: Uses **Inter** (Sans-Serif) for maximum technical legibility and modern aesthetics.

### 4. Smart Image Resilience

The system handles inconsistent external image URLs via a reactive fail-safe mechanism:

- **Detection**: Uses the `onError` event listener on all image components.
- **Fallback**: Automatically generates a branded, informative placeholder via `placehold.co` if the original asset fails to load, ensuring the UI never breaks.

---

## Technical Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 (Alpha/Experimental Engine)
- **Icons**: Lucide React
- **Typography**: Fontshare (Boska) & Google Fonts (Inter)
- **Routing**: React Router 7

---

## Performance & Optimization

- **Tailwind v4 Engine**: Leverages the latest CSS-variable driven styling engine for ultra-fast build times and minimal runtime overhead.
- **Minimalist Geometry**: Moves away from generic "AI-generated" aesthetics by using sharp `rounded-sm` corners and structured border-based layouts.
- **Efficient Rendering**: Uses optimized component structures to ensure smooth transitions and fast page loads, even with large datasets.
- **Responsive Architecture**: Built with a mobile-first approach, ensuring the technical data sheets are legible across all device classes.

---

## Project Structure

- `/src/components`: Reusable UI components (Navbar, ItemCard, etc.)
- `/src/pages`: Main page layouts (HomePage, ItemDetailPage)
- `/src/context`: Theme and State management
- `/src/data`: Data parsing logic and category metadata
- `/src/index.css`: Global design system and theme variables
