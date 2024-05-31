import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className="flex justify-between items-center mx-2 max-w-6xl sm:mx-auto py-6">
      <div className="flex ">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold py-1 px-2 rounded-lg mr-1">
              FriendsLink
            </span>
          </h2>
        </Link>
      </div>
      <div className="flex items-center space-x-5">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
    </div>
  );
}
