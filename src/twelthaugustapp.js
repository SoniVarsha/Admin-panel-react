import axios from "axios";
import React from "react";
import "./twelth.css"
import TableRow from "./twelthaugust";
import Details from "./twelthDetails"

class App extends React.Component {
    state = {
        userData: [],
        searchQuery: "",
        filteredData: [],
        activeRow: 2,
        activeRowData: "",
        activeRowid: ""
    }

    componentDidMount() {
        axios.get('https://admin-panel-data-edyoda-sourav.herokuapp.com/admin/data')
            .then(res => this.setState({
                userData: res.data,
                activeRowid: res.data[this.state.activeRow].id,
                activeRowData: res.data[this.state.activeRow]
            }))
            // .then(res => console.log(res))
            .catch(err => console.log(err))


    }

    getfilteredData(e) {
        let filterUsers = this.state.userData.filter(user => user.firstName.toLowerCase().includes(e.target.value.toLowerCase()))
        // console.log(filterUsers)

        this.setState({
            searchQuery: e.target.value,
            filteredData: filterUsers,
        }
        )
    }

    handleSelectedRow = (id) => {
let selectedRowRecord = this.state.userData.findIndex(user => user.id === id)
console.log(selectedRowRecord)
this.setState({
    activeRowid: id,
    activeRowData : this.state.userData[selectedRowRecord]
})
    }

    render() {
        // console.log(this.state)
        return (
            <>
                <main>

                    <div id="table-section">

                        <form action="/">
                            <input type="text" placeholder="Enter something" name="search-box" id="search-box"
                                 value={this.state.searchQuery} 
                                onChange={(e) => this.getfilteredData(e)}
                            />
                        </form>

                        <div id="table-wrapper">

                            <div id="table-headers">
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="column1">Id</th>
                                            <th class="column2">FirstName</th>
                                            <th class="column3">LastName</th>
                                            <th class="column4">Email</th>
                                            <th class="column5">Phone</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                            <div id="table-data">
                                <table>
                                    <tbody>
{/* {this.state.userData.length !== 0 ? this.state.userData.map((item => <TableRow data ={item}   />)):"" } */}
                                        {
                                            this.state.filteredData.length === 0 && this.state.searchQuery == "" ? this.state.userData.map((item, index) => <TableRow data={item}
                                             handleSelectedRow={this.handleSelectedRow} 
                                             selectedRow={this.state.activeRowid} />
                                            ) : this.state.filteredData.map((item, index) => <TableRow data={item} 
                                            handleSelectedRow={this.handleSelectedRow} 
                                            selectedRow={this.state.activeRowid}/>)
                                        }


                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>
{this.state.activeRowData ?
                    <Details data= {this.state.activeRowData} />: ""}
                </main>

            </>
        )
    }
}

export default App