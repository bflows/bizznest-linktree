import { MapPin } from "lucide-react"

export default function Tag() {
  return (
    <div className="mt-2 flex items-center gap-x-2 text-brand400">
      <MapPin className="size-5.25" />
      <p className="text-small">Modesto, CA</p>
    </div>
  );
}