import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { IoMdClose, IoMdArrowDropup, IoMdArrowDropdown,IoIosTrash } from "react-icons/io";
import { Link } from "react-router-dom";
import "./index.css";

export const Cart = () => {
const value = useContext(DataContext);
const [menu, setMenu] = value.menu;
const [carrito, setCarrito] = value.carrito;
const [total] = value.total;


const tooglefalse = () => {
    setMenu(false);
	};
	
	const reduce = id =>{
		carrito.forEach(item =>{
			if(item.id === id){
				item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
			}
			setCarrito([...carrito])
		})
	}
	const increase = id =>{
		carrito.forEach(item =>{
			if(item.id === id){
				item.cantidad +=1;
			}
			setCarrito([...carrito])
		})
	}

	const removeProducto = id =>{
		if(window.confirm("¿Quieres eliminar el producto?")){
			carrito.forEach((item, index)=>{
				if(item.id === id){
					item.cantidad = 1;
					carrito.splice(index, 1)
				}
			})
			setCarrito([...carrito])
		}
	}

const show1 = menu ? "carritos show" : "carrito";
	const show2 = menu ? "carrito show" : "carrito";
	


return (
    <div className={show1}>
    <div className={show2}>
        <div onClick={tooglefalse} className="carrito__close">
        <IoMdClose className="ion-icon"/>
        </div>
        <h2 className="tituloCarrito">Su Carrito</h2>
        <div className="carrito__center">
					{
						carrito.length === 0 ? <h2 style={{textAlign: "center", fontSize: "3rem"}}>Su carrito esta vacio</h2> :<>
					{
						carrito.map((producto) => (
							<div className="carrito__item" key={producto.id}>
            <img src={producto.imagen} alt={producto.titulo} />
            <div>
                <h3> {producto.titulo} </h3>
                <p className="price">${producto.precio}</p>
            </div>
            <div>
				<IoMdArrowDropup
				onClick={() => increase(producto.id)} className="arrow" 
				type="solid"
				/>
                <p className="cantidad">{producto.cantidad}</p>
								<IoMdArrowDropdown
									onClick={() => reduce(producto.id)} 
									className="arrow" 
									type="solid" 
									/>
            </div>
							<div 
							onClick={() => removeProducto(producto.id)} 
							className="remove__item"
							>
                <IoIosTrash className="trash" />
            </div>
            </div>
					))
				};
					
					</>
					}
        </div>

        <div className="carrito__footer">
        <h3>Total: ${total}</h3>
        <button className="pay"><Link to={`/ContactFormEdit`} >PAGAR</Link>  </button>
        </div>
    </div>
    </div>
);
};