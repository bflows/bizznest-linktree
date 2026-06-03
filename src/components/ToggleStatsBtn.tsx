import { ChartLine } from "lucide-react";

export default function ToggleStatsBtn() {
  return (
    <div className="absolute top-5 right-6 p-2 rounded-full w-fit bg-brand950">
      <ChartLine className="size-5.25 text-brand200" />
    </div>
  );
}