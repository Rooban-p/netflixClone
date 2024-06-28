
import './App.css';
import RouteParent from './Router/RouteParent.jsx';
import { Provider } from 'react-redux';
import Store from './Layout/Store.js';

function App() {
  return (
    <div>
      <Provider store={Store}>
        <RouteParent/>
      </Provider>

    </div>
  );
}

export default App;
