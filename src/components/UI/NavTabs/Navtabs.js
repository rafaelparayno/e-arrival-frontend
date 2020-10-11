import React from 'react';
import Tab from './Tab';


const Navtabs = props => {

    return (
        <div className="tab-pane">
            <ul className="nav nav-tabs bordered">
                {props.children.map((child, index) => {
                    const { label, isPrimary } = child.props;
                    return (
                        <Tab
                            activeTab={props.activeTab}
                            key={index}
                            id={index}
                            label={label}
                            isPrimary={isPrimary}
                            isPill={props.isPill}
                            onClick={props.onClickTabItem}
                        />
                    )
                })}
            </ul>
            <div style={{ marginTop: '10px' }} className="tab-content">
                {props.children.map((child, index) => {

                    if (index !== props.activeTab) return undefined;

                    return (
                        child.props.children
                    )
                })}
            </div>
        </div>
    )
}

export default Navtabs;