# Badminton Strategy

App to develop strategy for badminton


## To Do
- [ ] - deployment to Vercel
- [X] - save drawings as frames
- [X] - arrow keys support (left, right, ctrl+s, delete)
- [ ] - draggable player icons on court for Singles and Doubles
- [ ] - mobile support
- [ ] - persist state via serverless function
- [ ] - magic links to access server state

## Backlog
- [ ] - add pre-built components to drag and drop (Birdie)
- [ ] - fix occasional bug `TypeError: Cannot read properties of null (reading 'offsetWidth')`


## Initialize Steps
- `yarn create next-app --javascript --no-tailwind --eslint --no-app --src-dir --import-alias "@/*" --use-yarn next-badminton-strategy`
- `yarn add react-konva`
- `yarn add react-dnd react-dnd-html5-backend`
- `yarn add @mui/material @emotion/react @emotion/styled`
- add example code from react-konva for dragging shapes
- `yarn add -D @trivago/prettier-plugin-sort-imports`
- add formatting rules for code and imports in `.prettierrc.json`, `.prettierrcignore`, and `.eslintrc.json`

## Commands
- format: `yarn run prettier --write .`

# NEXT.JS README

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
