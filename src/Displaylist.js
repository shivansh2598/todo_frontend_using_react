import React from 'react';
import axios from 'axios';


class Displaylist extends React.Component
{

    constructor(props)
    {
        super(props);
        const{app}=props;
        this.state={
            app:app
        }
        this.delete=this.delete.bind(this)
    }

    a=()=>{
        let list=[];
       for(let i in this.state.app)
        {
            list.push(
                
                <div style={{marginLeft:'650px',fontSize:'20px',maxWidth:'500px',minHeight:'20px',
                overflowWrap:'break-word',marginTop:'20px'}}>
                    {this.state.app[i].blog}
                    <input type="checkbox" id={`check${i}`} />
                </div>
            )
            
        }
    

        return list;
    }


    delete=()=>
    {
    //    var count=0;
       console.log(this.state.app)
         for(let i in this.state.app)
         {
             if(document.getElementById(`check${i}`).checked===true)
             {
                 axios.delete("http://localhost:3002/",{
                     data:{blogzz:this.state.app[i].blog}
                 })
                 .then((response)=>
                 {
                     console.log(response)
                    const { check1 }= this.props;
                    console.log(check1)
                    check1();
                    const{func1}=this.props;
                    func1();
                 })
                 .then(()=>{
                     return
                 })
            }
        
         }

       
        
        
    }
  

    render()
    {
        return(
            <div>
                {this.a()}
                <center>
                <button type="button" onClick={this.delete} style={{marginLeft:'5px', width:'100px',marginTop:'20px'}} className="btn btn-danger">Delete</button>
                </center>
            </div>
            
        )
    }
}

export default Displaylist

