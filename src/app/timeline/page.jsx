'use client';
import { FriendsContext } from "@/components/FriendsContext";
import TimelineCallCard from "@/components/TimelineCallCard";
import TimelineMessageCard from "@/components/TimelineMessageCard";
import TimelineVideoCallCard from "@/components/TimelineVideoCallCard";
import { useContext } from "react";

const TimelinePage = () => {
    const {callStatus, messageStatus, videoCallStatus, filteredTimeline, setFilter, filter} = useContext(FriendsContext);
    return (
        <div className="mx-65 mt-20">
        <h1 className="text-4xl font-bold mb-5">Timeline</h1>
        <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border border-gray-200 shadow-sm w-50 p-2"
            >
                <option value="" disabled>Filter timeline</option>
                <option value="Call">Call</option>
                <option value="Text">Text</option>
                <option value="Video Call">Video Call</option>
            </select>

            {filteredTimeline.map((item, index) => (
                item.type === "Call"
                    ? <TimelineCallCard key={index} data={item} />
                    : item.type === "Text"
                        ? <TimelineMessageCard key={index} data={item} />
                        : item.type === "Video Call"
                            ? <TimelineVideoCallCard key={index} data={item} />
                            : ""
            ))}

        {callStatus.map((item, index) => (
            <TimelineCallCard key={index} data={item} />
        ))}

        {messageStatus.map((item, index) => (
            <TimelineMessageCard key={index} data={item} />
        ))}
        {videoCallStatus.map((item, index) => (
            <TimelineVideoCallCard key={index} data={item} />
        ))}
    </div>
    );
};

export default TimelinePage;


