import React, { useState } from 'react';
import SideButton from './SideButton';
import {
  IconGauge,
  IconGaugeFilled,
  IconLayoutList,
  IconLayoutListFilled,
  IconCopyPlus,
  IconCopyPlusFilled,
  IconPaperclip
} from '@tabler/icons-react';

import { useAppDispatch } from '@/redux/hooks';
import { logout } from '@/redux/slice/adminSlice';

const tabs = [
  { text: "Contacts", href: "/dashboard/?tab=contact", Icon: IconGauge, SelectIcon: IconGaugeFilled },
  { text: "Add Post", href: "/dashboard/?tab=add-post", Icon: IconLayoutList, SelectIcon: IconLayoutListFilled },
  { text: "Hires", href: "/dashboard/?tab=hires", Icon: IconCopyPlus, SelectIcon: IconCopyPlusFilled },
  { text: "All Post", href: "/dashboard/?tab=posts", Icon: IconPaperclip, SelectIcon: IconPaperclip },
];

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].href);
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      // Optional: redirect to login page after logout
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="w-[10vw] h-[88vh] bg-zinc-900 sticky top-[5vw] pb-[2vw] rounded-xl overflow-hidden">
      <h1 className="md:text-[1.3vw] text-[2vh] font-italic font-[600] select-none px-1 text-center text-zinc-900 bg-blue-300 rounded-b-2xl">
        Admin Panel
      </h1>

      <div className="mt-2">
        {tabs.map((tab, index) => (
          <SideButton
            key={index}
            Icon={tab.Icon}
            SelectIcon={tab.SelectIcon}
            text={tab.text}
            href={tab.href}
            selected={selectedTab === tab.href}
            onClick={() => setSelectedTab(tab.href)}
          />
        ))}

        <button
          onClick={handleLogout}
          className="w-full text-[1.2vw] px-[2vw] py-1 text-white hover:bg-zinc-800 cursor-pointer text-start"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
