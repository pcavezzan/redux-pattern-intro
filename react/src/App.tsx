import React, { useEffect } from 'react';
import './App.css';
import { Header } from './Header';
import { Messages } from './Messages';
import { MessageCreate } from './MessageCreate';
import { useAppDispatch } from './store/hooks';
import { loadMessagesAction } from './store/messages/messages.actions';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadMessagesAction());
  }, []);
  return (
    <div className="App">
      <Header/>
      <Messages/>
      <MessageCreate/>
    </div>
  );
}

export default App;
