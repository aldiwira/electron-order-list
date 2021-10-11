import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../store';
import './index.scss';

const Index = () => {
  const { state, dispatch } = useContext(Context);
  const history = useHistory();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formDatas = new FormData(event.target);
    const dummyUser = state.dummy.users;
    const userPost = {
      username: formDatas.get('username'),
      password: formDatas.get('password'),
    };
    if (
      userPost.username === dummyUser.username &&
      userPost.password === dummyUser.password
    ) {
      dispatch({ type: 'islogin', payload: true });
      history.push('/order');
    } else {
      alert('wrong username and password');
    }
  };
  return (
    <div className="app">
      <h1>Login</h1>
      <form onSubmit={onSubmitHandler}>
        <div className="wrapper-login">
          <div className="input">
            <p>Username : </p>
            <input name="username" type="text" />
          </div>
          <div className="input">
            <p>Password :</p>
            <input name="password" type="password" />
          </div>
        </div>
        <button className="submitBtn" type="submit" value="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Index;
