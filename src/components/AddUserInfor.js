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
            name:'eric',
            age: '26'

            }

        );
    }
    render(){
        return(
            <div>
                My name is {this.state.name} and I'm {this.state.age}

                <form onSubmit={(event)=>this.handleOnSumbit(event)}>
                <label>Your name</label>
                <input type="text" value={this.state.name}  onChange={(event)=>this.handleOnChangeInput(event)}/>
                <label>Your age: </label>
                <input type="text" value={this.state.age}  onChange={(event)=>this.handleOnChangeAge(event)}/>
                    <button>
                        submit
                    </button>
                    </form>
            </div>
      
        );
    }
}
export default AddUserInfor;