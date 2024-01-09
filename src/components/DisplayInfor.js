import React  from "react";


class DisplayInfor extends React.Component{

    render(){
    const {listUsers}=this.props;
  
        return(
            <div>
                {listUsers.map((user,index)=>{
                    return(
                        <div key={user.id}>
                        <div>Name: {user.name}</div>
                        <div>age: {user.age}</div>
                        </div>
                  

                    )

                })}
            </div>
         


        );
    }
}
export default DisplayInfor;