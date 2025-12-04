import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import HeaderShop from './components/ShopPage/HeaderShop/HeaderShop'
import MainShop from './components/ShopPage/MainShop/MainShop'


function App() {

  return (
    <>
    <Routes>
      <Route path = "/HeaderShop" element = {<MainShop/>}></Route>
      <Route path = "/Header" element = {<MainShop/>}></Route>
      <Route path = "/" element = {<Main/>}></Route>
    </Routes> 
    </>
  )
}

export default App
