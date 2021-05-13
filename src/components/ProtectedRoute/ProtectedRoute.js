import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={
            props => {
                if (localStorage.getItem('isAdmin') === 'true') {
                    return <Component {...rest} {...props} />
                } else {
                    return <Redirect to={
                        {
                            pathname: '/home',
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }
        } />
    )
}
export default ProtectedRoute;