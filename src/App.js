import React, { Component } from 'react';
import Inputbox from './Inputbox';
import Displaylist from './Displaylist'
import axios from 'axios';
class App extends Component {

  constructor()
  {
    super();
    this.state={
      array:[],
      check:false
    }
    this.fetchdata=this.fetchdata.bind(this);
    this.changestate=this.changestate.bind(this);
  }

  componentDidMount()
  {
    this.fetchdata();
  }

  fetchdata()
  {
      axios.get("http://localhost:3002/")
      .then((response)=>{
          const val=response.data;
          this.setState(
            {
              array:val
            },()=>{
              // console.log(this.state.array);
              this.setState({
                check:true
              })
            }
          )
      })
      .catch((err)=>{
        console.log(err);
      })
  }


  changestate()
  {
    this.setState({
      check:false
    })
  }


  render() {
    if(this.state.check)
    {
      // console.log(this.state.array);
    return (
      <div className="App">
      <center>
      <h1>Todo list</h1>
      </center>
      <Inputbox app={this.state.array}
        func={this.fetchdata}
        check={this.changestate}
      />
      <Displaylist app={this.state.array}
      func1={this.fetchdata}
        check1={this.changestate}
        />
      
      </div>
    );
  }
  else
  {
    return(
      <div>
        <h1>hii</h1>
      </div>
    )
  }
}
}

export default App;
