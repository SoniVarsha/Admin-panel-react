import { calculateNewValue } from "@testing-library/user-event/dist/utils"
import React from "react"

class Details extends React.Component{
  render(){
    const {data} = this.props
  // console.log(data)
 
    return(
 <>   
            <div id="info-wrapper">
                        <h1>Details</h1>
                        <p>Click on a table item to get detailed information</p>
                        <div id="info-content">
                            <div><b>User selected:</b> {data.firstName} {data.lastName}</div>
                            <div>
                                <b>Description: </b>
                                <textarea cols="50" rows="5" readonly>
                                   {data.description}
                                </textarea>
                            </div>
                            <div><b>Address:</b> {data.address.streetAddress}</div>
                            <div><b>City:</b>  {data.address.city}</div>
                            <div><b>State:</b>  {data.address.state}</div>
                            <div><b>Zip:</b>  {data.address.zip}</div>
                          
                        </div>
                    </div>
 
 </>
   )
  }
}

export default Details