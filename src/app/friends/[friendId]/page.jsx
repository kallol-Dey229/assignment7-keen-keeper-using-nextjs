
import FriendsDetailsCard from "@/components/FriendsDetailsCard";


const FriendsDetails = async ({ params }) => {
    const { friendId } = await params;

    const res = await fetch('assignment7-keen-keeper-using-nextj.vercel.app/friends.json',{cache: 'no-store'});
    const friends = await res.json();
    const friend = friends.find((f) => f.id === parseInt(friendId));

    
    
    

    return (
        <FriendsDetailsCard friend={friend}></FriendsDetailsCard>
    );
};

export default FriendsDetails;