
import FriendsCard from '../../components/FriendsCard';

const FriendsData = async () => {
    const res = await fetch('http://localhost:3000/friends.json');
    const friends = await res.json();
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:mx-30 lg:mx-65 md:mt-20 mt-5">
            {
                friends.map(friend => <FriendsCard key={friend.id} friend={friend}></FriendsCard>)
            }
        </div>
    );
};

export default FriendsData;