import React from 'react';
import AddUserInfor from './AddUserInfor'
import DisplayInfor from './DisplayInfor';



class MyComponent extends React.Component {

    state={
        listUsers : [
            {id:1,name:"Viet" ,age:"30"},
            {id:2,name:"Linh" ,age:"17"},
            {id:3,name:"VietCristal" ,age:"21"},


        ]
    }
    handleAddNewUser = (objectUser)=>{
        let listUsersClone = [...this.state.listUsers];
        
        // console.log(objectUser);
        // this.setState({
        //     listUsers:[objectUser,...this.state.listUsers]

        // })
    };

    //JSX
    render(){
        //Dry
        return(
        <div>
        

        <AddUserInfor handleAddNewUser={this.handleAddNewUser}/>
        <DisplayInfor listUsers={this.state.listUsers}></DisplayInfor>
        <hr/>
        
        </div>

        );
    }
}


export default MyComponent;
