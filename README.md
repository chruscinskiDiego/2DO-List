# 2DO — task list

React and TypeScript study application for managing tasks in the browser.

## Source branch

The implementation is on the [master branch](https://github.com/chruscinskiDiego/2DO-List/tree/master). The main branch contains this project overview.

## Features

- Task creation modal.
- Task components with completion and removal actions.
- Reads task state from localStorage.
- Interface with CSS Modules and react-feather icons.

## Run locally

```bash
git clone --branch master https://github.com/chruscinskiDiego/2DO-List.git
cd 2DO-List
npm ci
npm run dev
```

## Commands

- `npm run build`: TypeScript checks and Vite build.
- `npm run lint`: static analysis.
- `npm run preview`: preview the build.

## Scope

Personal frontend project without a server API or authentication. Check persistence behavior for each operation before treating it as a complete task manager.
