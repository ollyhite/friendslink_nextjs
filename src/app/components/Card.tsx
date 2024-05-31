import Link from "next/link";
import Image from "next/image";
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
          <h2 className="truncate text-lg font-bold">{data.first_name}</h2>
          <h2 className="truncate text-lg font-bold">{data.last_name}</h2>
        </div>
      </Link>
    </div>
  );
}
