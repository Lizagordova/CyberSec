import React, { Component } from 'react';
import {Label} from "reactstrap";
import {Pie, PieChart, Tooltip} from "recharts";
import ObjectInfo from "./ObjectInfo";

const data = [
    { name: 'Клиентские базы данных', value: 34, id: 1 },
    { name: 'Продажа сведений о клиентах на чёрном рынке информации', value: 23, id: 2 },
    { name: 'Стратегии развития', value: 20, id: 3 },
    { name: 'Бизнес-планы', value: 19, id: 4 },
    { name: 'Патенты, ноу-хау, интеллектуальная собественность', value: 18, id: 5 },
    { name: 'Кредитные карты, финансовая и бухгалтерская информация', value: 17, id: 6 },
    { name: 'Персональные данные', value: 17, id: 7 }
];

class SecurityObjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choosenObject: -1
        }
    }

    chooseObject(objectId) {
        this.setState({choosenObject: objectId});
    }

    renderSecurityObjects() {
        return (
            <>
                <div className="row justify-content-center">
                    <Label style={{fontSize: "1.2em"}}>Объекты охраны</Label>
                </div>
                <div className="row justify-content-center">
                    <PieChart width={1000} height={400} style={{marginLeft: "400px"}}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={data}
                            cx={300}
                            cy={150}
                            outerRadius={120}
                            fill="#8884d8"
                            label
                            onClick={(e) => this.chooseObject(e.id)}
                        />
                        <Tooltip />
                    </PieChart>
                </div>
            </>
        );
    }

    render() {
        return (
            <>
                <div className="col-4">
                    {this.renderSecurityObjects()}
                </div>
                <div className="col-8">
                    {this.state.choosenObject !== -1 && <ObjectInfo objectId={this.state.choosenObject} />}
                </div>
            </>
        );
    }
}

export default SecurityObjects;