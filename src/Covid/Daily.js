import React ,{useEffect,useState}from 'react'
import { Dropdown,Nav,NavDropdown,Form,InputGroup,FormControl,Button } from 'react-bootstrap'

function CovidDaily() {
    const [daily ,setDaily]= useState([])

    useEffect(()=>{
        fetch('https://api.covid19india.org/state_district_wise.json').then(response=>response.json()
        ).then(responseData=>{
            console.log(responseData.Bihar)
            // for (let i=0; i<length.responseData; i++){
            //     console.log(i)
            // }
            setDaily(responseData)
        }
    )},[])
    return(
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    State
                </Dropdown.Toggle>
                {daily.map(item =>
                    <Dropdown.Menu>
                      {{item}}
                    </Dropdown.Menu>
                )}
            </Dropdown>
        </div>
    )
}

export default CovidDaily;