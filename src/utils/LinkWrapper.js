import React from "react";

import { NavLink } from 'react-router-dom';

export const LinkWrapper = React.forwardRef((props, ref) => (
    <NavLink activeStyle={{fontWeight:"bold"}} {...props}/>
))
