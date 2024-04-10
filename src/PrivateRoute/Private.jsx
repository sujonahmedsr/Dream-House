import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Private = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

Private.propTypes = {
    children: PropTypes.node,
}

export default Private;