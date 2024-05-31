import React from "react";
import { UserData } from "../types/userType";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  data: UserData;
}

const SmallCard = ({ data }: CardProps) => {
  return (
    <Link href={`/user/${data.id}`}>
      <div
        className="rounded-full bg-yellow-300 mr-5"
        style={{
          width: "50px",
          height: "50px",
        }}
      >
        <Image
          className="rounded-full object-fill"
          src={data.user_pic}
          width={100}
          height={100}
          alt="User's picture is not available"
          priority={true}
        />
      </div>
    </Link>
  );
};

export default SmallCard;
