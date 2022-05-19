import { HOME } from '../../../Utils/Constants/constants';
import { useAuth } from '../../../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

function ProtectedAuthRoute({ children }) {
    const { activeUser } = useAuth();
    return !activeUser.userId ? <Navigate to={HOME} replace /> : <>{children}</>;
}

export default ProtectedAuthRoute;
