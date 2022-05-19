import { HOME, PROFILE, DASHBOARD } from "../Utils/Constants/constants";
import { Routes, Route } from "react-router-dom";
import ActiveUserProvider from '../Components/Providers/AuthProvider/AuthProvider';
import NavBarContents from "../Components/Nutritionality/NavBarContents/NavBarContents";
import ProtectedAuthRoute from '../Components/General/ProtectedRoutes/ProtectedAuthRoute';
import ProtectedRestaurantRoute from '../Components/General/ProtectedRoutes/ProtectedRestaurantRoute';
import Col from '../Components/General/Flexboxes/Column/Col';
import Row from "../Components/General/Flexboxes/Row/Row";
import HomePage from "../Pages/Home/HomePage";
import ProfilePage from '../Pages/Profile/ProfilePage';
import DashboardPage from '../Pages/Dashboard/DashboardPage';
import './App.css';

function App() {
    return (
        <ActiveUserProvider>
            <Col styles='app-all-content'>
                <NavBarContents />
                <Col styles='app-main-content'>
                    <Routes>
                        <Route
                            path={HOME}
                            element={<HomePage />}
                        />
                        <Route
                            path={PROFILE}
                            element={
                                <ProtectedAuthRoute>
                                    <ProfilePage />
                                </ProtectedAuthRoute>}
                        />
                        <Route
                            path={DASHBOARD}
                            element={
                                <ProtectedAuthRoute>
                                    <ProtectedRestaurantRoute>
                                        <DashboardPage />
                                    </ProtectedRestaurantRoute>
                                </ProtectedAuthRoute>}
                        />
                    </Routes>
                </Col>
            </Col>
        </ActiveUserProvider>
    );
}

export default App;