# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Contact form → your email

The contact section calls the Supabase Edge Function `send-contact-email`, which sends mail through [Resend](https://resend.com) and then stores a copy in the `contact_submissions` table.

1. Create a [Resend](https://resend.com) account and an API key.
2. In the [Supabase dashboard](https://supabase.com/dashboard) → **Project** → **Edge Functions** → **Secrets**, add:
   - `RESEND_API_KEY` — your Resend API key
   - `CONTACT_TO_EMAIL` — the inbox that should receive contact form messages (e.g. your Gmail)
   - `RESEND_FROM_EMAIL` (optional) — verified sender, e.g. `Your Name <mail@yourdomain.com>`. If omitted, the function uses Resend’s test address `Portfolio <onboarding@resend.dev>` (only suitable for testing; [verify a domain](https://resend.com/docs/dashboard/domains/introduction) for production).
3. Deploy the function (requires [Supabase CLI](https://supabase.com/docs/guides/cli)):  
   `supabase functions deploy send-contact-email`
4. Ensure the site’s env vars `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` point at the same Supabase project.

`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are provided automatically to Edge Functions; you do not set those manually.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Deploy on Cloudflare

This repo is configured for Cloudflare Workers static assets via `wrangler.jsonc` (and `wrangler` is a devDependency so CI uses a pinned CLI).

**Do not use** `npx wrangler deploy` on CI: it can download a fresh Wrangler and run **automatic Vite setup**, which runs `npm install @cloudflare/vite-plugin` and fails on Vite 5 (`ERESOLVE`).

Use Bun so the installed Wrangler + config are used:

```sh
bun run build
bunx wrangler deploy --config wrangler.jsonc
```

Recommended Cloudflare Workers Builds settings:

- Install command: `bun install --frozen-lockfile`
- Build command: `bun run build` (or leave empty if your pipeline runs build during install — you must have `./dist` before deploy)
- Deploy command: `bunx wrangler deploy --config wrangler.jsonc`

Commit **`wrangler.jsonc`** and an updated **`bun.lock`** after changing dependencies, or `bun install --frozen-lockfile` will fail in CI.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
