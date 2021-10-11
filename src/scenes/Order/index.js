import React, { useEffect, useContext, useState } from 'react';
import Paginator from 'react-hooks-paginator';
import { useHistory } from 'react-router-dom';

import { Context } from '../../store';
import './index.scss';
import { Boxitem } from './components';

const Index = () => {
  const pageLimit = 3;
  const { state, dispatch } = useContext(Context);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [changeStatus, setchangeStatus] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setData(state.dummy.orders);
  }, []);

  useEffect(() => {
    setData(state.dummy.orders);
    setCurrentData(data.slice(offset, offset + pageLimit));
    setchangeStatus(false);
  }, [changeStatus, offset, data]);

  return (
    <div>
      <div className="wrapper-menu">
        <div className="menu">
          <p>List Order</p>
        </div>
        <div className="menu">
          <p>Item status</p>
        </div>
      </div>
      <button
        hidden
        onClick={(evt) => {
          evt.preventDefault();
          history.push('/');
        }}
      >
        Logout
      </button>
      <div className="wrapper-item">
        {currentData.map((value, index) => {
          return (
            <Boxitem
              key={index}
              order={value}
              index={index}
              onSubmit={(event) => {
                const stateStatus =
                  value.status === 'diterima'
                    ? 'dibuat'
                    : value.status === 'dibuat'
                    ? 'diantarkan'
                    : value.status;
                dispatch({
                  type: 'ORDEREDIT',
                  payload: {
                    id: index,
                    data: { ...value, status: stateStatus },
                  },
                });
                setchangeStatus(true);
                event.preventDefault();
              }}
            />
          );
        })}
      </div>
      <Paginator
        totalRecords={state.dummy.orders.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Index;
