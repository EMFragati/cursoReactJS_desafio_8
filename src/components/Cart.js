import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';

const Cart = () => {
    const context = useContext( CartContext );
    
    /*Renderizado*/
    return(
        <>   
          <span className="h1 my-3 mx-3">Tus productos hasta el momento</span>
          <br/>
          <button type="button" className="btn btn-danger mx-5 my-5" onClick= { event => { context.clear() } }>Limpiar Carrito</button>          
          
          <Link to={`/`}>
              <button type="button" className="btn btn-success">Seguir Comprando</button>
          </Link>

          {
            context.itemsInCart.map(
              item => (
                <div key={`item_id_${item.id}`} className="my-3">
                  <div  className="container">
                    <div className="row">
                      <div className="col-3">
                        <img className="itemCover" src={`${item.cover}`} alt="item.png"/>
                      </div>  

                      <div className="col-3">
                        <span className="h3"> {`${item.id}`}</span>
                        <br/>
                        <span>Cantidad: {`${item.quantity}`}</span>
                        <br/>
                        <span>Precio: ${`${item.price}`}</span>  
                        <br/>                                                
                        <button type="button" className="btn btn-danger mx-1" onClick= { event => { context.removeItem( item.id ) } }>Remover</button>                        
                      </div>
                      <br/>
                    </div>                    
                  </div>
                </div>
              )
            )
          }
        </>
    )
};

export default Cart;