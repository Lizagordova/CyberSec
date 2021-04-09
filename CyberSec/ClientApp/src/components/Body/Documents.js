import React, { Component } from 'react';
import { Button, Label } from "reactstrap";

class Documents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            documents: [
                {id: 1, name: "Договор об аренде", src: "https://drive.google.com/file/d/1VzhgnaXh0842c3NRWtXZJbLahvzIO2aU/preview"},
                {id: 2, name: "Учредительный договор", src: "https://drive.google.com/file/d/1xBppaPU8K1uH00nPKzdHL3s3_SzoCXt1/preview"},
                {id: 3, name: "Заявление о приеме на работу", src: "https://drive.google.com/file/d/1jd1nnlt4VpWx5I6bQkZ-Ffp-3Lq0Eyr3/preview"},
                {id: 4, name: "Заявление о представлении отпуска", src: "https://drive.google.com/file/d/1eN_vhTAno3uk6dn02zCEFOe_GX5xanXI/preview"},
                {id: 5, name: "Договор на производство работ (оказание услуг)", src: "https://drive.google.com/file/d/1a4g-PiqVSl7qvcxHEUmRVZxealDpIbrc/preview"},
            ],
            choosenDocument: 0
        }
    }
    
    renderDocumentsButtons() {
        return (
            <div className="row justify-content-center" style={{marginTop: "2%"}}>
                {this.state.documents.map((d) => {
                    return (
                        <Button
                            key={d.id}
                            outline
                            style={{marginLeft: "10px", width: "15%"}}
                            className="documentButton"
                            onClick={() => this.chooseDocument(d)}>
                            {d.name}
                        </Button>
                    );
                })}
            </div>
        );
    }

    renderChoosenDocument(document) {
        return (
            <div className="row justify-content-center" style={{marginTop: "2%"}}>
                <iframe className="documentReview" key={document.id} src={document.src}/>
            </div>
        );
    }
    
    renderTitle() {
        return (
            <div className="row justify-content-center" style={{marginTop: "2%"}}>
                <Label className="title">Организационно-распорядительные документы</Label>
            </div>
        );
    }

    chooseDocument(document) {
        this.setState({choosenDocument: document});
    }

    render() {
        return(
            <>
                {this.renderTitle()}
                {this.renderDocumentsButtons()}
                {this.state.choosenDocument !== 0 && this.renderChoosenDocument(this.state.choosenDocument)}
            </>
        );
    }
}

export default Documents;