import React from "react";
import HomeIcon from "../icons/HomeIcon";
import TrendingIcon from "../icons/TrendingIcon";
import SubscriptionIcon from "../icons/SubscriptionIcon";

const SideBar = () => {
  return (
    <div class="col-span-1 bg-yt-nav h-screen m-8">
      <div class="divide-y divide-yt-icon">
        <ul>
          <ListItem title="Home">
            <HomeIcon />
          </ListItem>
          <ListItem title="Trending">
            <TrendingIcon />
          </ListItem>
          <ListItem title="Subscriptions">
            <SubscriptionIcon />
          </ListItem>
        </ul>
        <ul>
          <ListItem title="Home">
            <HomeIcon />
          </ListItem>
          <ListItem title="Trending">
            <TrendingIcon />
          </ListItem>
          <ListItem title="Subscriptions">
            <SubscriptionIcon />
          </ListItem>
          <ListItem title="Home">
            <HomeIcon />
          </ListItem>
          <ListItem title="Trending">
            <TrendingIcon />
          </ListItem>
          <ListItem title="Subscriptions">
            <SubscriptionIcon />
          </ListItem>
        </ul>
      </div>
    </div>
  );
};

const ListItem = (props) => {
  return (
    <li className="flex flex-row justify-start gap-6 hover:bg-yt-hoverColor p-2">
      {props.children}
      <span className="text-white mx-8 px-2 text-medium">{props.title}</span>
    </li>
  );
};

export default SideBar;
