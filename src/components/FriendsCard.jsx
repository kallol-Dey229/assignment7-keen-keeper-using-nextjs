import Image from "next/image";

const FriendsCard = ({ friend }) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="px-10 pt-10">
                <Image
                    src={friend.picture}
                    alt={friend.name}
                    width={100}
                    height={100}
                    className="rounded-full"
                    unoptimized 
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{friend.name}</h2>
                
            </div>
        </div>
    );
};

export default FriendsCard;