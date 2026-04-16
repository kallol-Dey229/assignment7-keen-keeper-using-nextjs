"use client";

import React, { useContext } from 'react';
import { Pie, PieChart, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FriendsContext } from './FriendsContext';

const COLORS = ["#14532d", "#7c3aed", "#22c55e"];

const StartsPieChart = () => {
    const { callStatus, messageStatus, videoCallStatus = [] } = useContext(FriendsContext);

    const data = [
        { name: "Call", value: callStatus.length },
        { name: "Text", value: messageStatus.length },
        { name: "Video Call", value: videoCallStatus.length },
    ];

    return (
        <div className="bg-base-100 shadow-sm p-6 rounded-lg w-full mt-10">
            <h2 className="mb-4 font-semibold text-lg">By Interaction Type</h2>

            <div className="w-full h-75">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={70}
                            outerRadius={100}
                            paddingAngle={4}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={index} fill={COLORS[index]} />
                            ))}
                        </Pie>

                        <Tooltip />
                        <Legend iconType="circle"/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default StartsPieChart;