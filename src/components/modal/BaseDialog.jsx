import React from 'react';
import { createPortal } from 'react-dom';
import '../../resources/scss/component/modal/base-dialog.scss';
import Spinner from '../../component/progress/Spinner.jsx';
import PropTypes from 'prop-types';
import BaseButton from '../../component/button/BaseButton.jsx';
import WarningIcon from '@material-ui/icons/Warning';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import baseDialogI18n from '../../const/i18n/modal.const.js';
import { I18nNamespaces } from '../../const/i18n/i18n.const';
import { useTranslation } from 'react-i18next';
import KeyboardEventHandler from 'react-keyboard-event-handler';

export default function BaseDialog({ title, content, onClose, showSpinner, show, confirmButton, deleteButton, rejectButton, onClick }) {
  const { t } = useTranslation();
  return show ? createPortal(
    <div className="dialog-container">
      <KeyboardEventHandler
        handleKeys={['esc']}
        onKeyEvent={() => onClose()}
      />
      <div className="dialog-wrapper">
        <Spinner show={showSpinner} />
        <div className="dialog-wrapper-child">
          <div className={`dialog-header ${confirmButton ? `dialog-header-confirm`: `dialog-header-error`}`}>
            <div className="image">
              {confirmButton ? <MailOutlineIcon/> : <WarningIcon/>}
            </div>
            {title}
          </div>
          <div className="dialog-body">
            {content}
          </div>
          <div className="dialog-footer">
            <div className="btn-actions">
              <BaseButton className={`btn ${confirmButton ? `btn-confirm` : `btn-delete`}`} onClick={onClick}>
                {confirmButton ? confirmButton : deleteButton}
              </BaseButton>
              <BaseButton className="btn btn-cancel" onClick={onClose} >
                {rejectButton ? rejectButton :  t(
                  baseDialogI18n.baseDialog.cancelButton(I18nNamespaces.MODAL)
                )}
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  ) : null;

}


BaseDialog.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  showSpinner: PropTypes.bool,
  show: PropTypes.bool
}

BaseDialog.defaultProps = {
  showSpinner: false,
  onClose: () => { }
}
