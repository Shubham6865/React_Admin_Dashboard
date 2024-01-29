import { Tooltip } from '@mui/material'
import React from 'react'
import { Bar, CartesianGrid, Legend, XAxis, YAxis } from 'recharts'

const BarChart = () => {
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398
        },
        // {
        //     "name": "Page C",
        //     "uv": 2000,
        //     "pv": 9800
        // },
        // {
        //     "name": "Page D",
        //     "uv": 2780,
        //     "pv": 3908
        // },
        // {
        //     "name": "Page E",
        //     "uv": 1890,
        //     "pv": 4800
        // },
        // {
        //     "name": "Page F",
        //     "uv": 2390,
        //     "pv": 3800
        // },
        // {
        //     "name": "Page G",
        //     "uv": 3490,
        //     "pv": 4300
        // }
    ]
    return (
        <div className="barChart" style={
            {
                width: '100%'
            }
        }>

            <BarChart width={70} height={20} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div>
    )
}

export default BarChart
