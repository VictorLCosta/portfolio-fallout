import { useRef } from "react";
import Draggable from "react-draggable";
import { IoMdClose } from "react-icons/io";

import { useWindowsStore } from "@/stores";
import { cn } from "@/utils";

type WindowProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export function Window({ id, title, children }: WindowProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  const { closeWindow, isWindowOpen } = useWindowsStore();

  const isOpen = isWindowOpen(id);

  return (
    <Draggable
      handle=".handle"
      axis="both"
      defaultClassName={cn("react-draggable", !isOpen && "hidden")}
      nodeRef={nodeRef}
    >
      <div
        className="handle w-60 border-3 border-electric-green z-[1000]"
        ref={(element) => {
          nodeRef.current = element;
        }}
      >
        <div className="flex items-center justify-between p-1 text-black bg-electric-green text-shadow-none cursor-grab active:cursor-grabbing">
          <h4 className="uppercase font-bold text-lg">C:\ {title}</h4>
          <button
            type="button"
            className="btn-icon"
            onClick={() => closeWindow(id)}
          >
            <IoMdClose />
          </button>
        </div>

        <div className="p-1 overflow-hidden bg-black">{children}</div>
      </div>
    </Draggable>
  );
}
