import { TabGroup, TabList, TabPanels, TabPanel, Tab } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";
import { IoIosFolder, IoIosFolderOpen } from "react-icons/io";

import { Panel } from "@/components/ui/panel";
import { cn } from "@/utils";

export default function Projects() {
  return (
    <Panel className="place-items-center">
      <TabGroup className="col-span-12 flex items-start justify-center gap-5">
        <TabList className="flex-2/4 flex flex-col gap-5">
          <Tab as={Fragment}>
            {({ selected }) => (
              <div className={cn("tab", selected && "text-white")}>
                {selected ? (
                  <IoIosFolderOpen className="text-4xl" />
                ) : (
                  <IoIosFolder className="text-4xl" />
                )}
                <h2>Portfolio</h2>
              </div>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <div className={cn("tab", selected && "text-white")}>
                {selected ? (
                  <IoIosFolderOpen className="text-4xl" />
                ) : (
                  <IoIosFolder className="text-4xl" />
                )}
                <h2>Portfolio</h2>
              </div>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <div
                className={cn("tab", selected && "text-white animate-pulse")}
              >
                {selected ? (
                  <IoIosFolderOpen className="text-4xl" />
                ) : (
                  <IoIosFolder className="text-4xl" />
                )}
                <h2>Portfolio</h2>
              </div>
            )}
          </Tab>
        </TabList>

        <TabPanels className="flex-2/4">
          <TabPanel>A</TabPanel>
          <TabPanel>B</TabPanel>
          <TabPanel>C</TabPanel>
        </TabPanels>
      </TabGroup>
    </Panel>
  );
}
