"use client";

import { useEffect, useState } from "react";
import Results from "./components/Results";
import { UserData } from "./types/userType";

export default function Home() {
  const [data, setData] = useState<UserData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = process.env.NEXT_APP_SERVER || "http://localhost:3000";
        const response = await fetch(`${url}/api/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const { data } = await response.json();
        console.log("AllUsers", data);
        setData(data);
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch users data");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center">
      {data && data.length > 0 ? (
        <Results data={data} />
      ) : (
        <p className="text-3xl">Loading...</p>
      )}
    </div>
  );
}
