import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function AuthSuccess() {
    const [searchParams] = useSearchParams();
    const [activities, setActivities] = useState([]);
    const [error, setError] = useState(null);

    const accessToken = searchParams.get('access_token');

    useEffect(() => {
        if (!accessToken) {
            setError('No access token found in URL');
            return;
        }

        localStorage.setItem('strava_access_token', accessToken);
        fetch('https://www.strava.com/api/v3/athlete/activities', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch activities');
                return res.json();
            })
            .then((data) => setActivities(data))
            .catch((err) => setError(err.message));
    }, [accessToken]);

    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Your Recent Activities</h2>
            {activities.length === 0 && <p>Loading activities...</p>}
            <ul>
                {activities.map((activity) => (
                    <li key={activity.id} className="mb-2 border-b pb-2">
                        <strong>{activity.name}</strong> - {activity.distance / 1000} km - {new Date(activity.start_date).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}
