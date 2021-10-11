import React, { useState, useContext, createContext } from 'react';
import ModalX from './modal';
import { Context } from '../../../store';

const Boxitem = ({ order, index, onSubmit }) => {
  const { state, dispatch } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toogleModal = () => setIsModalOpen((value) => !value);
  const date = new Date(order.createdAt);

  // const onSubmit = (event) => {
  //   const stateStatus =
  //     order.status === 'diterima'
  //       ? 'dibuat'
  //       : order.status === 'dibuat'
  //       ? 'diantarkan'
  //       : order.status;
  //   dispatch({
  //     type: 'ORDEREDIT',
  //     payload: { id: index, data: { ...order, status: stateStatus } },
  //   });
  //   console.table(state.dummy.orders);
  // };
  return (
    <div onClick={toogleModal.bind(this)} className="box-item-wrapper">
      <div className="left">
        <div
          style={{
            backgroundColor:
              order.status === 'diterima'
                ? 'red'
                : order.status === 'dibuat'
                ? 'brown'
                : order.status === 'diantarkan'
                ? 'green'
                : 'black',
          }}
          className="img"
        ></div>
        <h5>{order.items}</h5>
      </div>
      <div className="center">
        <div className="row">
          <h5 className="col-3">Room</h5>
          <h5 className="col-1">:</h5>
          <h5 className="col-8">{order.room}</h5>
        </div>
        <div className="row">
          <h5 className="col-3">Jumlah</h5>
          <h5 className="col-1">:</h5>
          <h5 className="col-8">{order.jumlah}</h5>
        </div>
        <div className="row">
          <h5 className="col-3">modifier</h5>
          <h5 className="col-1">:</h5>
          <h5 className="col-8">{order.modifier}</h5>
        </div>
        <div className="row">
          <h5 className="col-3">note</h5>
          <h5 className="col-1">:</h5>
          <h5 className="col-8">{order.notes}</h5>
        </div>
      </div>
      <div className="right">
        <div>
          <h5>Status :</h5>
          <h5>{order.status}</h5>
        </div>
        <div>
          <p>{`${date.getHours()}:${date.getMinutes()}`}</p>
        </div>
      </div>
      <ModalX
        order={order}
        isOpen={isModalOpen}
        onClose={toogleModal.bind(this)}
        onSubmit={onSubmit.bind(this)}
      />
    </div>
  );
};

export default Boxitem;
