import React from 'react';
import { createPortal } from 'react-dom';
import '../../resources/scss/modal/base-modal.scss';



export default function BaseModal({ children, title, onClose, showSpinner, show }) {
  return show ? createPortal(
    <div className="modal-container">
    
      <div className="modal-wrapper">
        {/* <Spinner show={showSpinner} /> */}
        <div className="modal-wrapper-child-container">
          <div className="modal-wrapper-child">
            <div className={`modal-header-container `}>
              <div className="modal-header">
                <div className="modal-title">
                  {title}
                </div>
        
              </div>
              <div onClick={onClose} className="close-button">
                X
              </div>
            </div>
            <hr />
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  ) : null;
}

