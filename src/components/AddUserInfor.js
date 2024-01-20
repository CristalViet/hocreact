import React, { useState } from 'react';

// class AddUserInfor extends React.Component{
//     state ={
//         name: 'HarryPhamDev',
//         address: 'Nguyen Tri Phuong',
//         age:26
//       }
   
//     handleOnMouseOver(event){
//         console.log(event)
//     }
//     handleOnChangeInput(event){
//        console.log(event.target.value)
//        this.setState(
//         {
//             name : event.target.value,
          
//         }
//        );
//     }
//     handleOnChangeAge(event){
//         console.log(event.target.value)
//         this.setState(
//          {
//             age: event.target.value
//          }
//         );
//      }
//     handleOnSumbit=(event)=>{
//         event.preventDefault();
//         this.props.handleAddNewUser(
//             {
//             id: Math.floor((Math.random()*100)+1)+'-random',
//             name:this.state.name,
//             age: this.state.age

//             }

//         );
//     }
//     render(){
//         return(
//             <>
//              My name is {this.state.name} and I'm {this.state.age}

//             <form onSubmit={(event)=>this.handleOnSumbit(event)}>
//             <label>Your name</label>
//             <input type="text" value={this.state.name}  onChange={(event)=>this.handleOnChangeInput(event)}/>
//             <label>Your age: </label>
//             <input type="text" value={this.state.age}  onChange={(event)=>this.handleOnChangeAge(event)}/>
//                 <button onClick={(event)=>{this.props.handleDelete()}}>
//                     submit
//                 </button>
//                 </form>
//             </>
               
      
      
//         );
//     }
// }
const AddUserInfor=(props)=>{
    const [name,setName]=useState("Hãy Nhâp Tên Bạn");
    const [age,setAge]=useState("Hãy Nhập Tuổi Bạn");

    

    const handleOnChangeInput=(event)=>{
       console.log(event.target.value)
      
 
             setName(event.target.value)
          
      
    }

    const handleOnSumbit=(event)=>{
        event.preventDefault();
        props.handleAddNewUser(
            {
            id: Math.floor((Math.random()*100)+1)+'-random',
            name:name,
            age: age

            }

        );
    }
        const handleOnChangeAge=(event)=>{
            console.log(event.target.value)
         
             setAge(event.target.value);
           
        }
        
        return(
            <div>
            My name is {name} and I'm {age}
   
           <form onSubmit={(event)=>handleOnSumbit(event)}>
           <label>Your name</label>
           <input type="text" value={name}  onChange={(event)=>handleOnChangeInput(event)}/>
           <label>Your age: </label>
           <input type="text" value={age}  onChange={(event)=>handleOnChangeAge(event)}/>
               <button onClick={(event)=>{props.handleDelete(event)}}>
                   submit
               </button>
               </form>
           </div>
        );
        
               
      
      



}





export default AddUserInfor;