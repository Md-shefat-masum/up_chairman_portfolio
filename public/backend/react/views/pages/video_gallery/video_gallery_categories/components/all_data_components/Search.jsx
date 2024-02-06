import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import setup from '../../config/setup';

function Search() {
    const data_store = useSelector((state) => state[setup.prefix]);
    setup.dispatch = useDispatch();
    const { set_search_parameter, get_data } = setup.actions;
    // useEffect(() => {
    //     get_data();
    // }, [
    //     data_store.search_key
    // ]);
    return (
        <>
            <div className="search">
                {/* sdkjfhdksjhfkdjs */}
                <input
                    type="text"
                    className="form-control border"
                    placeholder="Search..."
                    onChange={() => set_search_parameter(event.target.value)}
                ></input>
            </div>
        </>
    )
}

export default Search