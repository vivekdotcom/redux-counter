import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter';
import store from './redux/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
