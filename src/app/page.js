import FriendsData from "@/app/friends/FriendsData";
import { FaPlus } from "react-icons/fa";

export default function Home() {

  return (
    <div>
      <div className="mx-90 mt-20 space-y-4">
        <h2 className="text-5xl font-bold text-center">Friends to keep close in your life</h2>
        <p className="text-center text-gray-700 pr-30 pl-30">Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.</p>
          <button className="text-white btn bg-green-900 p-2 flex gap-2 items-center ml-85 rounded-sm"><FaPlus /> Add a friend</button>
      </div>

      <div className="grid grid-cols-4 gap-4 mx-65 mt-20">
        <div className="p-7 bg-gray-100 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold">10</h3>
          <p className="text-gray-700">Total Friends</p>
        </div>
        <div className="p-7 bg-gray-100 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold">3</h3>
          <p className="text-gray-700">On Track</p>
        </div>
        <div className="p-7 bg-gray-100 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold">6</h3>
          <p className="text-gray-700">Need Attention</p>
        </div>
        <div className="p-7 bg-gray-100 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold">12</h3>
          <p className="text-gray-700">Interactions This Month</p>
        </div>
      </div>
      <hr className="my-20 text-gray-200 mx-65" />

      <div>
        <h2 className="text-xl font-bold mx-65">Your Friends</h2>
        

          
         <FriendsData></FriendsData>
          

        
      </div>
    </div>
  );
}
