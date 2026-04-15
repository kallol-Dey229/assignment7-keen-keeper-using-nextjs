import Image from "next/image";
import Link from "next/link";

const FriendsCard = ({ friend }) => {
    const { id, name, picture, days_since_contact, tags, status } = friend;

    return (
        <Link href={`/friends/${id}`}>
            <div className="card bg-base-100 shadow-sm cursor-pointer hover:shadow-md transition">
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

                    <p className="text-gray-600">
                        {days_since_contact}d ago
                    </p>

                    <div className="flex gap-2 flex-wrap justify-center">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-green-100 text-[11px] font-semibold text-green-700 px-2 py-1 flex items-center rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p
                        className={`text-white font-semibold px-4 py-1 flex items-center rounded-full ${
                            status === "overdue"
                                ? "bg-red-700"
                                : status === "almost due"
                                ? "bg-yellow-700"
                                : "bg-green-700"
                        }`}
                    >
                        {status}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default FriendsCard;