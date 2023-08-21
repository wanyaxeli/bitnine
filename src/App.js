import logo from './logo.svg';
import './App.css';
import { useState ,useEffect} from 'react';
import IconHeader from './components/IconHeader';
import Header from './components/Header';
import HeaderPop from './components/HeaderPop';
import AppRoutes from './components/AppRoutes';
function App() {
  return (
    <div className="App">
    <HeaderPop/>
    <IconHeader/>
    <Header/>
     <AppRoutes/>
    </div>
  );
}

export default App;
