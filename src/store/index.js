import { useReducer, useContext, createContext } from 'react';
import dummyData from './dummy.json';

const Context = createContext();

const initialState = {
  isLogin: false,
  dummy: dummyData,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'islogin':
      return { ...state, isLogin: action.payload };
    case 'ORDEREDIT':
      const nArr = state.dummy.orders.findIndex(
        (v) => action.payload.id === v.id
      );
      let order = Object.assign({}, state.dummy.orders[nArr + 1]);
      let edit = { ...order, ...action.payload.data };
      const orders = Object.assign([], state.dummy.orders);
      orders.splice(nArr + 1, 1, edit);

      return { ...state, dummy: { orders } };
    default:
      throw new Error();
  }
};

export { initialState, reducer, Context };
