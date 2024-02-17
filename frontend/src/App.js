import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import Registros from './componentes/historico'
import api from './services/api'

function App() {
  
    const [totalRecebidos, setTotalRecebidos] = useState(0);
    const [totalGasto, setTotalGasto] = useState(0);
    const [addSaldo, setAddSaldo] = useState("fechado");

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await api.get('/finances',);
          setAllFinances(response.data);
  
          // Calcular a soma dos valores do campo "recebidos" de todos os registros
          const somaRecebidos = response.data.reduce((total, item) => total + item.recebidos, 0);
          const somaGasto = response.data.reduce((total, item) => total + item.gastos, 0);
          setTotalRecebidos(somaRecebidos);
          setTotalGasto(somaGasto);
        } catch (error) {
          console.error('Erro ao buscar dados do servidor:', error);
        }
      };
  
      fetchData();
    }, []);



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


    const [descricao, setDescricao] = useState('');
    const [recebidos, setRecebidos] = useState(0);
    const [gastos, setGastos] = useState(0);
    const [allFinances, setAllFinances] = useState([]);

    useEffect(() =>{
      async function getAllFinances(){
        const response = await api.get('/finances',)

        setAllFinances(response.data)
      }

      getAllFinances()
    }, [])

    async function handleSubmit(e){
      e.preventDefault();

      const response = await api.post('/finances',{
        descricao,
        recebidos,
        gastos
      });

      setDescricao('');
      setRecebidos('');
      setGastos('');

      setAllFinances([...allFinances, response.data])
    }

    function refresh(){
      const handleClick = () => {
        window.location.reload();
      }
      handleClick();
    }

  
    
  return (

      <div id="app">
         <div className={addSaldo === "aberto" ? "blur" : ""} onClick={() => {closedAddSaldoPopUp(''); setDescricao(''); setRecebidos('')}}></div>
        <div className={addGasto === "aberto" ? "blur" : ""} onClick={() => {closedAddGastoPopUp(''); setDescricao(''); setGastos('')}}></div>
        <p className='title'>Controle suas finanças!</p>
        <main>
          <div className='saldo'>
            <p>Olá, </p>
            <div className='content_saldo'>
              <div className='saldo_single'>
                <div className='receita'>
                  <p>Receita Mensal</p>
                  <h1 className='saldo_green'>R${totalRecebidos.toFixed(2)}</h1>
                </div>
              </div>
              <div className='saldo_single'>
                <div className='gastos'>
                  <p>Gasto Mensal</p>
                  <h1 className='gasto_red'>R${totalGasto.toFixed(2)}</h1>
                </div>
              </div>
              <div className='saldo_single'>
                <div className='disponivel'>
                  <p>Saldo disponivel</p>
                  <h1>R${totalRecebidos.toFixed(2) - totalGasto.toFixed(2)}</h1>
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
        <div className='registros'>
          <div className='registrosTabela'>
            <div className='tableTitles'>
              <p>Registro</p>
              <p>Receita</p>
              <p>Gasto</p>
            </div>
            {allFinances.map(data =>(
              <Registros data={data}/>
            ))}
          </div>
        </div>

        {addSaldo === "aberto" && (
              <div className='popup'>
              {/* Conteúdo que será exibido quando isOpen for "aberto" */}
              <div className='addReceita'>
                  <h1 className='close' onClick={() => {closedAddSaldoPopUp(''); setDescricao(''); setRecebidos('')}}>X</h1>
                  <div className='addReceitaTitle'>Adicionar Receita</div>
                  <div className='addReceitaInput'>
                    <form onSubmit={handleSubmit}>
                    <p>Valor</p>
                      <input maxLength="15" type='text' placeholder='Receita' value={descricao} onChange={e => setDescricao(e.target.value)}></input>
                      <input type='number' placeholder='R$' value={recebidos} onChange={e => setRecebidos(e.target.value)}></input>
                      <button onClick={refresh}>Confirmar</button>
                    </form>
                  </div>
                </div>
              </div>
        ) || null}

      {addGasto === "aberto" && (
          <div className='popup'>
            {/* Conteúdo que será exibido quando isOpen for "aberto" */}
            <div className='addReceita'>
              <h1 className='close' onClick={() => {closedAddGastoPopUp(''); setDescricao(''); setGastos('')}}>X</h1>
              <div className='addReceitaTitle'>Adicionar Gasto</div>
              <div className='addReceitaInput'>
                <form onSubmit={handleSubmit}>
                <p>Valor</p>
                  <input maxLength="15" type='text' placeholder='Despesa' value={descricao} onChange={e => setDescricao(e.target.value)}></input>
                  <input type='text' placeholder='R$' value={gastos} onChange={e => setGastos(e.target.value)}></input>
                  <button onClick={refresh}>Confirmar</button>
                </form>
              </div>
            </div>
          </div>
        ) || null}

        </div>
  )
 }


export default App;
