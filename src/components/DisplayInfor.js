    import React, { useState }  from "react";
    import './DisplayInfor.scss';
    import logo from '../logo.svg';
    // class DisplayInfor extends React.Component{

       
      
       

    //     render(){
    //         console.log(">>Call me render")
    //     const {listUsers}=this.props;
    
    //         return(
                
    //             <div className="display-infor-container">
                    
                    
    //                 {true&&
    //                 <div>
    //                 {listUsers.map((user,index)=>{
                        
                        
    //                     return(
    //                         <div key={user.id} className={+user.age>18?'green':'red'}>
    //                         <div>Name: {user.name}</div>
    //                         <div>age: {user.age}</div>
    //                         <button onClick={(event)=>this.props.handleDeleteUser(user)} >delete</button>
    //                         <hr></hr>
    //                         </div>
                            
    
    //                     )
        
                    
    
    //             })}
    //                 </div>
    //                 }
                    
                    
        
                
                    
                    
    //             </div>
            


    //         );
    //     }
    // }

    const DisplayInfor=(props)=>{
           
            console.log(">>Call me render")
        const {listUsers}=props;
        const [isShowHideListUser,setShowHideListUser]=useState(true);
            const handleShowHideListUser = ()=>{
                setShowHideListUser(!isShowHideListUser);
              
            }
            return(
                
                <div className="display-infor-container">
                    <div>
                        <span onClick={()=>handleShowHideListUser()}>
                            {isShowHideListUser===true?"Hide list User":"Show list user"}
                        </span>
                    </div>
                    
                    {isShowHideListUser&&
                    <div>
                    {listUsers.map((user,index)=>{
                        
                        
                        return(
                            <div key={user.id} className={+user.age>18?'green':'red'}>
                            <div>Name: {user.name}</div>
                            <div>age: {user.age}</div>
                            <button onClick={(event)=>props.handleDeleteUser(user)} >delete</button>
                            <hr></hr>
                            </div>
                            
    
                        )
        
                    
    
                })}
                    </div>
                    }
                    
                    
        
                
                    
                    
                </div>
            


            );
        
    }
    export default DisplayInfor;