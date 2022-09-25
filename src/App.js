import './App.css';
import LoginPage from './Components/LoginPage';
import {
    Routes,
    Route,
} from 'react-router-dom';
import AuthProvider from './ContextProviders/AuthContext';
// import Input from './Components/Common/Input';
import RequireAuth from './Routes/RequireAuth';
import Login from './Components/Login';
import NotFound from './Components/Common/NotFound';
import UserCard from './Components/Common/UserCard/UserCard';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Routes>
                    <Route element={<LoginPage />}>
                        <Route path="/" element={<Login />} />
                        <Route element={<RequireAuth />}>
                            <Route path="/dashboard" element={<UserCard />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;

