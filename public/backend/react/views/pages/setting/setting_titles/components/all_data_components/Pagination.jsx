import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import setup from '../../config/setup';

function createPagination(paginationAmount = 10, dataCount = 0, currentPage = 1, set_page) {
    const pageCount = Math.ceil(dataCount / paginationAmount); // Calculate the total number of pages
    const maxDisplayedPages = 5; // Maximum number of displayed page links
    let paginationHTML = [];

    // Calculate the starting and ending page numbers for the displayed links
    let startPage = 1;
    let endPage = pageCount;

    if (pageCount > maxDisplayedPages) {
        const middlePage = Math.ceil(maxDisplayedPages / 2);
        if (currentPage <= middlePage) {
            endPage = maxDisplayedPages;
        } else if (currentPage >= pageCount - middlePage + 1) {
            startPage = pageCount - maxDisplayedPages + 1;
        } else {
            startPage = currentPage - middlePage + 1;
            endPage = currentPage + middlePage - 1;
        }
    }

    // Generate the HTML for the pagination
    paginationHTML.push(
        <li class="page-item pagination-page-nav">
            <a class="page-link" onClick={() => { event.preventDefault(); currentPage - 1 > 0 && set_page(currentPage - 1) }} href="/dashboard/blog?page=${currentPage - 1}" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
    );

    if (startPage > 1) {
        paginationHTML.push(
            <li class={"page-item pagination-page-nav " + (startPage === currentPage && 'active')}>
                <a class="page-link" onClick={() => { event.preventDefault(); set_page(1) }} href="/dashboard/blog?page=1">1</a>
            </li>
        );
        if (startPage > 2) {
            paginationHTML.push(<li class="page-item">... </li>);
        }
    }

    // document.getElementById("start_limit").innerHTML = (currentPage * paginationAmount) - paginationAmount + 1;
    // document.getElementById("end_limit").innerHTML = (currentPage * paginationAmount);

    for (let i = startPage; i <= endPage; i++) {
        paginationHTML.push(
            <li class={"page-item pagination-page-nav " + (i === currentPage && 'active')}>
                <a class="page-link " onClick={() => { event.preventDefault(); set_page(i) }} href="/dashboard/blog?page=${i}">{i}</a>
            </li>
        );
    }

    if (endPage < pageCount) {
        if (endPage < pageCount - 1) {
            paginationHTML.push(<li class="page-item pagination-page-nav">... </li>);
        }
        paginationHTML.push(
            <li class={"page-item pagination-page-nav " + (pageCount === currentPage && 'active')}>
                <a class="page-link" onClick={() => { event.preventDefault(); }} href="/dashboard/blog?page=${pageCount}">{pageCount}</a>
            </li>
        );
    }

    paginationHTML.push(
        <li class="page-item pagination-page-nav">
            <a class="page-link" onClick={() => { event.preventDefault(); pageCount >= currentPage + 1 && set_page(currentPage + 1) }} href="/dashboard/blog?page=${currentPage + 1}" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
    );

    return paginationHTML;
}

function Pagination() {
    const data_store = useSelector((state) => state[setup.prefix]);
    const [paginate, setPaginate] = useState([])
    const { set_page, get_data } = setup.actions;

    useEffect(() => {
        setPaginate(createPagination(data_store.paginate, data_store.all_data_count, data_store.page, set_page));
        return () => {
            setPaginate([]);
        }
    }, [data_store.page, data_store.all_data_count])

    return (
        <>
            <div className="d-inline-block">
                <ul className="pagination pagination-sm">
                    {paginate}
                   
                </ul>
            </div>
            <div className="show-limit d-inline-block">
                <span>Limit:</span>
                <select>
                    <option value="10">
                        10
                    </option>
                    <option value="5">
                        5
                    </option>
                    <option value="25">
                        25
                    </option>
                    <option value="50">
                        50
                    </option>
                    <option value="100">
                        100
                    </option>
                </select>
            </div>
            <div className="show-limit d-inline-block">
                <span>Total:</span> <span>6</span>
            </div>
        </>
    )
}

export default Pagination