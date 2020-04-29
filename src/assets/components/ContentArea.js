import React from "react";

const ContentArea = () => {
  return (
    <main class="col-span-4 block">
      <div class="grid grid-cols-4 gap-4 m-4">
        {[1, 2, 3, 4].map((item) => {
          return (
            <div key={item}>
              <VideoTile />
            </div>
          );
        })}
      </div>
      <div class="grid grid-cols-4 gap-4 m-4">
        {[1, 2, 3, 4].map((item) => {
          return (
            <div key={item}>
              <VideoTile />
            </div>
          );
        })}
      </div>
      <div class="grid grid-cols-4 gap-4 m-4">
        {[1, 2, 3, 4].map((item) => {
          return (
            <div key={item}>
              <VideoTile />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ContentArea;

const VideoTile = (props) => {
  return (
    <div className="flex flex-col">
      <img
        className="w-full object-cover h-40"
        src="https://source.unsplash.com/user/anckor"
        alt="unspalsh_random"
      />
      <div className="flex flex-row mt-2">
        <img
          src="https://yt3.ggpht.com/a-/AOh14GjFpgyuFuY2oBpLiwCDUHES3ZgKYYY-mXBwPg=s68-c-k-c0x00ffffff-no-rj-mo"
          alt="apple"
          className="rounded-full h-10 w-10"
        />
        <div className="flex flex-col">
          <span className="text-white font-medium px-2">
            Title of the video
          </span>
          <span className="text-gray-500 font-base text-xs px-2">Apple</span>
          <span className="text-gray-500 font-base text-xs px-2">
            {Math.floor(Math.random() * 10000)} views •{" "}
            {Math.floor(Math.random() * 10)} months ago
          </span>
        </div>
      </div>
    </div>
  );
};
