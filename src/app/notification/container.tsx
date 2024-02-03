import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NotificationContainer() {
    return <ToastContainer
    position="bottom-right"
    newestOnTop={false}
    closeOnClick
    pauseOnHover
    />
}

export default NotificationContainer;