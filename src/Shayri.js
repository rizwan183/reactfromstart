import React, { useState,useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Card,Nav,NavDropdown,Form,InputGroup,FormControl,Button } from 'react-bootstrap'
import './shayari.css'
function Shayari(){

    const [shayari ,setShayari]= useState([])

    useEffect (()=>{
        document.title = "Shayari With SibTain"
        fetch('https://shayari-with-rz-default-rtdb.firebaseio.com/shayari.json').then(response=>response.json()
        ).then(responseData=>{
            // console.log(responseData)
            // console.log(Object.keys(responseData))
            var key=Object.keys(responseData)
            var shayaridata=[]
            for (let i=0; i<key.length; i++){
                var cKey=key[i]
                // console.log(cKey)
                if (responseData[cKey]!=null)
                {   
                    // console.log(responseData[cKey])
                    shayaridata.push(responseData[cKey])
                }
            }
            shayaridata.reverse();
            setShayari(shayaridata)
            console.log(shayaridata)
        }
        )
    },[])

   let data=(data1)=>{
        alert(data1)
    }

    return(
                <div >
                        <div class="sticky">
                            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                                <Navbar.Brand href="#home">Shayari With SibTain</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/post">Post New Shayari</Nav.Link>
                                    </Nav>
                                    
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    
                        {shayari.map(item => 
                       
                        
                        <Card style={{ margin: '10px' }}>
                            <Card.Body>
                                <Card.Title>Posted By {item.user}</Card.Title>
                                <Card.Text>
                                {item.text}
                                </Card.Text>
                                <Card.Link href="#">Like</Card.Link>
                                <Card.Link href={'https://api.whatsapp.com/send/?phone=&text='+item.text}>Share</Card.Link>
                            </Card.Body>
                        </Card>
                         ) }
                  
                </div>
                
    )
}

export default Shayari;