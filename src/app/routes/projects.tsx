import { IoIosFolder } from "react-icons/io";

import { Panel } from "@/components/ui/panel";
import { Window } from "@/components/ui/window";
import { useWindowsStore } from "@/stores";

export default function Projects() {
  const { openWindow } = useWindowsStore();

  return (
    <Panel className="place-items-start pt-24 mx-auto container">
      <button
        type="button"
        className="cursor-pointer flex flex-col justify-center items-center transition-transform hover:scale-95"
        onClick={() => openWindow("portfolio")}
      >
        <IoIosFolder className="text-6xl" />
        <span className="uppercase">Portfolio</span>
      </button>
      <button
        type="button"
        className="cursor-pointer flex flex-col justify-center items-center transition-transform hover:scale-95"
      >
        <IoIosFolder className="text-6xl" />
        <span className="uppercase">Portfolio</span>
      </button>
      <button
        type="button"
        className="cursor-pointer flex flex-col justify-center items-center transition-transform hover:scale-95"
      >
        <IoIosFolder className="text-6xl" />
        <span className="uppercase">Portfolio</span>
      </button>

      <Window id="portfolio" title="Portfolio">
        a
      </Window>
    </Panel>
  );
}
