
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/navbar'
import Men from './pages/men'
import Index from './pages'
import Women from './pages/women'
import SingleArticle from './pages/article'


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Navbar></Navbar>}>
        <Route path='/' element={<Index></Index>} ></Route>
        <Route path='/men' element={<Men></Men>} ></Route>
        <Route path='/women' element={<Women></Women>} ></Route>
        <Route path='/article/:id' element={<SingleArticle></SingleArticle>}></Route>
      </Route>
    </Routes>

    </>
  )
}

export default App
