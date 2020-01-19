import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import { updatePage } from "../actions";


const Button = styled.button`

`;

const Pagination = React.memo(() => {
    const iPage = useSelector(state => state.page.iPage);
    const dispatch = useDispatch();
    const goToSelectPage = useCallback((num) => () => {
        if (num >= 0) {
            dispatch(updatePage(num));
        }
    }, [dispatch]);

    let list = [];
    if (iPage === 0) {
        list = [0, 1, 2];
    } else {
        list = [iPage - 1, iPage, iPage + 1];
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                <li className="page-item">
                    <Button className="page-link" aria-label="Previous" onClick={goToSelectPage(iPage - 1)}>
                        <span aria-hidden="true">&laquo;</span>
                    </Button>
                </li>
                {list.map(num => (
                    <li key={num} className="page-item"><Button className="page-link" onClick={goToSelectPage(num)}>{num}</Button></li>
                ))}
                <li className="page-item">
                    <Button className="page-link" aria-label="Next" onClick={goToSelectPage(iPage + 1)}>
                        <span aria-hidden="true">&raquo;</span>
                    </Button>
                </li>
            </ul>
        </nav>
    )
});

export default Pagination;