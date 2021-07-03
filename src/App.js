import './App.css';
import { Nav } from './Components'
import { ProductListing } from './Pages'
function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <ProductListing />
      </div>
    </>
  );
}

export default App;
