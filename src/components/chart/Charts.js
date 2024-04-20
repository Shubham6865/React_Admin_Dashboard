import './Charts.scss';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: "January", Total: 1200, Users: 1800 },
    { name: "February", Total: 2100, Users: 2500 },
    { name: "March", Total: 800, Users: 200 },
    { name: "April", Total: 1600, Users: 2000 },
    { name: "May", Total: 900, Users: 400 },
    { name: "June", Total: 1100, Users: 1700 },

];


const Charts = ({ aspect, title }) => {
    return (
        <div className='chart'>
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#84d888" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#84d888" stopOpacity={0} />
                        </linearGradient>
                        {/* <linearGradient id="users" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient> */}
                    </defs>
                    <XAxis dataKey="name" stroke='gray' />
                    {/* <YAxis /> */}
                    <CartesianGrid strokeDasharray="3 3" className='chartsGrid' />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                    {/* <Area type="monotone" dataKey="Users" stroke="#82ca9d" fillOpacity={1} fill="url(#users)" /> */}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Charts
