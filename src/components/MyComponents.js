import React, { useState } from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';



// class MyComponent extends React.Component {

//     state={
//         listUsers : [
//             {id:1,name:"Viet" ,age:"30"},
//             {id:2,name:"Linh" ,age:"17"},
//             {id:3,name:"VietCristal" ,age:"21"},


//         ]
//     }
//     handleAddNewUser = (objectUser)=>{
//         // let listUsersClone = [...this.state.listUsers];
        
     
//         this.setState({
//             listUsers:[objectUser,...this.state.listUsers]

//         })
//     };
//     handleDeleteUser = (objectUSer)=>{
//         console.log(objectUSer);
//         let listUsersClone=this.state.listUsers;
//        let listChanged= listUsersClone.filter((user)=>{
          
//             return user.id!=objectUSer.id;
//         });
//         this.setState({
//             listUsers:listChanged
//         })
//     };

//     //JSX
//     render(){
//         //Dry
//         const test={name:'viet',age:45};

//         return(
//             <>  
//             {JSON.stringify(test)}
//             <br></br>
//          <div className='a'>
        

//         <AddUserInfor handleAddNewUser={this.handleAddNewUser}/>
//         <br></br>
//         <DisplayInfor listUsers={this.state.listUsers} handleDeleteUser={this.handleDeleteUser}></DisplayInfor>
//         <hr/>
        
//         </div>
//         <div className='b'></div>

//         </>
    
    

//         );
//     }
// }

const MyComponent=()=>{
    
    
        
        
  
    const [listUsers,setListUser]=useState([{id:1,name:"Viet" ,age:"30"},
    {id:2,name:"Linh" ,age:"17"},
    {id:3,name:"VietCristal" ,age:"21"}]);

      const  handleAddNewUser = (objectUser)=>{
        // let listUsersClone = [...this.state.listUsers];
        
     
    
        setListUser([objectUser,...listUsers])

 
    };
     const  handleDeleteUser = (objectUSer)=>{
        console.log(objectUSer);
        let listUsersClone=listUsers;
       let listChanged= listUsersClone.filter((user)=>{
          
            return user.id!=objectUSer.id;
        });
     
            setListUser(listChanged);
   
    };
   
        //Dry
        const test={name:'viet',age:45};

        return(
            <>  
            {JSON.stringify(test)}
            <br></br>
         <div className='a'>
        

        <AddUserInfor handleAddNewUser={handleAddNewUser}/>
        <br></br>
        <DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser}></DisplayInfor>
        <hr/>
        
        </div>
        <div className='b'></div>

        </>
    
    

        );
    
}
export default MyComponent;
