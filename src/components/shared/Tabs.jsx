import { useState } from "react";

export const Tabs = () => {
  const [active, setActive] = useState({
    forYou: true,
    following: false,
  });
  return (
    <div>
      <section className="w-full">
        <div className="flex w-full border-b border-neutral-700">
          <div className="flex flex-col items-center justify-center hover:bg-neutral-800 w-2/4 text-center cursor-pointer relative">
            <div
              className="flex items-end py-4 text-neutral-50 font-medium text-16"
              onClick={() => {
                setActive({ forYou: !active.forYou });
              }}
            >
              For you
            </div>
            {active.forYou && (
              <div className="bg-twitter-default w-14 rounded-full h-1 absolute bottom-0" />
            )}
          </div>
          <div className="flex flex-col items-center justify-center hover:bg-neutral-800 w-2/4 text-center cursor-pointer relative">
            <div
              className="flex items-end py-4 text-neutral-400 font-medium text-16"
              onClick={() => {
                setActive({ following: !active.following });
              }}
            >
              Following
            </div>
            {active.following && (
              <div className="bg-twitter-default w-14 rounded-full h-1 absolute bottom-0" />
            )}
            <div className="w-20 rounded-full h-1 absolute bottom-0" />
          </div>
        </div>
      </section>
    </div>
  );
};
