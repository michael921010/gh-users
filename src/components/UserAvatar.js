import React from "react";
import styled from 'styled-components';
import _ from "lodash";

const AvatarImg = styled.img`
    width: ${props => props.size || 70}px;
    height: ${props => props.size || 70}px;
    padding: 5px;
    border-radius: 8px;
`;

const Avatar = (props) => {
    if (_.isString(props.src) && props.src.length > 0) {
        return <AvatarImg {...props}/>;
    } else {
        return null;
    }
};

export default Avatar;