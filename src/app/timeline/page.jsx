'use client';
import { FriendsContext } from "@/components/FriendsContext";
import TimelineCallCard from "@/components/TimelineCallCard";
import { useContext } from "react";

const TimelinePage = () => {
    const {callStatus} = useContext(FriendsContext);
    return (
        <div className="mx-65 mt-20">
        <h1 className="text-4xl font-bold mb-5">Timeline</h1>
        <select defaultValue="" className="border border-gray-200 shadow-sm w-50 p-2">
                    <option value="" disabled>Filter timeline</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Video">Video</option>
                </select>

        {callStatus.map((item, index) => (
            <TimelineCallCard key={index} data={item} />
        ))}
    </div>
    );
};

export default TimelinePage;


