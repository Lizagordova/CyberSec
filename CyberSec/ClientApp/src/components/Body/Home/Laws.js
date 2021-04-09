import React, { Component } from 'react';
import { Button, Label } from "reactstrap";
import { laws } from "../../../consts/laws";

class Laws extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choosenLaw: -1
        }
    }

    chooseLaw(law) {
        this.setState({choosenLaw: law})
    }

    renderLawsButtons(laws) {
        return (
            <div className="row justify-content-center" style={{marginTop: "2%"}}>
                {laws.map(l => {
                    return (
                        <Button
                            key={l.id}
                            outline
                            style={{marginLeft: "10px", width: "15%"}}
                            className="documentButton"
                            onClick={() => this.chooseLaw(l)}
                        >
                            {l.name}
                        </Button>
                    );
                })}
            </div>
        );
    }

    renderLaw(law) {
        return (
            <>
                <div className="row justify-content-center" style={{marginTop: "2%"}}>
                    <Label className="title">
                        {law.name}
                    </Label>
                </div>
                <div className="row justify-content-center">
                    <p className="content">
                        {law.content}
                    </p>
                </div>
                <div className="row justify-content-center">
                    <a href={law.url} className="detailedButton" target="_blank">
                        Подробнее
                    </a>
                </div>
            </>
        );
    }

    render() {
        return(
            <>
                {this.renderLawsButtons(laws)}
                {this.state.choosenLaw !== -1 && this.renderLaw(this.state.choosenLaw)}
            </>
        );
    }
}

export default Laws;