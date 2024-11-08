import './App.css';
import Footer from './layouts/Footer/Footer';
import Services from './layouts/Services/Services';
import SharedLayout from './layouts/SharedLayout/SharedLayout';

function App() {
  return (
    <div className="App">
     <SharedLayout/>
     <Services/>
     <Footer/>
    </div>
  );
}

export default App;
