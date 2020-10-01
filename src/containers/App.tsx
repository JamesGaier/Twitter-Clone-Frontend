import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { Provider } from 'react-redux';
import { store } from '../store';
import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';
import { loadUser } from '../store/actions/auth';
import PostPage from '../pages/PostPage';
// import './App.css';
const App = (): JSX.Element => {
  useEffect(() => {
    //store.dispatch(loadUser());
  }, [store.dispatch])
  return (
    <Provider store={store}>
      { /*<HomePage /> */}
      <AuthPage />
      {/* <PostPage /> */}
    </Provider>
  );
}

export default App;
