import '../assets/App.css';
import React, { useState } from 'react';
import Contexto from '../components/Contexto';

function App() {
  const [predict, setPredict] = useState(0);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setInputs(values => ({...values, [id]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    alert("/?store="+inputs.nbr_store_input+"&family="+inputs.family_input+"&onpromotion="+inputs.onpromotion_input+"&its_holiday="+inputs.its_holiday);
  }

  return <>
  <div class="container-sm">
    <div id="app">
      <h1>Prediccion de ventas</h1>
      <br/>
      < Contexto />
      <div class = "contarier">
        <div class = "row">
          <div class = "col">
            <form onSubmit={handleSubmit}>
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label for="nbr_store_input" class="col-form-label">Numero de la tienda</label>
                </div>
                <div class="col-auto">
                  <input type="number" id="nbr_store_input" class="form-control" min = {0} max = {53} required onChange={handleChange}/>
                </div>
                <div class="col-auto">
                  <span id="nbr_store_span" class="form-text">
                    Del 0 al 53
                  </span>
                </div>
              </div>
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label for="family_input" class="col-form-label">Tipo de producto</label>
                </div>
                <div class="col-auto">
                  <input type="number" id="family_input" class="form-control" min = {0} max = {32} required onChange={handleChange}/>
                </div>
                <div class="col-auto">
                  <span id="namily_input_span" class="form-text">
                    Del 0 al 32
                  </span>
                </div>
                <div class = "container">
                  <div class = "row">
                    <div class = "col">
                      <ol start = {0}>
                        <li> Automotive </li>
                        <li> Baby Care </li>
                        <li> Beauty </li>
                        <li> Beverages </li>
                        <li> Books </li>
                        <li> Bread/Bakery </li>
                        <li> Celebration </li>
                        <li> Cleanning </li>
                        <li> Dairy </li>
                        <li> Deli </li>
                        <li> Eggs </li>
                      </ol>
                    </div>
                    <div class = "col">
                      <ol start = {11}>
                        <li> Frozen Foods </li>
                        <li> Grocery I </li>
                        <li> Grocery II </li>
                        <li> Hardware </li>
                        <li> Home and kitchen I </li>
                        <li> Home and kitchen II </li>
                        <li> Home Appliances </li>
                        <li> Home care </li>
                        <li> Ladieswear </li>
                        <li> Lawn and Garden </li>
                        <li> Lingerie </li>
                      </ol>
                    </div>
                    <div class = "col">
                      <ol start = {22}>
                        <li> Liquor, Wine and Beer 1 </li>
                        <li> Magazines </li>
                        <li> Meats </li>
                        <li> Personal Care </li>
                        <li> Pet Supplies </li>
                        <li> Players and Electronics </li>
                        <li> Poultry </li>
                        <li> Prepared Foods </li>
                        <li> Produce </li>
                        <li> School and Office Supplies </li>
                        <li> Sea Food </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label for="onpromotion_input" class="col-form-label">Número de productos con promoción</label>
                </div>
                <div class="col-auto">
                  <input type="number" id="onpromotion_input" class="form-control" min = {0} required onChange={handleChange}/>
                </div>
              </div>
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label for="its_holiday" class="col-form-label">Número de productos con promoción</label>
                </div>
                <div class="col-auto">
                  <input type="number" id="its_holiday" class="form-control" min = {0} max = {1} required onChange={handleChange}/>
                </div>
                <div class="col-auto">
                  <span id="its_holiday_span" class="form-text">
                    1-dia festivo,
                    0-no
                  </span>
                </div>
              </div>
              <input type="submit" class=""/>
            </form>
          </div>
          <div class = "col">
            <div class = "row">
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </div>
            <div class = "row">
              <h3>
                La prediccion es:
              </h3>
            </div>
            <div class = "row">
              {predict}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
}

export default App;