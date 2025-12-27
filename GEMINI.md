## Project Overview

This is the source code for Cali's personal blog website, [cali.so](https://cali.so/). It is a full-stack application built with Next.js and a variety of other technologies. The front-end is built with React, TypeScript, and Tailwind CSS, while the back-end uses Neon for the database, Drizzle ORM for database access, and Sanity as a headless CMS. The website also uses Clerk for user authentication, React Email and Resend for sending emails, and is deployed on Vercel.

## Building and Running

To run this project locally, you will need to have pnpm installed. You will also need to create a `.env` file and populate it with the necessary environment variables. You can refer to the `.env.example` file for a list of all the required variables.

**Installation:**

```bash
pnpm install
```

**Running the development server:**

```bash
pnpm dev
```

**Building the project:**

```bash
pnpm build
```

**Other scripts:**

*   `pnpm db:generate`: Generate database migrations.
*   `pnpm db:push`: Push database changes.
*   `pnpm dev:email`: Start the email development server.
*   `pnpm dev:turbo`: Start the development server with Turbopack.
*   `pnpm lint`: Lint the code.
*   `pnpm start`: Start the production server.

## Development Conventions

*   **Code style:** The project uses Prettier for code formatting and ESLint for linting. There are configuration files for both in the root of the project.
*   **Testing:** There are no explicit testing practices outlined in the project.
*   **Contributing:** There are no explicit contribution guidelines outlined in the project.
