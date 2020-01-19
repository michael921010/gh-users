import React, { useCallback, useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import UserAvatar from "./UserAvatar";
import ABadge from "./AdminBadge";
import UBadge from "./UserBadge";
import * as Api from "../api";

const Card = styled.div`

`;
const CardContent = styled.div`

`;
const UserHeader = styled.div`

`;
const UserTitle = styled.h5`
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;
const UserBlog = styled.p`
    cursor: pointer;
`;

const UserBio = styled.span`

`;
const UserLocation = styled.span`

`;

const UserFrame = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
    cursor: pointer;
`;

const UserId = styled.h5`
    color: ${props => props.theme.colors.blue};
    max-width: 150px;
    overflow-x: hidden;
    padding-left: 8px;

    &:hover {
        text-decoration: underline;
    }
`;

const AdminBadge = styled(ABadge)`
    margin-top: -5px;
    margin-left: 6px;
`;

const UserBadge = styled(UBadge)`
    margin-top: -5px;
    margin-left: 6px;
`;

const User = ({ node_id, avatar_url, site_admin, type, login, idx }) => {
    const history = useHistory();
    const [user, setUser] = useState(null);
    const goToGitHub = useCallback(() => {
        if (user && user.html_url) {
            window.open(user.html_url);
        }
    }, [user]);
    const openBlog = useCallback(() => {
        if (user && user.blog) {
            window.open(user.blog);
        }
    }, [user]);

    useEffect(() => {
        setTimeout(() => {
            Api.fetchUser(login)
                .then(res => {
                    setUser(res);
                });
        }, idx * 3);
    }, [login]);

    if (user) {
        return (
            <Card className="card card-signin my-5">
                <CardContent className="d-flex flex-column">
                    <UserHeader className="d-flex flex-row align-items-center">
                        <UserAvatar src={user.avatar_url} size={50} />
                        <UserTitle className="text-uppercase mt-2" onClick={goToGitHub}>{user.login}</UserTitle>
                        {user.site_admin ? <AdminBadge className="ml-2" /> : <UserBadge className="ml-2" />}
                        {user.blog && <UserBlog onClick={openBlog} className="text-primary ml-2 mt-3">Blog</UserBlog>}
                    </UserHeader>
                    <UserBio className="mt-3 mb-3 ml-3">
                        <strong>Bio: </strong>{user.bio || "None"}
                    </UserBio>
                    <UserLocation className="mt-3 mb-3 ml-3">
                        <strong>Location: </strong>{user.location || "None"}
                    </UserLocation>
                </CardContent>
            </Card>
        )
    } else {
        return null;
    }
};

export default User;