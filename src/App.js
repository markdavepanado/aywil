import Developer from "./components/Developer";
import Aywil from "./components/Aywil";
import TodoList from "./components/TodoList";
import DoneList from "./components/DoneList";

import { Provider } from "./context/TodoState";

import "./styles/App.css";

function App() {
  return (
    <Provider>
      <div className='app'>
        <div className='left-container'>
          <Developer />
          <Aywil />
          <h4 className='app__component-title'>Done List 🍃</h4>
          <DoneList />
        </div>
        <div className='right-container'>
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}

export default App;

// () , < ! @ # $ % ^ & * 0 1 2 3 4 5 6 7 8 9
