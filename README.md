# TaskFlow API

A small task-management backend built with Express. It exposes REST endpoints for
users, authentication, tasks, projects, and notifications, backed by simple
in-memory stores so it runs with no database setup.

## Run

```bash
npm install
cp .env.example .env
npm start
```

The server starts on `http://localhost:3000`.

## Endpoints

| Method | Path                     | Description              |
| ------ | ------------------------ | ------------------------ |
| POST   | `/api/auth/register`     | Create an account        |
| POST   | `/api/auth/login`        | Log in, returns a token  |
| GET    | `/api/tasks`             | List tasks               |
| GET    | `/api/tasks/:id`         | Get one task             |
| POST   | `/api/tasks`             | Create a task            |
| PUT    | `/api/tasks/:id`         | Update a task            |
| DELETE | `/api/tasks/:id`         | Delete a task            |
| GET    | `/api/projects`          | List projects            |
| POST   | `/api/projects`          | Create a project         |
| GET    | `/api/notifications`     | List notifications       |
| POST   | `/api/notifications`     | Create a notification    |

## Notes

Data is stored in memory and resets on restart. Authentication uses a JWT signed
with `JWT_SECRET`. Intended as a compact, readable service to build on.
