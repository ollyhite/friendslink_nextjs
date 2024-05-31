"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { UserData, UserPageProps } from "../../types/userType";
import SmallCard from "@/app/components/SmallCard";

export default function UserPage({ params }: UserPageProps) {
  const [data, setData] = useState<UserData | null>(null);
  const [error, setError] = useState<Error | null>(null);

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

  if (error) {
    throw error;
  }

  return (
    <div className="w-full mt-10 flex items-center justify-center">
      <div>
        {data ? (
          <>
            <div className="p-4 md:pt-8 flex justify-end md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
              <Link
                href={`/`}
                className="text-amber-600 font-bold flex items-center"
              >
                <FaArrowLeft />
                <p className="ml-2">Back</p>
              </Link>
            </div>
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
                <div className="flex flex-col">
                  <span className="font-semibold mr-1">Connections:</span>
                  <div className="flex mt-4 items-end">
                    {data.friends &&
                      data.friends
                        .slice(0, 5)
                        .map((i) => <SmallCard key={i.id} data={i} />)}
                    {data.friends && data.friends.length > 5 && (
                      <span>+ ... more</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-3xl">Loading...</div>
        )}
      </div>
    </div>
  );
}
