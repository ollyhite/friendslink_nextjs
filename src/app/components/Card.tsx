import Link from "next/link";
import Image from "next/image";
import { MdLocationCity } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { UserData } from "../types/userType";

interface CardProps {
  data: UserData;
}

export default function Card({ data }: CardProps) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-500 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/user/${data.id}`}>
        <Image
          src={data.user_pic}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          width={500}
          height={300}
          alt="User's picture is not available"
          priority={true}
        />
        <div className="mt-3">
          <h2 className="truncate text-lg font-bold">
            {data.first_name} {data.last_name}
          </h2>
        </div>
        <div className="flex items-center">
          <MdLocationCity />
          <p className="mr-3">{data.city}</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="mt-2 focus:outline-none text-white bg-amber-500 hover:text-amber-500 hover:bg-white focus:ring-4 focus:text-amber-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-transparent"
          >
            More
          </button>
          <div className="flex items-center">
            <FaUserFriends />
            <p className="ml-2">{data.friends.length}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
