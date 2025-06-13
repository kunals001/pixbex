import React, { useState } from 'react'
import SideButton from './SideButton'
import { IconGauge ,IconGaugeFilled,IconLayoutList, IconLayoutListFilled,IconCopyPlus,IconCopyPlusFilled} from '@tabler/icons-react';


const tabs = [
    { text: "Contacts", href: "/dashboard/?tab=contact",Icon:IconGauge,SelectIcon:IconGaugeFilled },
    { text: "Add Post", href: "/dashboard/?tab=add-post",Icon:IconLayoutList,SelectIcon:IconLayoutListFilled },
    { text: "Hires", href: "/dashboard/?tab=hires" ,Icon:IconCopyPlus,SelectIcon:IconCopyPlusFilled},
]

const Sidebar = () => {

    const [selectedTab, setSelectedTab] = useState(tabs[0].href);

  return (
    <div className="w-[10vw] h-[88vh] bg-zinc-900 sticky top-[5vw] pb-[2vw] rounded-xl overflow-hidden">

        <h1 className='md:text-[1.3vw] text-[2vh] font-italic font-[600]  select-none  px-1 text-center text-zinc-900 bg-blue-300 rounded-b-2xl'>Admin Panel</h1>

    <div className='mt-2'>

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
    </div>
    </div>
  )
}

export default Sidebar