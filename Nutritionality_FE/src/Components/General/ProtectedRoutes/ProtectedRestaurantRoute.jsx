import { HOME } from '../../../Utils/Constants/constants';
import { useAuth } from '../../../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

function ProtectedRestaurantRoute({ children }) {
    const { activeUser } = useAuth();
    return !activeUser.isAdmin ? <Navigate to={HOME} replace /> : <>{children}</>;
}

export default ProtectedRestaurantRoute;