
import './App.css';
import Footer from "./components/Footer.js"
import Header from "./components/Header.js"
import HeroSection from "./components/HeroSection.js"
import About from "./components/About.js"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home.js"
import Content from "./components/Content.js"




function App() {
  return (
      <Router>     
        <div className = "App">        
          <Header/>
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/tool" component={Content} />
              </Switch>
            </main>
          <Footer/>    
        </div>
      </Router>
  
  );
}


export default App;
