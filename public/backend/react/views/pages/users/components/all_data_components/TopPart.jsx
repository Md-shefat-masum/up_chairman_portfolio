import React from 'react'
import TableHeading from "./TableHeading";
import Search from "./Search";
import ActionButtons from "./ActionButtons";

function TopPart() {
    return (
        <>
            <TableHeading></TableHeading>
            <Search></Search>
            <ActionButtons></ActionButtons>
        </>
    )
}

export default TopPart