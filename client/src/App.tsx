import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthSuccess from './AuthSuccess';
import Home from './Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth-success" element={<AuthSuccess />} />
            </Routes>
        </Router>
    );
}

export default App;
