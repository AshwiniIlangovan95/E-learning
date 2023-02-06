import React from "react";
import "./cart.scss"

function Cart(props){
    const total_price= props?.cartItems?.reduce((ash,item) => ash+item.Price, 0)
    console.log(props, total_price)
    return(
        <div className="cart_back">
            <div className="cart-items">
                <div className="cart-items-header">
                    <h4>Cart Items</h4>
                </div>
                <div>
                <table>
                    
                    <thead>
                    <tr>
                    <th>S.no</th>
                    <th>Course Name</th>
                    <th>Price</th>
                    
                    </tr>
                    </thead>
                
                    {props?.cartItems?.map((item, index)=>(
                            
                                <tr  >
                                    <td>{index+1}</td>
                                    <td>{item.course_Name} {item.Course_Duration} </td>
                                    <td>{item.Price}</td>
                                    <td></td>
                                </tr>
                    ))}
                    <tfoot>
                    <tr>
                                <td colSpan="2">TOTAL</td>
                                <td>{total_price}</td>
                                </tr>
                    </tfoot>
                    </table>
                    <br/>
                    <button className="primary-btn" onClick="buynow">Buy Now</button>
                </div>
            </div>
        </div>

    );
                    }

export default Cart;