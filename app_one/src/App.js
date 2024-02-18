

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import "./styles/App.scss"
import "./styles/home.scss"
import "./styles/header.scss"


function App() {
  return (
    <div className="App">

    <Router >
      <Header/>
      <Routes>
    <Route path="/" element={<Home/>}/>
    </Routes>
    </Router>
    
    </div>
  );
}

export default App;
