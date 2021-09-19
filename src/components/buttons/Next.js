import React, { Component } from 'react';

class Next extends Component {
	nextClick = () => {
		this.props.nextClick("plus");
	}
	render() {
		return (
			<React.Fragment >
				<button style={{ float: "right" }} className="btn btn-success" onClick={this.nextClick}>NEXT</button>
			</React.Fragment>
		);
	}
}

export default Next;