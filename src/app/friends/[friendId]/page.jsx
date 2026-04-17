
import FriendsDetailsCard from "@/components/FriendsDetailsCard";

export const metadata = {
    title: 'Friends Details',
    description: 'This is the friends details page'
};


const FriendsDetails = async ({ params }) => {
    const { friendId } = await params;

    const res = await fetch('https://assignment7-keen-keeper-using-nextj.vercel.app//friends.json',{cache: 'no-store'});
    const friends = await res.json();
    const friend = friends.find((f) => f.id === parseInt(friendId));

    
    
    

    return (
        <FriendsDetailsCard friend={friend}></FriendsDetailsCard>
    );
};

export default FriendsDetails;