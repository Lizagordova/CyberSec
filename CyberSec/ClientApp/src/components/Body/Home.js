import React, { Component } from 'react';
import SecurityObjects from "./Home/SecurityObjects";
import PotentialThreats from "./Home/PotentialThreats";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choosenObject: -1,
            choosenThreat: -1
        }
    }

    render() {
        return (
            <>
                <div className="row justify-content-center">
                    <SecurityObjects />
                </div>
                <div className="row justify-content-center">
                    <PotentialThreats />
                </div>
            </>
        );
    }
}

export default Home;