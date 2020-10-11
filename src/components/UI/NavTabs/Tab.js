import React from 'react';
import classNames from 'classnames';

const Tab = props => {

    const { label, onClick, activeTab, isPill, isPrimary } = props;
    let classname = '';
    if (activeTab === props.id) {
        classname += 'active';
    }

    let btnClass = classNames({
        btn: true,
        'btn-labeled': true,
        'btn-primary': isPrimary,
        'btn-default': !isPrimary,
    });

    let BtnType = '';

    if (isPill) {
        BtnType = (
            <button style={{
                margin: "5px",
                borderRadius: "15px",
                padding: "5px 7px 5px 7px",
            }} className={btnClass} data-toggle="tab">
                {label}
            </button>
        );
    } else {
        BtnType = (
            <a href='#' data-toggle="tab">{label}</a>
        )
    }

    return (

        <li
            onClick={() => onClick(props.id)}
            className={classname}>
            {BtnType}
        </li>
    )
}

export default Tab;