# 🏃‍♀️ Runlytics

**Runlytics** is a Strava-powered analytics dashboard that allows you to log in with your Strava account and view your recent training activities.

Built with:
- ⚛️ **React 19** (frontend)
- 🖥️ **Express.js** (backend)
- 🎨 **Tailwind CSS**
- ⚡ **Vite**
- 🔐 **Strava OAuth 2.0**

---

## 📦 From Git Clone to Running Locally

### 1. 📥 Clone the Repository

```bash
git clone https://github.com/priyankaanehra/runlytics.git
cd runlytics
```

---

### 2. 🔧 Setup Environment Variables

Create a `.env` file in the `/server` directory:

```bash
cd server
touch .env
```

Paste the following into `.env`:

```
STRAVA_CLIENT_ID=your_strava_client_id
STRAVA_CLIENT_SECRET=your_strava_client_secret
STRAVA_REDIRECT_URI=http://localhost:8000/api/auth/strava/callback
PORT=8000
```

> 📝 You can get your Strava API credentials from [https://www.strava.com/settings/api](https://www.strava.com/settings/api)

---

### 3. 📡 Run the Backend

Install dependencies and start the Express server:

```bash
cd server
npm install
node index.js
```

You should see:

```
Backend running on port 8000
```

---

### 4. 💻 Run the Frontend

Open a new terminal tab or window:

```bash
cd client
npm install
npm run dev
```

> The frontend should now be available at: [http://localhost:5173](http://localhost:5173)

---

## ✅ How to Use

1. Visit [http://localhost:5173](http://localhost:5173)
2. Click the **Login with Strava** button
3. Authenticate with your Strava account
4. You'll be redirected to `/auth-success?access_token=...`
5. View your recent activities

---

## 🧠 Project Structure

```
runlytics/
├── client/            
│   ├── src/
│   │   ├── App.jsx
│   │   └── AuthSuccess.jsx
│   └── index.html
├── server/             
│   ├── index.js
│   └── .env
└── README.md
```

---

## 📌 Notes

- Strava access tokens are saved in `localStorage` for demo purposes only.
- The frontend expects to be served from `localhost:5173` and backend from `localhost:8000`.
- Ensure both ports are not blocked or in use.
- If you see `Cannot GET /auth-success`, ensure you’ve configured React Router properly.

---

## 🚧 Coming Soon

- 📈 Dashboard with charts (pace, distance, elevation)
- 🔁 Refresh token support
- 🗂 Activity filtering + sorting
- 🌍 Deployment

---