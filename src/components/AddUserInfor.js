import React from 'react';

class AddUserInfor extends React.Component{
    state ={
        name: 'HarryPhamDev',
        address: 'Nguyen Tri Phuong',
        age:26
      }
   
    handleOnMouseOver(event){
        console.log(event)
    }
    handleOnChangeInput(event){
       console.log(event.target.value)
       this.setState(
        {
            name : event.target.value,
          
        }
       );
    }
    handleOnChangeAge(event){
        console.log(event.target.value)
        this.setState(
         {
            age: event.target.value
         }
        );
     }
    handleOnSumbit=(event)=>{
        event.preventDefault();
        this.props.handleAddNewUser(
            {
            id: Math.floor((Math.random()*100)+1)+'-random',
            name:this.state.name,
            age: this.state.age

            }

        );
    }
    render(){
        return(
            <>
             My name is {this.state.name} and I'm {this.state.age}

            <form onSubmit={(event)=>this.handleOnSumbit(event)}>
            <label>Your name</label>
            <input type="text" value={this.state.name}  onChange={(event)=>this.handleOnChangeInput(event)}/>
            <label>Your age: </label>
            <input type="text" value={this.state.age}  onChange={(event)=>this.handleOnChangeAge(event)}/>
                <button onClick={(event)=>{}}>
                    submit
                </button>
                </form>
            </>
               
      
      
        );
    }
}
export default AddUserInfor;