import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const {
    STRAVA_CLIENT_ID,
    STRAVA_CLIENT_SECRET,
    STRAVA_REDIRECT_URI,
} = process.env;

app.get('/api/auth/strava', (req, res) => {
    const authUrl = `https://www.strava.com/oauth/authorize?client_id=${STRAVA_CLIENT_ID}&redirect_uri=${STRAVA_REDIRECT_URI}&response_type=code&scope=read,activity:read_all`;
    res.redirect(authUrl);
});
app.get('/api/auth/strava/callback', async (req, res) => {
    const code = req.query.code;
    if (!code) {
        return res.status(400).send('Authorization code not provided');
    }

    try {
        const tokenResponse = await axios.post('https://www.strava.com/oauth/token', null, {
            params: {
                client_id: STRAVA_CLIENT_ID,
                client_secret: STRAVA_CLIENT_SECRET,
                code,
                grant_type: 'authorization_code',
            },
        });

        const accessToken = tokenResponse.data.access_token;
        res.redirect(`http://localhost:5173/auth-success?access_token=${accessToken}`);
    } catch (error) {
        console.error('Error exchanging code for token:', error.response?.data || error.message);
        res.status(500).send('Failed to get access token');
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
