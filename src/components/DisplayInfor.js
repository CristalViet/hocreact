    import React  from "react";
    import './DisplayInfor.scss';
    import logo from '../logo.svg';
    class DisplayInfor extends React.Component{

        constructor(props){
            console.log(">>Call constructor :1")
            super(props)
            this.state={
             
                    isShowListUser:true
             
            }
        }
        componentDidMount(){
            console.log('>> Cal me component did mount')
            setTimeout(()=>{
                document.title='Eric & hoi dan IT'
            },3000);
        }
        componentDidUpdate(preProps,preState,snapshot){
            console.log('>> Call me did update')
           if(this.props.listUsers!== preProps.listUsers){
            if(this.props.listUsers.length===5)
                alert('you got 5 user');
           }
        }

        handleShowHide(){
            this.setState(
                {
                    isShowListUser:!this.state.isShowListUser
                }
            )
            // if(this.state.isShowListUser){
            //     this.setState(
            //         {
        
            //             isShowListUser:false

                        
            //         }
            //     )
            // }
            // else {
            //     this.setState(
            //         {
        
            //             isShowListUser:true
                        
            //         }
            //     )
            // }
        
        }
        render(){
            console.log(">>Call me render")
        const {listUsers}=this.props;
    
            return(
                
                <div className="display-infor-container">
                    <img src={logo}/>
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
                            <button onClick={(event)=>this.props.handleDeleteUser(user)} >delete</button>
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