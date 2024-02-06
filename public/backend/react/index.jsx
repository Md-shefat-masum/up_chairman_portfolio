import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    RouterProvider,
    createHashRouter,
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store/index.js';
import dashboard_routes from './routes/dashboard_routes.js';

axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    if(response.status == 201){
        window.toaster(response.data?.message || 'success')
    }
    return response;
}, function (error) {
    window.toaster("error", "error")
    return Promise.reject(error);
});

function Component() {
    const router = createHashRouter([
        dashboard_routes,
    ]);
    return <RouterProvider router={router}></RouterProvider>
}

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <Component />
    </Provider>
);