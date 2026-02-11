## Reflection

- [x] deployed on Vercel: https://didit-reddit-upvote-example-smoky.vercel.app/

I have found the setup guide clear and I was able to quite quickly get the page working on Vercel (also thanks to the youtube video guide). The only issue I encountered were the naming conventions in supabase but I managed to adapt it.

I then had a look through the stretchgoals both on Moodle and the Readme and went through the ones I felt confident completing in the time. There was a lot I was able to use from last weeks and weeks 8 assignment. I think the majority of my time went on understanding the exisiting code without overwhelming myself (as in I have not looked at all components or files, only the ones I thought were relevant for the features I wanted to add). I also wanted to add the ones I thought made the most sense for being an initial protoype.

The stretchgoal about infinite uploads I did not quite get, as when I tried to vote more than once, it sets it back to 0. But to fully understand this, I believe I need more time.

I also learned some additional sql syntax (coalesce) which was super interesting.

The main thing I have taken from this assignment was to take my time and set clear goals. Otherwise I think I would have been overwhelmed and would have made mistakes where there didn't need to be any.

# Improvements

I think I would refactor the setup slightly and add the header as a component rather than have it sitting within in layout.jsx. Otherwise scaling the app might get diffcult. I would also add the voting function in the action folder the same as comments (that would then probably also enable me to debug the upvote error).

It might be good to check on the npm packages as several had severe vulnerabilities, so might add a note to the README so users can expect it and fix if necessary on their local machine.

# Stretchgoals achieved:

- [x] User profiles
- [x] Sorting posts by recent (date posted), top (most upvotes), and most controversial (most upvotes _and_ downvotes)
- [x] Metadata on PostPage

Overall I really enjoyed this and it made me less anxious to go into more technical tasks or start as a memebr of the development team.

## Resources:

# SQL

https://www.w3schools.com/sql/func_sqlserver_coalesce.asp

## Upvote

Upvote is a Reddit-esque web application that allows users to create posts, upvote and downvote posts, and comment on posts in a multi-threaded, nested list.

The project is built using Next.js with the /app router and [Tailwind CSS](https://tailwindcss.com/), and uses [Auth.js (formerly Next Auth)](https://authjs.dev/) for user authentication. The data is stored in a Postgres database, which is created and accessed with raw SQL queries using the `pg` package.

The project is a work in progress and is not yet complete.

## Features

- [x] View a list of posts
- [x] View a single post
- [x] Create a post
- [x] Upvote and downvote posts
- [x] Pagination of posts
- [x] Comment on posts
- [x] Nested comments (recursive lists)
- [x] User authentication

## Setup instructions

1. Fork the repository (check "copy the main branch only") and clone your fork to your local machine
2. Run `npm install`
3. Create a `.env.local` file in the root directory and add the following environment variables:
   - `DATABASE_URL` - the URL of your Postgres database (eg. the Supabase connection string)
   - `AUTH_SECRET` - the Next Auth secret string (this can be anything at all like a password, but keep it secret!)
   - `AUTH_GITHUB_ID` - the GitHub OAuth client ID (create yours in [Github developer settings](https://github.com/settings/developers)
   - `AUTH_GITHUB_SECRET` - the GitHub OAuth client secret (create this in [Github developer settings](https://github.com/settings/developers))
4. Create the database schema by running the SQL commands in `schema.sql` in your database (eg. by running the commands in Supabase Query Editor)
5. Run `npm run dev` to start the development server
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the site

## Potential future features

- [x] User profiles
- [x] Sorting posts by recent (date posted), top (most upvotes), and most controversial (most upvotes _and_ downvotes)
- [ ] User karma scores
- [ ] User badges / trophies (awards for achievements like number of posts, years on the site, etc.)
- [ ] User settings (eg. number of posts per page, theme, etc.)
- [ ] Moderation tools / reporting or flagging objectionable comments for removable by admins
- [ ] Searching posts (possibly using simple SQL LIKE '%some search%', or [Postgres text search](https://www.crunchydata.com/blog/postgres-full-text-search-a-search-engine-in-a-database))
- [ ] Subreddits (separate communities, that isn't just one big list of posts, that can be created by users)
- [ ] User notifications
- [ ] User private messaging
- [ ] User blocking
- [ ] User following
- [ ] User feed (posts from users you follow)
- [ ] User flair
