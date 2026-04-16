'use client';
import { FriendsContext } from "@/components/FriendsContext";
import StartsPieChart from "@/components/StartsPieChart";
import { useContext } from "react";

const StartsPage = () => {
    const { callStatus, messageStatus, videoCallStatus = [] } = useContext(FriendsContext);
    return (
        <div className="mx-5 md:mx-30 lg:mx-65 mt-20">
            <h1 className="text-4xl md:text-5xl font-bold">Friendship Analytics</h1>
            {callStatus.length === 0 && messageStatus.length === 0 && videoCallStatus.length === 0 ? (
                <div className="border border-gray-200 shadow-sm mt-20 py-40 rounded-lg mb-20">
                    <p className="text-gray-500 flex justify-center items-center ">No interactions yet. Start connecting with your friends!</p>
                </div>
            ) : (
                <StartsPieChart></StartsPieChart>
            )}
        </div>
    );
};

export default StartsPage;