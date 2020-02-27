import React, {Component} from 'react';
import PropTypes from 'prop-types'
class UserItem extends Component {
    userClicked = ()=>{
        this.props.userClicked(this)
        this.props.getUserRepos(this.props.user.login)
    }
    render() {
        const {user} = this.props

        return (
            <React.Fragment>
                {/*{this.props.userId && this.props.userId=== user.id &&}*/}
                <li my-id={this.props.index} className={this.props.userId=== user.id ? "user-list-item active" : "user-list-item"} onClick={this.userClicked} >
                   <div className="list-item-div">
                       <div className="list-item-div-image"> <img src={user.avatar_url} alt=""/></div>
                        <p>{user.login}</p>
                   </div>
                </li>
            </React.Fragment>
        );
    }
}
UserItem.propTypes ={
    userClicked: PropTypes.func.isRequired,
}
export default UserItem;