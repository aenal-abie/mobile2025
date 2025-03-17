import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;
const HistoryIcon = (props) => <Icon {...props} name="list-outline" />;
const CustomerIcon = (props) => <Icon {...props} name="people-outline" />;
const ProfileIcon = (props) => <Icon {...props} name="person-outline" />;

const BottomNav = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <BottomNavigationTab icon={HomeIcon} title="Home" />
      <BottomNavigationTab icon={HistoryIcon} title="History" />
      <BottomNavigationTab icon={CustomerIcon} title="Customer" />
      <BottomNavigationTab icon={ProfileIcon} title="Profile" />
    </BottomNavigation>
  );
};

export default BottomNav;
