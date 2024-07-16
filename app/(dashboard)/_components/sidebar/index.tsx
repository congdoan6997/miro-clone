import { links } from "@/config";
import { Hint } from "@/components/hint";
import { NewButton } from "./new-button";
import Image from "next/image";
import { List } from "./list";

const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col justify-between text-white">
      <div className="flex flex-col gap-y-4">
        <List />
        <NewButton />
      </div>

      <div className="aspect-square">
        <Hint label="Source Code" side="right" align="start" sideOffset={18}>
          <a
            href={links.sourceCode}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-white/25 h-full w-full flex items-center justify-center rounded-md opacity-60 hover:opacity-100 transition"
          >
            {/* <Github className="text-white h-5 w-5" /> */}
            <Image
              src="/icons/github.svg"
              alt="github"
              width={20}
              height={20}
            />
          </a>
        </Hint>
      </div>
    </aside>
  );
};

export default Sidebar;
