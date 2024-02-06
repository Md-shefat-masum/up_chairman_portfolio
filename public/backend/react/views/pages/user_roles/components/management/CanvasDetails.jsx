import React from 'react'
import { useSelector } from 'react-redux';
import setup from '../../config/setup';

function CanvasDetails() {
    const data_store = useSelector((state) => state[setup.prefix]);
    const { set_data } = setup.actions;
    const data = data_store[setup.prefix]

    return (
        <div class={`canvas_backdrop ${data_store[setup.prefix] && 'active'}`} onClick={(event) => event.target.classList.contains('canvas_backdrop') && set_data(false)}>
            <div class="content right">
                <div class="content_header">
                    <h3 class="offcanvas-title">{setup.prefix} Details</h3>
                    <i class="fa fa-times"></i>
                </div>
                <div class="cotent_body">
                    {
                        data &&
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>Id</td>
                                    <td>:</td>
                                    <td>{data.id}</td>
                                </tr>
                                <tr>
                                    <td>first name</td>
                                    <td>:</td>
                                    <td>{data.first_name}</td>
                                </tr>
                                <tr>
                                    <td>last name</td>
                                    <td>:</td>
                                    <td>{data.last_name}</td>
                                </tr>
                                <tr>
                                    <td>email</td>
                                    <td>:</td>
                                    <td>{data.email}</td>
                                </tr>
                                <tr>
                                    <td>mobile number</td>
                                    <td>:</td>
                                    <td>{data.mobile_number}</td>
                                </tr>
                                <tr>
                                    <td>created at</td>
                                    <td>:</td>
                                    <td>{new Date(data.created_at).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>photo</td>
                                    <td>:</td>
                                    <td><img src={data.photo_url} style={{ height: "120px" }} alt="user profile" /></td>
                                </tr>
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </div>
    )
}

export default CanvasDetails