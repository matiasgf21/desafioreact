import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Home from "./components/Home";

function App() {
  return (
    <>
    
     <Navbar/>
<Home/>


    <div className="container">
      <div className="row">
        <div className="col">
        <Card imagen='/img/pizza1.jpg' titulo="Napolitana" Precio="5950"  lista={["mozzarella", "tomates", "jamón", "orégano" ]}/>
        </div>
        <div className="col">
        <Card imagen='img/pizza2.jpg' titulo="Española" Precio="6950"  lista={["mozzarella", "gorgonzola", "parmesano", "provolone"]}/>
        </div>
        <div className="col">
        <Card imagen='img/pizza3.jpg' titulo="Pepperoni" Precio="6950" lista={["mozzarella", "peperoni", "orégano"]}/>
        </div>
      
     

      </div>
  

    </div>
    
     <Footer/>
    </>
  )
}

export default App
