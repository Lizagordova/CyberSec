import React, { Component, PureComponent } from 'react';
import { Label } from "reactstrap";
import { Line, LineChart, XAxis, CartesianGrid, Tooltip, Legend, YAxis } from "recharts";


const data02 = [
    { name: 'Клиентские базы данных', value: 2400 },
    { name: 'Продажа сведений о клиентах на чёрном рынке информации', value: 4567 },
    { name: 'Стратегии развития', value: 1398 },
    { name: 'Бизнес-планы', value: 9800 },
    { name: 'Патенты и ноу-хау', value: 3908 },
    { name: 'Финансовая и бухгалтерская информация', value: 4800 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const data = [
    { name: 'Welcoming etiquette', zhn: 25, ag: 24, dp: 20, hs: 35, ms: 55 },
    { name: 'Talking with clients', zhn: 47, ag: 51, dp: 43, hs: 55, ms: 60 },
    { name: 'Email communication', zhn: 60, ag: 65, dp: 57, hs: 66, ms: 65 },
    { name: 'Talking with colleagues/partners', zhn: 63, ag: 75, hs: 69, dp: 69, ms: 73 },
    { name: 'Presentation and argumentation', zhn: 68, ag: 79, dp: 75, hs: 78, ms: 78},
    { name: 'Business trips', zhn: 73, ag: 82, dp: 83, hs: 85, ms: 83 },
];
class Home extends Component {
    renderSecurityObjects() {
        console.log("data01", data02);
        return (
            <>
                <div className="row justify-content-center">
                    <Label style={{fontSize: "1.2em"}}>Объекты охраны</Label>
                </div>
                <div className="row justify-content-center">
                    <LineChart
                        width={1500}
                        height={800}
                        data={data}
                        margin={{ top: 5, bottom: 400, left: 30 }}
                    >
                        <Legend verticalAlign="top" height={60} iconSize={20} wrapperStyle={{fontSize: "1.5em"}}/>
                        <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
                        <YAxis type="number" domain={[0, 100]} />
                        <Tooltip />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Line type="monotone" dataKey="zhn" name="Студент А" stroke="#ff7300" activeDot={{ r: 15 }} strokeWidth={5} />
                        <Line type="monotone" dataKey="ag" name="Студент B" stroke="#387908" activeDot={{ r: 15 }} strokeWidth={5} />
                        <Line type="monotone" dataKey="dp" name="Студент C" stroke="#CD5C5C" activeDot={{ r: 15 }} strokeWidth={5} />
                        <Line type="monotone" dataKey="hs" name="Студент D" stroke="black" activeDot={{ r: 15 }} strokeWidth={5} />
                        <Line type="monotone" dataKey="ms" name="Студент E" stroke="#FF4500" activeDot={{ r: 15 }} strokeWidth={5} />
                    </LineChart>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-3">
                    {this.renderSecurityObjects()}
                </div>
            </div>
        );
    }
}

export default Home;

class CustomizedAxisTick extends PureComponent {
    render() {
        // @ts-ignore
        const { x, y, stroke, payload } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-73)" fontSize="1.8em">
                    {payload.value}
                </text>
            </g>
        );
    }
}