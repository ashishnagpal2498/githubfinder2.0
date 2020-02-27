import React from 'react';
import './App.css';
import './my_Style_Sheet.css'
import Search from "./components/Search";
import axios from "axios"
import UserList from "./components/User/UserList";
import UserDisplay from "./components/User/UserDisplay";
import Next from "./components/buttons/Next";
import Previous from "./components/buttons/Previous";
import Navbar from "./components/layout/Navbar";
class App extends React.Component {
  state ={
    users: [],
      length:-1,
      activeUserIndex:undefined,
    loading: false,
    activeUser: undefined,
    nextUser:null,
    userRepos:null,
      activeUserId:null
  }
  //Search Users
  searchUser = async (text)=>{
    this.setState({loading:true})
    this.setState({users:[]})
    console.log(text);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      console.log("Client Id",process.env.REACT_APP_GITHUB_CLIENT_ID)
    console.log(res.data);
    this.setState({users:res.data.items})
    this.setState({loading:false})
      this.setState({length:res.data.items.length})
      this.setState({activeUser:res.data.items[0]})
      this.setState({
          activeUserIndex:0,
          activeUserId: res.data.items[0].id
      })
      this.getUserRepos(res.data.items[0].login)
      this.activeUser(res.data.items[0],0)
  }
  //Clear Users
  clearUser = ()=>{
    this.setState({users:[],
        length:-1,
        activeUserIndex:undefined,
    })
      this.setState({activeUser:undefined})

  }
  activeUser = async (userId,index)=>{
      this.setState({loading:true})
    console.log("UserId is ",userId);
      const res = await axios.get(`https://api.github.com/users/${userId.login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      console.log(res)
      this.setState({activeUser:res.data})
      this.setState({loading:false})
      this.setState({activeUserId:userId.id})
      this.setState({activeUserIndex:index})
  }
  getUserRepos =  async (username)=>{
      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=create:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      console.log('Repos',res)
      this.setState({userRepos:res.data})
  }
  nextClick = async (nextOrprev) => {
      //change the active user-

     await this.setState((prevState,props)=>{

          const newStateIndex = nextOrprev==="plus" ? prevState.activeUserIndex+1: prevState.activeUserIndex-1;
          return( {activeUserIndex : newStateIndex,
          activeUser : prevState.users[newStateIndex],
          activeUserId : prevState.users[newStateIndex].id
          }
      )})
      this.getUserRepos(this.state.activeUser.login)
      this.activeUser(this.state.activeUser,this.state.activeUserIndex)
    console.log('hello')
  }

  render () {

   return(
       <div>
           <Navbar/>
           <div className="App my-container">
               <Search searchUser={this.searchUser} users={this.state.users} clearUser={this.clearUser}/>
               <UserList users={this.state.users} loading={this.state.loading} activeUserId={this.state.activeUserId} activeUser={this.activeUser} getUserRepos={this.getUserRepos}/>
               <UserDisplay user={this.state.activeUser} repos={this.state.userRepos} />
               <div className="btn-settings">
               { this.state.activeUserIndex !==undefined&& this.state.length!==-1 && this.state.length>1 && this.state.activeUserIndex!==(this.state.length-1) &&
               <Next nextClick={this.nextClick}/>
               }
               {this.state.activeUserIndex!==undefined && this.state.activeUserIndex!==0 &&
               <Previous prevClick = {this.nextClick}/>}
               </div>
           </div>
       </div>

   )}
}

export default App;
