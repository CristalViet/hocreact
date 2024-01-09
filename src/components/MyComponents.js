import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {

    state={
        listUsers : [
            {id:1,name:"Viet" ,age:"30"},
            {id:2,name:"Linh" ,age:"20"},
            {id:3,name:"VietCristal" ,age:"21"},


        ]
    }

    //JSX
    render(){
        //Dry
        return(
        <div>
        

        <UserInfor/>
        <DisplayInfor listUsers={this.state.listUsers}></DisplayInfor>
        <hr/>
        
        </div>

        );
    }
}


export default MyComponent;
