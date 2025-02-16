# 🚀 Bioverse Backend (NestJS)

This is the **backend** for the **Bioverse application**, built with **NestJS** and **PostgreSQL**.  
It provides APIs for **user authentication, questionnaire management, and an admin dashboard**.

---

## 📌 Features
✅ **User Authentication** → Secure login with authentication.
✅ **Questionnaire Management** → Fetch available questionnaires. 
✅ **User Responses** → Store and retrieve user responses.  
✅ **Auto-fill Previous Responses** → Users see their previous answers when returning to a questionnaire.  
✅ **Admin Dashboard** → List users and view their responses.  
✅ **Protected Routes** → Only admins can access certain data.  
✅ **Production Deployment** → Hosted on **Render**, database on **Supabase**.  

---

## 🛠️ Tech Stack
- **NestJS (TypeScript)**
- **PostgreSQL (TypeORM)**
- **Docker** (for local development)
- **Render** (backend deployment, managed PostgreSQL)
- **Versel** (fronted deployment)

---


## 📌 API Endpoints

### 🔹 Authentication (`/auth`)
| Method | Endpoint       | Description |
|--------|--------------|------------|
| `POST` | `/auth/login` | User login |

### 🔹 Questionnaires (`/questionnaires`)
| Method | Endpoint              | Description |
|--------|----------------------|------------|
| `GET`  | `/questionnaires`     | List all questionnaires |
| `GET`  | `/questionnaires/:id` | Get a specific questionnaire |

### 🔹 User Responses (`/responses`)
| Method | Endpoint                      | Description |
|--------|--------------------------------|------------|
| `GET`  | `/responses/:username/:id`    | Get user responses for a questionnaire |
| `POST` | `/responses`                   | Submit responses |

### 🔹 Admin Dashboard (`/admin`)
| Method | Endpoint               | Description |
|--------|----------------------|------------|
| `GET`  | `/admin/users`       | Get all users with completed questionnaires |
| `GET`  | `/admin/users/:username` | Get responses from a specific user |

📌 **Full API documentation is available at `/api/docs` (if Swagger is enabled).**  

---

## ⚡ Getting Started

### 1 - Prerequisites
Ensure you have:
- **Node.js (v18+)**
- **Yarn or npm**
- **Docker (optional, for local PostgreSQL)**

### 2 - Clone the Repository
```sh
git clone https://github.com/sstecnologiainformacao/bioverse-backend.git
cd bioverse-backend
```

### 3 - Clone the Repository
```sh
yarn install
```

### 4 - Configure Environment Variables
Create a .env file in the root directory and add the following:
```
PORT=3001
DATABASE_HOST=dpg-cuouv5l2ng1s73ed7ptg-a
DATABASE_PORT=5432
DATABASE_USER=bioverse_pixs_user
DATABASE_PASSWORD=neVye9YpEYUunE7wtFemR5cFQpQuipvb
DATABASE_NAME=bioverse_pixs
```

### 5 -  Run Locally

```
yarn run start
```
