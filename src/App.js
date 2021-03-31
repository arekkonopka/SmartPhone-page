import './sass/App.sass'
import Header from "./components/Header"
import Main from './components/main/Main'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import { Footer } from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/'>
            <Main />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

