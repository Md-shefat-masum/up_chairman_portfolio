import React from 'react'
import Layout from "../Layout.jsx";
import setup from './setup.js';

import All from "../All.jsx";
import Create from "../Create.jsx";
import Details from "../Details.jsx";
import Edit from '../Edit.jsx';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: setup.route_prefix,
    element: <Layout />,
    children: [
        {
            path: '',
            element: <All />,
        },
        {
            path: 'create',
            element: <Create />,
        },
        {
            path: 'edit/:id',
            element: <Edit/>,
        },
        {
            path: 'details/:id',
            element: <Details />,
        },
    ]
};