import FriendsData from "@/app/friends/page";
import { FaPlus } from "react-icons/fa";

export const metadata = {
    title: 'Home',
    description: 'This is the home page'
};

export default async function Home() {


  const res = await fetch('https://assignment7-keen-keeper-using-nextj.vercel.app/friends.json',{cache: 'no-store'});
  const friends = await res.json();



  return (
    <div>
      <div className="mx-5 md:mx-50 lg:mx-90 mt-20 space-y-4">
        <h2 className="text-5xl font-bold text-center">Friends to keep close in your life</h2>
        <p className="text-center text-gray-700 md:pr-30 md:pl-30">Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.</p>
        <div className="flex justify-center">
          <button className="text-white btn bg-green-900 p-2 flex gap-2 items-center rounded-sm"><FaPlus /> Add a friend</button>
        </div>
      </div>

      <div className="grid grid-cols-2 mx-5 md:grid-cols-3 lg:grid-cols-4 gap-4 md:mx-65 mt-20">
        <div className="p-7 bg-gray-100 rounded-lg shadow-sm text-center">
          <h3 className="text-2xl font-bold">{friends.length}</h3>
          <p className="text-gray-700">Total Friends</p>
        </div>
        <div className="p-7 bg-gray-100 rounded-lg shadow-sm text-center">
          <h3 className="text-2xl font-bold">{friends.filter(friend => friend.status === 'on-track').length}</h3>
          <p className="text-gray-700">On Track</p>
        </div>
        <div className="p-7 bg-gray-100 rounded-lg shadow-sm text-center">
          <h3 className="text-2xl font-bold">{friends.filter(friend => friend.priority === 'attention needed').length}</h3>
          <p className="text-gray-700">Need Attention</p>
        </div>
        <div className="p-7 bg-gray-100 rounded-lg shadow-sm text-center">
          <h3 className="text-2xl font-bold">{friends.filter(friend => friend.days_since_contact <= 30).length}</h3>
          <p className="text-gray-700">Interactions This Month</p>
        </div>
      </div>
      <hr className="my-5 mx-5 md:my-20 text-gray-200 md:mx-30 lg:mx-65" />

      <div>
        <h2 className="text-xl font-bold md:mx-30 mx-5 lg:mx-65">Your Friends</h2>



        <FriendsData></FriendsData>



      </div>
    </div>
  );
}
