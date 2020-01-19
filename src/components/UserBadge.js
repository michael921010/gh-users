import React from "react";

const UserBadge = ({ className }) => (
    <span className={`badge badge-pill badge-secondary ${className}`} >User</span>
);

export default UserBadge;