import React from 'react'
import Nav1 from './nav1'
import Nav2 from './nav2'
function Login(){
    let log =1;
    if (log==2){
        return(
            <div>
                <Nav2 />
            </div>
        )
    }

    if (log==1){
        return(
            <div>
                <Nav2 />
            </div>
        )
    }
    
}
export default Login;