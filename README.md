# Motive Ambassadors — Next.js + TypeScript

A dark, premium-style ambassador portal built with Next.js App Router and TypeScript (`.tsx`).

## Included
- Login page for 15 named ambassador accounts (no sign-up)
- Signed, HTTP-only session cookie
- Home dashboard, status card, commission page, and about page
- Responsive mobile navigation
- Edit-friendly sample status colours, status labels, and commission figures in one file

## Run locally
1. Install Node.js 20.9 or newer.
2. Extract this folder and open it in VS Code.
3. Open a terminal in the project folder and run:

   ```bash
   npm install
   ```

4. Copy `.env.example` to `.env.local`.
5. Set `SESSION_SECRET` in `.env.local` to a long, random secret (at least 32 characters). Example format:

   ```env
   SESSION_SECRET=put-a-long-random-secret-here-change-this
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

7. Visit http://localhost:3000

## Sample login accounts

| Ambassador | Username | Sample password |
|---|---|---|
| Ambassador 1 | `ambassador1` | `Motive@101` |
| Ambassador 2 | `ambassador2` | `Motive@102` |
| Ambassador 3 | `ambassador3` | `Motive@103` |
| Ambassador 4 | `ambassador4` | `Motive@104` |
| Ambassador 5 | `ambassador5` | `Motive@105` |
| Ambassador 6 | `ambassador6` | `Motive@106` |
| Ambassador 7 | `ambassador7` | `Motive@107` |
| Ambassador 8 | `ambassador8` | `Motive@108` |
| Ambassador 9 | `ambassador9` | `Motive@109` |
| Ambassador 10 | `ambassador10` | `Motive@110` |
| Ambassador 11 | `ambassador11` | `Motive@111` |
| Ambassador 12 | `ambassador12` | `Motive@112` |
| Ambassador 13 | `ambassador13` | `Motive@113` |
| Ambassador 14 | `ambassador14` | `Motive@114` |
| Ambassador 15 | `ambassador15` | `Motive@115` |

**Security:** these are starter credentials for development. Replace every password in `lib/data.ts` with a unique password before sharing the site or deploying it. Because the requested site has no database/admin screen, changes to statuses and commission amounts are made in code and require a redeploy.

## Change an ambassador's status or commission
Open `lib/data.ts`. Each ambassador has these editable fields:

- `displayName`: the name shown in the portal
- `status`: `Active`, `Idle`, or `Probation`
- `statusText`: the large text shown on the status card
- `statusColor`: CSS colour value for the card/status
- `weeklyCommission`: weekly amount as a number
- `monthlyCommission`: monthly total as a number

Example:

```ts
{
  username: "ambassador1",
  password: "ReplaceWithUniquePassword",
  displayName: "Ada",
  status: "Active",
  statusText: "ACTIVE",
  statusColor: "#24c77a",
  weeklyCommission: 5000,
  monthlyCommission: 20000
}
```

Use hex colours such as `#24c77a` (green), `#7b8494` (grey), or `#f0a43a` (amber). The site formats commission values as Nigerian naira.

## Change brand links
Edit `motiveSiteUrl` and `socials` in `lib/data.ts`. The footer currently links to Instagram and TikTok placeholders; replace these with Motive's official profile URLs.

## Deploy
Deploy to Vercel or another Node-compatible host. Add `SESSION_SECRET` as an environment variable in the deployment settings. Do not commit `.env.local`. Run `npm run build` before deploying.

## Notes
- This project intentionally uses code-managed data instead of a database or admin dashboard, as requested.
- Sample commission values and statuses are placeholders, not real records.
- For a production launch, use unique credentials, HTTPS, and consider adding login rate limiting and a secure process for password changes.
