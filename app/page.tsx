import { Button } from "@/components/ui/button";
import { Checkbox } from "@radix-ui/react-checkbox";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Home() {
  return (
    <div>
      <Skeleton width={50} />        <Checkbox id="terms" />
        <label htmlFor="terms">Accept terms and conditions</label>

      </div>
  );
}
