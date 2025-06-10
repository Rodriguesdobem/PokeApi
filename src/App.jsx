import {Routes, Route} from 'react-router-dom'
import Home from './Home.jsx'
import Menu from './Menu'
import PokeFlex from './PokeFlex'
import PokeGrid from './PokeGrid'


const App = () => {

  return (
    <Routes>
      <Route path="home" element={<Home/>} />
      <Route index element={<Menu/>} />
      <Route path="pokeflex" element={<PokeFlex/>} />
      <Route path="pokegrid" element={<PokeGrid/>} />
    </Routes>
  )
}

export default App
