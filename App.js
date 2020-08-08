import React from 'react'
import Nav from './Components/Nav'
import Left from './Components/Left'
import Center from './Components/Center'
import Footer from './Components/Footer'
import Product from './Components/Product'
import Example from './Components/Example'


function App(){
    return(
        <div>
            <img src={process.env.PUBLIC_URL + "/logo.jpg"} alt="mypic"/>
            <Nav />
            <Left />
            <Product />
            <Example />
            <Center />
            <Footer />
        </div> 
       
    )
}

export default App


