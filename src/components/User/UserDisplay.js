import React, {Component,Fragment} from 'react';
import Repos from "../Repos/Repos";
import PropTypes from 'prop-types'
import Spinner from "../layout/Spinner";
class UserDisplay extends Component {

    render() {
        if(this.props.loading) return <Spinner/>
        if(this.props.user===undefined) return null;
        const {name,company,avatar_url,location,bio,blog,login,html_url,followers,following,public_repos,public_gists} = this.props.user
        const {repos} = this.props

        return (
            <Fragment>
                    <div className="card all-center">
                        <div className="all-center">
                            <div> <img src={avatar_url} className={"round-img"} alt={"Profile"} style={{width:"70px"}}/></div>
                            <div >
                                <h3>{name}</h3>
                                <p>{location}</p>
                          </div>
                        </div>
                        <div>
                            {bio && <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>}
                            <a href={html_url} className={"btn btn-dark my-1"}>Visit Gihub Profile </a>
                            {/*Now comes the - Username - Company and Blog*/}
                            <ul>
                                <li>
                                    {login && <Fragment>
                                        Username : {login}
                                    </Fragment>}
                                </li>
                                <li>
                                    {company && <Fragment>
                                        Company : {company}
                                    </Fragment>}
                                </li>
                                <li>
                                    {blog && <Fragment>
                                        Website : {blog}
                                    </Fragment>}
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="card text-center">
                        <div className="badge badge-primary">Followers: {followers}</div>
                        <div className="badge badge-success">Followings: {following}</div>
                        <div className="badge badge-dark">Public Repos :{public_repos}</div>
                        <div className="badge badge-light">Public Gists {public_gists}</div>
                    </div>
                <div className="card">
                    <Repos repos={repos}/>
                </div>
            </Fragment>
        );
    }
}
UserDisplay.propTypes = {
    user: PropTypes.object,
}
export default UserDisplay;