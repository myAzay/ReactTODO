import { useContext } from 'react';
import {BrowserRouter} from 'react-router-dom'
import { Context } from '.';
import AppRouter from './components/AppRouter'

const App = () => {
  const {user}=useContext(Context);
  
  /*if(localStorage.getItem('token'))
  {
    user.setIsAuth(true);
  }*/
  
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
