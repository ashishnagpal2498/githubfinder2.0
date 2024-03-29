import React, {Component} from 'react';
import PropTypes from "prop-types"

const WAIT_INTERVAL = 1000;

class Search extends Component {
    state = {
        text: ""
    }
    componentWillMount() {
        this.timer = null;
    }
    static propTypes = {
        searchUser : PropTypes.func.isRequired,
        users: PropTypes.array.isRequired,
    }

    triggerChange= ()=> {
        this.props.searchUser(this.state.text)
    }
    onHandler = (event)=> {
        clearTimeout(this.timer);
        this.setState({[event.target.name]: event.target.value})
        //    Timer
        this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);

    }

    // onSubmit = (ev)=>{
    //     ev.preventDefault();
    //
    // }
    //clear Users
    clearUsers = ()=>{
        this.props.clearUser()

    }
    render() {
        const {users} = this.props;
        return (
            <div>
                <form className="form">
                    <input type={"text"} className="my-input" name="text" placeholder="Search Here" value={this.state.text} onChange={this.onHandler}/>
                    {/*<input type={"submit"} className={"btn btn-dark btn-block"} style={{display:"block"}}/>*/}
                </form>
                {users.length>0 && <button onClick={this.clearUsers} className={"btn btn-light btn-block"}>Clear</button> }

            </div>

        );
    }
}

export default Search;