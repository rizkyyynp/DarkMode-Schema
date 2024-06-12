import React from 'react'
import './index.css'
import Card from './components/Card';
import { useSelector } from 'react-redux';

function App() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <>
      <div className={`h-screen flex justify-center items-center ${darkMode ? ' bg-slate-900' : 'bg-slate-50'} transition-all duration-.4s`}>
        <Card />
      </div>
    </>
  )
}

export default App;
