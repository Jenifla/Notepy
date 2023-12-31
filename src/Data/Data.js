import { RiDashboardLine, RiFileList2Line, RiUserLine, RiBarChartLine } from 'react-icons/ri';
import { FaMoneyBillAlt, FaMoneyCheckAlt } from 'react-icons/fa';
import { AiOutlineKeyboard } from 'react-icons/ai';
import { MdImage } from 'react-icons/md';

// Sidebar Data
export const SidebarData = [
  {
    icon: <RiDashboardLine />,
    heading: "Dashboard",
  },
  {
    icon: <RiFileList2Line />,
    heading: "Orders",
  },
  {
    icon: <RiUserLine />,
    heading: "Customers",
  },
  {
    icon: <RiUserLine />,
    heading: 'Products'
  },
  {
    icon: <RiBarChartLine />,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: <FaMoneyBillAlt />,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: <FaMoneyCheckAlt />,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: <FaMoneyBillAlt />, // Ganti dengan ikon yang sesuai dengan data Anda
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: <MdImage />,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: <MdImage />,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: <MdImage />,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
