"use client";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {

    const [callStatus, setCallStatus] = useState([]);

    const handleCall = (callData) => {
    setCallStatus((previousData) => [...previousData, callData]);
    toast.success(`Called successful with ${callData.name}`);
    };


    const [messageStatus, setMessageStatus] = useState([]);

    const handleMessage = (messageData) => {
    setMessageStatus((previousData) => [...previousData, messageData]);
    toast.success(`Message sent successful with ${messageData.name}`);
    };

    const [videoCallStatus, setVideoCallStatus] = useState([]);

    const handleVideoCall = (videoCallData) => {
    setVideoCallStatus((previousData) => [...previousData, videoCallData]);
    toast.success(`Video call successful with ${videoCallData.name}`);
    };


    const data = {
        callStatus,
        setCallStatus,
        handleCall,
        messageStatus,
        setMessageStatus,
        handleMessage,
        videoCallStatus,
        setVideoCallStatus,
        handleVideoCall
    }

    return <FriendsContext.Provider value={data}>
        {children}
        </FriendsContext.Provider>
};

export default FriendsProvider;