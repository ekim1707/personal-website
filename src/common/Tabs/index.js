import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button';

export const Tabs = ({
    className,
    tabs,
    selectedIndex,
    onTabChange,
    iconClassName,
    isIcon,
    iconName,
    disabled,
    links
}) => {
    return <div className={className}>
        {tabs.map((tabName, i) => {
            return links ? <NavLink exact to={tabName === "HOME" ? "/" : `/${tabName.toLowerCase()}`} className="navLinks" key={i}>
                {tabName}
            </NavLink> : <Button
                className={i === selectedIndex ? "tabContainer selected" : "tabContainer"}
                onClick={() => onTabChange(i)}
                iconClassName={iconClassName}
                buttonText={tabName}
                isIcon={isIcon}
                iconName={iconName}
                disabled={disabled}
                key={i}
            />
        })}
    </div>
};