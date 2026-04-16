'use client'
import Image from 'next/image';
import { useContext } from 'react';
import { LuArchive, LuPhoneCall, LuTrash, LuVideo } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import { RiNotificationSnoozeLine } from 'react-icons/ri';
import { FriendsContext } from './FriendsContext';


const FriendsDetailsCard = ({ friend }) => {
    const { id, name, picture, days_since_contact, tags, status, bio, email, goal, next_due_date } = friend;
    const { handleCall, handleMessage, handleVideoCall } = useContext(FriendsContext);
    return (
        <div className="grid grid-cols-3 mt-20 gap-10 mx-65 h-full">
            <div className="space-y-2 col-span-1 left ">
                <div className="card bg-base-100 shadow-sm">
                    <figure className="px-10 pt-10">
                        <Image
                            src={picture}
                            alt={name}
                            width={100}
                            height={100}
                            className="rounded-full"
                            unoptimized
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>

                        <p className={`text-white font-semibold px-4 py-1 flex items-center rounded-full ${status === "overdue" ? "bg-red-700" :
                            status === "almost due" ? "bg-yellow-700" :
                                "bg-green-700"
                            }`}>
                            {status}
                        </p>

                        <p className="flex gap-2">{tags.map((tag) => (
                            <span key={tag} className="bg-green-100 text-[11px] font-semibold text-green-700 px-2 py-1 flex  items-center rounded-full">
                                {tag}
                            </span>
                        ))}</p>

                        <p className="text-gray-800 text-sm">{bio}</p>
                        <p className="text-gray-600 text-sm">{email}</p>



                    </div>
                </div>
                <p className="bg-base-100 shadow-sm p-2 flex items-center justify-center gap-1 font-bold"><RiNotificationSnoozeLine /> Snooze for 2 Weeks</p>

                <p className="bg-base-100 shadow-sm p-2 flex items-center justify-center gap-1 font-bold"><LuArchive /> Archive</p>

                <p className="bg-base-100 shadow-sm p-2 flex items-center justify-center gap-1 font-bold text-red-500"><LuTrash /> Delete</p>
            </div>

            <div className="right col-span-2 space-y-13">
                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-base-100 shadow-sm p-5 text-center">
                        <h2 className="font-bold text-green-950 text-2xl">{days_since_contact}</h2>
                        <p>Days Since Contact</p>
                    </div>
                    <div className="bg-base-100 shadow-sm p-5 text-center">
                        <h2 className="font-bold text-green-950 text-2xl">{goal}</h2>
                        <p>Goal(Days)</p>
                    </div>
                    <div className="bg-base-100 shadow-sm p-5 text-center">
                        <h2 className="font-bold text-green-950 text-2xl">{next_due_date}</h2>
                        <p>Next Due</p>
                    </div>
                </div>


                <div className="bg-base-100 shadow-sm p-7 mt-4 space-y-2">
                    <div className="flex justify-between">
                        <h3 className="font-semibold text-green-800 text-xl">Relationship Goal</h3>
                        <p className="btn btn-sm">Edit</p>
                    </div>
                    <p>Connect every <span className="font-bold">{goal} days</span></p>
                </div>

                <div>
                    <div className="bg-base-100 shadow-sm p-8 mt-4 space-y-4">
                        <h2 className="font-semibold">Quick Check-In</h2>
                        <div className="grid grid-cols-3 gap-2">
                            <div onClick={() => handleCall({
                                id,
                                name,
                                type: "Call",
                                time: new Date().toLocaleString()
                            })}
                             className="bg-base-100 shadow-md p-4 text-center">
                                <p className="flex justify-center mb-4 text-2xl"><LuPhoneCall /></p>
                                <h2>Call</h2>
                            </div>
                            <div 
                            onClick={() => handleMessage({
                                id,
                                name,
                                type: "Text",
                                time: new Date().toLocaleString()
                            })}
                            className="bg-base-100 shadow-md p-4 text-center">
                                <p className="flex justify-center mb-4 text-2xl"><MdOutlineTextsms /></p>
                                <h2>Text</h2>
                            </div>
                            <div 
                            onClick={() => handleVideoCall({
                                id,
                                name,
                                type: "Video Call",
                                time: new Date().toLocaleString()
                            })}
                            className="bg-base-100 shadow-md p-4 text-center">
                                <p className="flex justify-center mb-4 text-2xl"><LuVideo /></p>
                                <h2>Video Call</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FriendsDetailsCard;