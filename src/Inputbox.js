import React from 'react';
import axios from 'axios';
// import Displaylist from './Displaylist'
class Inputbox extends React.Component
{
    constructor(props)
    {
        super(props);
        const{app}=props;
        // const{check}=props;
        this.state={
            app:app,
            // check:check
        }
        this.submit=this.submit.bind(this);
        
    
    }

    submit(event)
    {
        var input=document.getElementById("input").value;
        var id=this.state.app.length;
        if(input==="")
        {
            alert("no data entered,try again");
            console.log(event);
            return;
        }
        axios.post("http://localhost:3002/",{
            blog:input,
            id:id
        })
        .then((response)=>{
            console.log(response);
            document.getElementById("input").value="";
            // document.location.reload(true)
            const { check }= this.props;
            check();
            const{func}=this.props;
            func();
          
        
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    render()
    {
        return (
            <div>
                <center>
                <label>Enter Todo item here</label>
                <br/>
                <input id="input" style={{width:'600px', fontSize:'20px', textAlign:'center'}} type="text" autoComplete='off'/>
                <button type="button" onClick={this.submit} style={{marginLeft:'5px', width:'100px'}} className="btn btn-danger">submit</button>
                </center>
            </div>
        )
    }
}

export default Inputbox;