import React, { Component } from 'react';
import { objectsDetailed } from "../../../consts/objectsDetailed";
import { Label } from "reactstrap";

class ObjectInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentObject: this.getObject()
        };
    }

    getObject() {
        return objectsDetailed.find(o => o.id === this.props.objectId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.objectId !== this.props.objectId) {
            let object = this.getObject();
            this.setState({currentObject: object});
        }
    }

    renderProtectionWays(object) {
        let protectionWays = object.protectionWays;
        if(protectionWays !== undefined) {
            return (
                <>
                    <div className="row">
                        <Label style={{fontSize: "1.8em"}}>
                            Способы защиты:
                        </Label>
                    </div>
                <div className="row">
                    <ul>
                    {protectionWays.map(w => {
                        return (
                            <li>
                                {w.name}
                            </li>
                        );
                    })}
                    </ul>
                </div>
                </>
            );
        }
    }

    renderName(object) {
        return(
            <div className="row justify-content-center">
                <Label style={{fontSize: "2em", textAlign: "center"}}><b>{object.name}</b></Label>
            </div>
        );
    }

    renderDefinition(object) {
        let definition = object.definition;
        if(definition !== undefined) {
            return(
                <div className="row justify-content-center">
                    <p>
                        {definition}
                    </p>
                </div>
            );
        }
    }

    renderExamples(type) {
        let examples = type.examples;
        if(examples !== undefined) {
            return (
                <div className="row">
                    <ul>
                        {examples.map(e => {
                            return (
                                <li>{e}</li>
                            );
                        })}
                    </ul>
                </div>
            );
        }
    }

    renderTypes(object) {
        let types = object.types;
        if(types !== undefined) {
            return(
                <>
                    <div className="row">
                        <Label style={{fontSize: "1.8em"}}>
                            Типы:
                        </Label>
                    </div>
                    {types.map(type => {
                        return (
                            <>
                                <div className="row justify-content-center">
                                    {type.type}
                                </div>
                                {this.renderExamples(type)}
                            </>
                        );
                    })}
                </>
            );
        }
    }

    renderObjectInfo(object) {
        return (
            <>
                {this.renderName(object)}
                {this.renderDefinition(object)}
                {this.renderTypes(object)}
                {this.renderProtectionWays(object)}
            </>
        );
    }

    render() {
        return(
            <>
                {this.renderObjectInfo(this.state.currentObject)}
            </>
        );
    }
}

export default ObjectInfo;