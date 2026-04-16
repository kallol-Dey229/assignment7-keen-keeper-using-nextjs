"use client";

import React, { useContext } from 'react';
import { Pie, PieChart, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FriendsContext } from './FriendsContext';

const StartsPieChart = () => {
    const { callStatus, messageStatus, videoCallStatus = [] } = useContext(FriendsContext);

    const data = [
        { name: "Call", value: callStatus.length, fill: "#14532d" },
        { name: "Text", value: messageStatus.length, fill: "#7c3aed" },
        { name: "Video Call", value: videoCallStatus.length, fill: "#22c55e" },
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
                        />

                        <Tooltip />
                        <Legend iconType="circle" />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default StartsPieChart;