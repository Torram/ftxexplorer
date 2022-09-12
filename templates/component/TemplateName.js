/*
Component: src/component/TemplateName/TemplateName.js
*/

import React from 'react';
import './TemplateName.scss';
import {RouteComponentProps} from 'react-router-dom';

const TemplateName = (props) => {
    return (
        <div className = "TemplateName">
            {props.name} Component
        </div>
    )
}
export default TemplateName; 