import React from 'react';
import './Dialog.css';

const Dialog = (props) => (
    <div style={{ zIndex: '5' }} className="k-dialog-wrapper">
        <div onClick={() => props.cancel && props.cancel()} className="k-overlay" />
        <div className="dialog-show k-widget k-window k-dialog dialog-position ">
            <div className="row example-wrapper">
                <div style={{
                    maxHeight: props.height ? props.height : '89vh', maxWidth: props.width ? props.width : '70vw', overflowY: 'auto',
                    minWidth: props.minWidth ? props.minWidth : '350px', minHeight: props.minHeight ? props.minHeight : '250px'
                }}
                    className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="k-form">
                            <h2 className="headertekst">{props.title}</h2>
                            <fieldset style={{ marginTop: '12px', padding: '0px' }}>
                                <div className="k-content k-window-content k-dialog-content">
                                    {props.children}
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Dialog;
