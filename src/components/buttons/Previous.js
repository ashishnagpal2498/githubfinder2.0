import React, {Component} from 'react';

class Previous extends Component {
    prevClick = ()=>{
        this.props.prevClick("minus");
    }
    render() {
        return (
            <React.Fragment>
                <button className="btn btn-primary"  style={{marginLeft:"53%"}} onClick={this.prevClick}>PREVIOUS</button>
            </React.Fragment>
        );
    }
}

export default Previous;