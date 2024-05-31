"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { UserData, UserPageProps } from "../../types/userType";

export default function UserPage({ params }: UserPageProps) {
  const [data, setData] = useState<UserData | null>(null);

  useEffect(() => {
    const userId = parseInt(params.id);
    console.log("userId", userId);

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/user?id=${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const { data } = await response.json();
        console.log("user", data);
        setData(data);
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch user data");
      }
    };
    fetchData();
  }, [params.id]);

  console.log("user data", data);

  return (
    <div className="w-full">
      {data ? (
        <>
          <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
            <Image
              src={data.user_pic}
              width={500}
              height={300}
              className="rounded-lg"
              alt="User pic"
              priority={true}
            />
            <div className="p-2 mx-auto md:space-x-6">
              <h2 className="text-3xl mb-3 font-bold">{`${data.first_name} ${data.last_name}`}</h2>
              <p className="text-lg mb-3">
                <span className="font-semibold mr-1">Country:</span>
                {data.country}
              </p>
              <p className="text-lg mb-3">
                <span className="font-semibold mr-1">City:</span>
                {data.city}
              </p>
              <p className="text-lg mb-3">
                <span className="font-semibold mr-1">Gender:</span>
                {data.gender}
              </p>
              <p className="text-lg mb-3">
                <span className="font-semibold mr-1">Email:</span>
                {data.email}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="p-4 md:pt-8 max-w-6xl mx-auto md:space-x-6">
          Loading...
        </div>
      )}
    </div>
  );
}
