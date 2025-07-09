export default function Home() {
    const handleLogin = () => {
        window.location.href = 'http://localhost:8000/api/auth/strava';
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">
            <h1 className="text-4xl font-bold text-blue-600">Strava Analytics</h1>
            <button
                onClick={handleLogin}
                className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
                Login with Strava
            </button>
        </div>
    );
}
