import './App.css';
import Classcount from './Classcount';
import { Props } from './Props';

function App() {
  return (
    <div className="App">
      <Classcount />
      <Classcount />
      <Classcount />
      <Props name="Hello" />
      <Props name="Link" />
      <Props name="Impact" />
    </div>
  );
}

export default App;
