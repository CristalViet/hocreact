import React  from "react";


class DisplayInfor extends React.Component{

    state ={
        isShowListUser:true
    }
    handleShowHide(){
        if(this.state.isShowListUser){
            this.setState(
                {
    
                    isShowListUser:false

                    
                }
            )
        }
        else {
            this.setState(
                {
    
                    isShowListUser:true
                    
                }
            )
        }
       
    }
    render(){
    const {listUsers}=this.props;
  
        return(
            
            <div>
                <div>
                    <span onClick={ ()=>this.handleShowHide()}>{this.state.isShowListUser?'Ẩn danh sách':'Hiển thị danh sách'}</span>
                </div>
                
                {this.state.isShowListUser&&
                 <div>
                 {listUsers.map((user,index)=>{
                     
                    
                     return(
                         <div key={user.id} className={+user.age>18?'green':'red'}>
                         <div>Name: {user.name}</div>
                         <div>age: {user.age}</div>
                         <hr></hr>
                         </div>
                         
 
                     )
       
                
 
             })}
                 </div>
                 }
                
                   
      
            
                
                
            </div>
         


        );
    }
}
export default DisplayInfor;