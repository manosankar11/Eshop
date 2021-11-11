import './App.css';
import Data from './components/Data/Data.json'
import Header from './components/Header/Header';


//const product = Data;

const App = () => {



  return (
    <div className="app">
      {/* <h1>Ramshiva</h1> */}
      <Header />
      <h1 className="title_product">
        {Data.map((post) =>
        (
          <h4 >{post.title}</h4>
        )
        )}
      </h1>
      {Data.map((post) =>
      (
        <img src={post.filename} alt={post.title} />
      ))

      }
    </div>
  );
}

export default App;
