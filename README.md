# CutenessClash 🐱

A fun little app where users can vote for the cutest cat.
Built for a technical test — because who doesn't love ranking adorable cats?

## 🛠️ Technologies

- **Node.js**: Version 22.12.0
- **React**: 19.1.1
- **TypeScript**: 5.8.3
- **Vite**: 7.1.2
- **ESLint**: 9.33.0
- **SCSS**: Styles 

## 🚀 Getting Started

### Prerequisites
Make sure you have the correct Node.js version:
```bash
nvm use
```

### Installation
Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

### Development
Start the development server:
```bash
pnpm run dev
```

The app will be available at `http://localhost:5173/`

## 📁 Code Structure

```
src/
├── assets/              # Static assets (images, icons)
├── components/          # Reusable UI components
│   ├── layouts/         # Layout components
│   │   ├── layout.tsx
│   │   └── layout.scss
│   └── ui-components/   # UI component library
│       └── button/
│           ├── button.tsx
│           └── button.scss
├── pages/               # Page components
│   ├── home/
│   │   ├── home-page.tsx
│   │   └── home-page.scss
│   └── App.tsx
├── redux/               # State management
│   ├── actions/         # Redux actions
│   ├── reducers/        # Redux reducers
│   └── store.ts         # Redux store configuration
├── styles/              # Global styles
├── app-routes/          # Routing configuration
├── types/               # Routing types and interfaces
└── main.tsx             # Application entry point
```