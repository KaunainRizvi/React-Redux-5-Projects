

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import "./styles/App.scss"
import "./styles/home.scss"
import "./styles/header.scss"
import "./styles/footer.scss"
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">

    <Router >
      <Header/>
      <Routes>
    <Route path="/" element={<Home/>}/>
    </Routes>

    <Footer/>
    </Router>
    
    </div>
  );
}

export default App;
