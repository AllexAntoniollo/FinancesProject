import React from 'react';
import './style.css';
import { useState } from 'react';


function App() {
    
  const [addSaldo, setAddSaldo] = useState("fechado");
    function changeAddSaldo(){
      if(addSaldo === "aberto"){
        setAddSaldo("fechado");
      }else{
        setAddSaldo("aberto");
      }
    }

    function closedAddSaldoPopUp() {
      if (addSaldo === "aberto") {
        changeAddSaldo();
      } else {
      }
    }


    const [addGasto, setAddGasto] = useState("fechado");
    function changeAddGasto(){
      if(addGasto === "aberto"){
        setAddGasto("fechado");
      }else{
        setAddGasto("aberto");
      }
    }

    function closedAddGastoPopUp() {
      if (addGasto === "aberto") {
        changeAddGasto();
      } else {
      }
    }
    
  return (

      <div id="app">
        <div className={addSaldo === "aberto" ? "blur" : ""} onClick={closedAddSaldoPopUp}></div>
        <div className={addGasto === "aberto" ? "blur" : ""} onClick={closedAddGastoPopUp}></div>
        <p className='title'>Controle suas finanças!</p>
        <main>
          <div className='saldo'>
            <p>Olá, </p>
            <div className='content_saldo'>
              <div className='saldo_single'>
                <div className='receita'>
                  <p>Receita Mensal</p>
                  <h1 className='saldo_green'>R$00,00</h1>
                </div>
              </div>
              <div className='saldo_single'>
                <div className='gastos'>
                  <p>Gasto Mensal</p>
                  <h1 className='gasto_red'>R$00,00</h1>
                </div>
              </div>
              <div className='saldo_single'>
                <div className='disponivel'>
                  <p>Saldo disponivel</p>
                  <h1>R$00,00</h1>
                </div>
              </div>
            </div>
          </div>

          <div className='dados'>
            <p>Acesso Rápido</p>
            <div className='acoes'>
              <div className='acoes_single'>
                <div className='add_receita' onClick={changeAddSaldo}>
                  <div className='circle_saldo'><h1>+</h1></div>
                  <p>Receita</p>
                </div>
              </div>
              <div className='acoes_single'>
                <div className='add_gasto' onClick={changeAddGasto}>
                <div className='circle_gasto'><h1>-</h1></div>
                <p>Gasto</p>
                </div>
              </div>
            </div>
          </div>
          <div className='clear'></div>

        </main>

        {addSaldo === "aberto" && (
          <div className='popup'>
            {/* Conteúdo que será exibido quando isOpen for "aberto" */}
            <div className='addReceita'>
              <p>X</p>
              <div className='addReceitaTitle'>Adicionar Receita</div>
              <div className='addReceitaInput'>
                <p>Valor</p>
                <input type='number' placeholder='R$'></input>
                <button>Confirmar</button>
              </div>
            </div>
          </div>
        ) || null}

      {addGasto === "aberto" && (
          <div className='popup'>
            {/* Conteúdo que será exibido quando isOpen for "aberto" */}
            <div className='addReceita'>
              <p>X</p>
              <div className='addReceitaTitle'>Adicionar Gasto</div>
              <div className='addReceitaInput'>
                <p>Valor</p>
                <input type='text' placeholder='R$'></input>
                <button>Confirmar</button>
              </div>
            </div>
          </div>
        ) || null}

        </div>
  )
 }


export default App;
