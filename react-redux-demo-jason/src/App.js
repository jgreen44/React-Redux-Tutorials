import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store'
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <CakeContainer/>
                <HooksCakeContainer />
            </div>
        </Provider>
    );
}

export default App;
