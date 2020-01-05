import React from 'react';
import Header from './Header';
import OrderForm from './OrderForm';
import './App.css';

class CarOrder extends React.Component{
    
    render(){        
        return(
            <div className="order-page">
                <Header/>
                <OrderForm/>
            </div>
            
        )
    }

}

export default CarOrder;