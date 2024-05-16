import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Menu from './components/menu';
import Aside from './components/aside';
import Contents from './components/content';

function App() {
  return (
    <>
      <Header />
      <Menu />
      <div className="container mt-5">
        <div className="row">
          <Aside />
          <Contents/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
