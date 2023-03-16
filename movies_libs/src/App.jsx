import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="App">
      <nav id="navbar">
        <h2>
          <Link to ='/'>Movies Lib</Link>
        </h2>
          <Link to ='/Movie/1'>Movies Lib</Link>
          <Link to ='/search'>search Lib</Link>
       {/* 16  min do video https://www.youtube.com/watch?v=XqxUHVVO7-U */}
      </nav>
      <h2>Movies Lib</h2>
      <Outlet />
    </div>
  )
}

export default App
