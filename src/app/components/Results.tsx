import Card from "./Card";
import { UserData } from "../types/userType";

interface ResultsProps {
  data: UserData[] | null;
}

export default function Results({ data }: ResultsProps) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {data && data.map((i) => <Card key={i.id} data={i} />)}
    </div>
  );
}
