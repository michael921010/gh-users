import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { getAllUsers } from "../actions";
import User from "../components/User";
// import Pagination from "../components/Pagination";

const HomeFrame = styled.div`

`;


const Home = () => {
    const allUsers = useSelector(state => state.users.all);
    const iPage = useSelector(state => state.page.iPage);
    const pageSize = useSelector(state => state.page.pageSize);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers(iPage, pageSize));
    }, [dispatch, iPage, pageSize]);

    return (
        <HomeFrame className="container">
            {/* <Pagination /> */}
            {allUsers.map((user, i) => (
                <User key={user.node_id} {...user} idx={i} />
            ))}
        </HomeFrame>
    )
};

export default Home;