import React from 'react';
import RModal from 'react-modal';
RModal.setAppElement('#root');

const Modal = (props) => {
  const status =
    props.order.status === 'diterima'
      ? 'dibuat'
      : props.order.status === 'dibuat'
      ? 'diantarkan'
      : props.order.status;
  return (
    <RModal
      isOpen={props.isOpen}
      onRequestClose={props.onClose.bind(this)}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <div className="modal">
        <h3>
          Change order {props.order.room} status to {status}
        </h3>
        <div>
          <button type="button" className="no">
            No
          </button>
          <button
            disabled={props.order.status === 'diantarkan' ? true : false}
            type="submit"
            onClick={props.onSubmit.bind(this)}
            className="yes"
          >
            Yes
          </button>
        </div>
      </div>
    </RModal>
  );
};

export default Modal;
