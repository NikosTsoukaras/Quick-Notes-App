# Quick Notes App

A simple and modern notes application built with React. This app lets you create, edit, delete, search, tag, and organize notes by category. Notes are saved in your browser's localStorage for persistence.

## Features

- Create, edit, and delete notes
- Organize notes by category (All, Favorites, Trash, etc.)
- Tag notes and filter by tags
- Search notes by title or content
- Mark notes as favorites or move to trash
- Restore or permanently delete notes
- Responsive and accessible UI
- Persistent storage with localStorage

## Project Structure
```
.
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── src
    ├── App.jsx
    ├── main.jsx
    ├── assets/
    ├── components/
    │   ├── Icons/
    │   ├── Panel/
    │   ├── QuickviewNotes/
    │   ├── Sidebar/
    │   ├── TagsFilters/
    │   └── UI/
    ├── hooks/
    ├── store/
    ├── styles/
    └── utils/
```

## Getting Started

1. **Install dependencies:**
    ```bash
    npm install
    ```

2. **Run the development server:**
    ```bash
    npm run dev
    ```