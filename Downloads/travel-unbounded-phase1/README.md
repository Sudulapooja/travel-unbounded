# Travel Unbounded — Full Stack Web Developer Assignment (Phase 1)

A responsive travel company website built with Next.js App Router, TypeScript, MongoDB Atlas and a Next.js Route Handler.

## Tech Stack
- Next.js (App Router)
- React + TypeScript
- CSS (custom responsive styling)
- MongoDB Atlas + official MongoDB Node.js driver
- Vercel deployment ready
- react-phone-number-input for country-code phone validation

## Pages
- `/` — Home with hero, India destinations and international destinations
- `/about` — Company story, offices and values
- `/contact` — Booking enquiry form
- `POST /api/enquiry` — validates and stores enquiries
- `GET /api/enquiry` — optional endpoint returning the latest 100 enquiries

## Local Setup

1. Install Node.js 18+.
2. Install dependencies:
   `npm install`
3. Copy `.env.example` to `.env.local`.
4. Create a MongoDB Atlas free cluster and add your connection string.
5. Put your values in `.env.local`:
   `MONGODB_URI=...`
   `MONGODB_DB=travel_unbounded`
6. Run:
   `npm run dev`
7. Open `http://localhost:3000`.

## Database
The `enquiries` collection stores:
- fullName
- contactNumber
- email
- travelDate
- numberOfPeople
- hotelCategory
- children
- createdAt

Both client-side and server-side validation are implemented.

## Deployment
Push the project to GitHub and import the repository into Vercel. Add the same `MONGODB_URI` and `MONGODB_DB` values in the Vercel project's Environment Variables, then redeploy.

Do not commit `.env.local` or real credentials. `.env.example` is safe to commit.

## Assumptions
- Destination descriptions, images and prices are dummy/static data as permitted by the assignment.
- No authentication/admin UI is included because it is optional.
- The GET enquiry endpoint is included as a small bonus, but should be protected before exposing sensitive enquiry data in a real production system.
- Unsplash image URLs are used for the assignment and can be replaced with downloaded/licensed assets if required.

## Git Practice
For the evaluation, use several meaningful commits rather than one final commit, for example:
1. `feat: initialize next app`
2. `feat: build responsive travel pages`
3. `feat: add destination data and cards`
4. `feat: add enquiry form validation`
5. `feat: connect enquiry API to mongodb`
6. `docs: add setup and deployment guide`

## Important
Before submission, test the full flow on the deployed URL:
Home → Contact → submit future-date enquiry → verify success message → verify the document appears in MongoDB Atlas.
