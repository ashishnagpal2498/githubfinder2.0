import React, {Component} from 'react';

class Previous extends Component {
    prevClick = ()=>{
        this.props.prevClick("minus");
    }
    render() {
        return (
            <React.Fragment>
                <button className="btn btn-primary" onClick={this.prevClick}>PREVIOUS</button>
            </React.Fragment>
        );
    }
}

export default Previous;