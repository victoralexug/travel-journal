import Nav from './components/Nav-bar';
import Main from './components/Main';
import Data from './data';

function App() {
const Cards = Data.map(item => {
  return (
    <Main 
      key= {item.id}
      item = {item}
    />
  )
})
  return (
    <div className="App">
      <div>
        <Nav />
        {Cards}
      </div>
    </div>
  );
}

export default App;
