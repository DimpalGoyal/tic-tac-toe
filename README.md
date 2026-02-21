# Tic Tac Toe - React Version

A modern React implementation of the classic Tic Tac Toe game.

## Features

- Clean React component structure using hooks
- Improved winner detection logic (no hardcoding)
- Modern UI with hover effects
- Game status display
- Reset functionality
- Draw detection

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
ticTacToe/
├── src/
│   ├── App.jsx      # Main React component
│   ├── App.css      # Component styles
│   └── main.jsx     # React entry point
├── index.html       # HTML template
├── package.json     # Dependencies
└── vite.config.js   # Vite configuration
```

## Improvements Over Original

1. **React Hooks**: Uses `useState` for state management instead of global variables
2. **Component-based**: Clean separation of concerns
3. **Better Winner Logic**: Uses array-based winning combinations (already improved)
4. **UI Enhancements**: Modern styling with hover effects and better layout
5. **Game Status**: Clear display of current player and game results
6. **Reset Functionality**: Easy way to start a new game
