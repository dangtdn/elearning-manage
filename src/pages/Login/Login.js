import React, {useEffect, Fragment} from 'react'
import LoginContent from '../../Components/layouts/LoginContent/LoginContent';
import { ToastProvider } from 'react-toast-notifications';
import { history } from '../../App';
import { Redirect, useHistory } from 'react-router-dom';
import Auth from '../../Components/layouts/admin/Auth/Auth';

function Login() {

    const history = useHistory();

    if(Auth.isAuth()) {
        history.push("/admin")
    }

    const renderLogin = () => {
        return(
            <Fragment>
                <ToastProvider
                    autoDismiss
                    autoDismissTimeout={2000}
                    placement="bottom-right"
                >
                <div>
                    <LoginContent/>
                </div>
                </ToastProvider>              
            </Fragment>
        )
    }

    return (
        
        renderLogin()

    )
}

export default  Login;