import React from 'react'
import Header from './Header'

function Home() {

  const prodList = [
    {name:"Product1",desc:"Description1",price:2000},
    {name:"Product2",desc:"Description2",price:2000},
    {name:"Product3",desc:"Description3",price:2000},
    {name:"Product4",desc:"Description4",price:2000},
  ]

  const [ prods, setProds ] = React.useState(prodList)
  const [ auth, setAuth ] = React.useState(false)
  
  return (
    <div>
      <Header/>
      <h1>Products</h1>
        {
          prods.map((item,index) => (
            <div className = "product">
              <p>Name:{item.name}</p>
              {auth &&
               <div key = {index}>
                <p>Description:{item.desc}</p>
                <p>Price:{item.price}</p>
                <button>Добавить в корзину</button>
              </div>  
          }
            </div>
          ))
        }
      <button onClick = {() => setAuth(!auth)}>АВТОРИЗОВАТЬСЯ(DEV)</button>
    </div>
  )
}

export default Home