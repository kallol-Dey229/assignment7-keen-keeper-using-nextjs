"use client";
import { createContext, useState } from "react";

export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {

    const [callStatus, setCallStatus] = useState([]);

    const handleCall = (callData) => {
    setCallStatus((previousData) => [...previousData, callData]);
    alert('successfully called');
};



    const data = {
        callStatus,
        setCallStatus,
        handleCall
    }

    return <FriendsContext.Provider value={data}>
        {children}
        </FriendsContext.Provider>
};

export default FriendsProvider;