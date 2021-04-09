import React, { Component } from 'react';

class ObjectInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objectId: this.props.objectId
        }
    }

    renderObjectInfo() {
        return (
            <></>
        );
    }

    render() {
        return(
            <>
                {this.renderObjectInfo()}
            </>
        );
    }
}

export default ObjectInfo;