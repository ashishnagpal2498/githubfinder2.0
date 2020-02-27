import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserItem from "./UserItem";
// import UserItem from "./UserItem";
class UserList extends Component {
    activeUserSelected = (listitem)=>{
        console.log("this -> ",listitem);
         this.props.activeUser(listitem.props.user,listitem.props.index)

        //this.getUserRepos(listitem.props.user)
    }
    getUserRepos = (username)=>{
        this.props.getUserRepos(username);
    }
    render() {
        const {users} = this.props
        console.log("users", users);
        if(users[0]===undefined)
        {
            return( <div className="userlist" style={{display:"flex", justifyContent:"center"}}>
                <div style={{display:"inline-block",fontSize:"24px",paddingTop:"50%",color:"grey",opacity:"0.7"}}>Search To Display</div>
            </div>)
        }
        return (
            <div className="userlist">
                <ul style={{width:"100%"}}>
                    {users.map((user,index,users)=>(
                        <UserItem index={index} key={user.id} userId={this.props.activeUserId} user={user} userClicked={this.activeUserSelected} getUserRepos={this.getUserRepos}/>
                    ))}
                </ul>
            </div>
        );
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
};

export default UserList;