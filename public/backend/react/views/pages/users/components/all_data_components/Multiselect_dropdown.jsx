import React, { useEffect, useState } from "react";

const MultiselectDropdown = (props) => {

    // console.log(props)
    const ukey = Math.random();
    const [data, setData] = useState([]);
    const [selectedData, setSelectedData] = useState([]);
    const [taskOpen, setTaskOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // useEffect(() => {
    //     setTaskOpen(props.taskOpen)
    //     console.log(taskOpen);
    // }, [props.tasklist]);

    useEffect(() => {
        setData([...props.data]);
        console.log(data);
        
    }, [props.data]);
    
    useEffect(() => {
        if(props.selectedData?.length){
            setSelectedData([...props.selectedData]);
        }
    }, []);

    useEffect(() => {
        props.setSelectedData(selectedData)
        console.log(selectedData);
    }, [selectedData]);

    console.log(selectedData);
    console.log(data);
    function addItem(item) {
        console.log(item);
        let newData = selectedData?.find((i) => i.serial == item.serial);

        if (newData) {
            // console.log(selectedData);
            // console.log(item.id);
            let uniqueData = selectedData.filter((i) => i._id != item._id);
            setSelectedData([...uniqueData]);
            // setSelectedData(selectedData.splice(item.id, 0));
        } else {
            let searchData = data.find((i) => i._id == item._id);
            setSelectedData([...selectedData, searchData]);
            // console.log(searchData);
            // console.log(selectedData, setSelectedData([searchData]))
        }
    }

    function removeData(item) {
        let newTotal = selectedData.filter((i) => i._id !== item._id);
        setSelectedData([...newTotal]);
    }

    function handleSearch(event) {
        const value = event.target.value;
        // console.log(value);
        let filteredData = data.filter((i) => i.title.includes(value));
        // console.log(data);
        setData([...filteredData]);
    }

    return (
        <div className="multiselect_dropdown">
            <div className="close_icon">
                {/* <span
                    onClick={() =>
                        document
                            .getElementById("multi_dropdown")
                            .classList.toggle("multiselect_dropdown_hide")
                    }
                    className=" material-symbols-outlined"
                >
                    close
                </span> */}
            </div>
            <div onClick={() => setTaskOpen(true)} className="data_table">
                {/* <select className="d-none" name={props.data.title} value={selectedData.map(i => i._id)} multiple onChange={() => ''}>
                    {data.map((i) => {
                        return (
                            <option key={i._id} value={i._id}>
                                {i.title}
                                
                            </option>
                        );
                    })}
                    
                </select> */}
                <p>open</p>
                <ul className="">
                    {selectedData.length
                        ? selectedData.map((i, index) => {
                            return (
                                <div>
                                    <li key={index}>
                                        {i.serial}
                                        <span
                                            onClick={() => removeData(i)}
                                            className="material-symbols-outlined"
                                        >
                                            close
                                        </span>
                                    </li>
                                    {/* <input type="text" name="role" value={i.title} id="" /> */}
                                </div>
                            );
                        })
                        : ""}
                </ul>
            </div>
            {taskOpen && (
                <div className="multiselect_search_and_list">
                    <div id="multi_dropdown" className="multi_dropdown_all">
                        <div className="close_icon">
                            <span
                                onClick={() => setTaskOpen(false)}
                                className=" material-symbols-outlined"
                            >
                                close
                            </span>
                        </div>
                        <div className="multiselect_search">
                            <input
                                onKeyUp={handleSearch}
                                className="form-control"
                                type="search"
                                name=""
                                id=""
                            />
                        </div>
                        <div className="multiselect_list">
                            <ul>
                                {data.map((i) => {
                                    return (
                                        <li key={i._id}>
                                            <label
                                                htmlFor={"checbox" + i._id + ukey}
                                                className="d-flex gap-2"
                                            >
                                                <input
                                                    type="checkbox"
                                                    onChange={() => addItem(i)}
                                                    checked={
                                                        selectedData.find((el) => el._id === i._id)
                                                            ? true
                                                            : false
                                                    }
                                                    id={"checbox" + i._id + ukey}
                                                />
                                                <div className="">{i.name}</div>
                                            </label>
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* <button cdata = {selectedData}>tandf</button> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MultiselectDropdown;