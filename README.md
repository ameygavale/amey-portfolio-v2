## Local Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) after the server starts. Editing files under `src/` triggers automatic reloads.

## Project Video Hosting

Project demo videos are hosted outside the repository. Configure the base URL using an environment variable before running the app:

```bash
NEXT_PUBLIC_MEDIA_BASE_URL="https://storage.googleapis.com/YOUR_BUCKET_NAME"
```

Create a `.env.local` file for local development or set the variable in your deployment target. If the variable is not defined the app will look for videos under `/videos/...`; you can keep local MP4s in `public/videos/` for offline use (that folder is ignored by Git).

## Useful Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run lint` | Run ESLint checks |

## Deployment Notes

When deploying (Vercel, Netlify, Google Cloud Run, etc.), remember to set `NEXT_PUBLIC_MEDIA_BASE_URL` so the hosted videos load correctly.
