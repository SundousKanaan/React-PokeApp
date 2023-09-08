/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import classnames from "classnames";
import { Link, useLocation } from 'react-router-dom';
import $ from "./SidebarButtons.module.scss";


interface Props {
    name: string;
    icon: string;
    locationPath: string; 
    isActive: boolean
}

const sidebarButton = ({ name, icon, locationPath,isActive }: Props) => {
    const iconSrc = `/icons/${icon}.svg`;

    useEffect(() => {
        console.log("lol", locationPath);
    }, []);


    return (
        <Link to={locationPath} className={$.link}>
            <button
                className={classnames($.inactiveButton, {
                    [$.activeButton]: isActive,
                }
                )} >
                <img src={iconSrc} alt={`${icon} svg icon`} />
                <p>{name}</p>
            </button>
        </Link>
    );
};

export default sidebarButton;
