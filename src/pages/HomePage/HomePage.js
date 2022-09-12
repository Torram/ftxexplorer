/*
Component: src/pages/HomePage/HomePage.js
*/

import React from 'react';
import './HomePage.scss';
import {RouteComponentProps} from 'react-router-dom';

const HomePage = (props) => {
    return (
        <div className = "HomePage">
            {props.name} Component
        </div>
    )
}
export default HomePage; 