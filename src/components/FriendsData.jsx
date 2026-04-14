
import FriendsCard from './FriendsCard';

const FriendsData =async () => {
    const res = await fetch('http://localhost:3000/friends.json');
    const friends = await res.json();
    return (
        <div className="grid grid-cols-4 gap-4 mx-65 mt-20">
            {friends.map(friend => <FriendsCard key={friend.id} friend={friend}></FriendsCard>)}
        </div>
    );
};

export default FriendsData;