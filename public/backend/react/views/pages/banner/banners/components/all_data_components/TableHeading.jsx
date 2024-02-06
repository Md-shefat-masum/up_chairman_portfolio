import React from 'react'
import setup from '../../config/setup'

function TableHeading() {
    return (
        <>
            <h4 className="heading">
                {setup.all_page_title}
            </h4>
        </>
    )
}

export default TableHeading