import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastfy.css';
import Header from "./components/Header";
import CardVendas from "./components/CardVendas";

function App() {
  return(
    <>
    <ToastContainer />
    <Header />
    <main>
        <section id="vendas">
            <div className="dsmeta-container">
              <CardVendas />
            </div>
        </section>
      </main>  
    </>
  )
}

export default App;
