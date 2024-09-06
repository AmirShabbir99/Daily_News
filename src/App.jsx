import React from 'react'
import News from './News'
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
    <div className="App">   
      <Routes>
        <Route path='/' element={<News/>} ></Route>
      </Routes>
    </div>
      </>
  )
}

export default App