import { Route, Switch } from 'react-router';
import './App.css';
import Header from '../Header/Header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Switch>
          <Route exact path="/" render={() => <h2>test</h2>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
