import FamilyRestroomRounded from "@mui/icons-material/FamilyRestroomRounded";
import GroupRounded from "@mui/icons-material/GroupRounded";
import SchoolRounded from "@mui/icons-material/SchoolRounded";
import GroupsRounded from '@mui/icons-material/GroupsRounded';
import TuneRounded from '@mui/icons-material/TuneRounded';
import KyberOneIcon from "@/components/ui/KyberOneIcon";
const testSidebarData = [
    {
        title: 'Начислено',
        href: "/admin/kyberone",
        icon: <KyberOneIcon/>
    },
    {
        title: 'Студенты',
        href: "/admin/students",
        icon: <GroupRounded/>
    },
    {
        title: 'Группы',
        href: "/admin/groups",
        icon: <GroupsRounded/>
    },
    {
        title: 'Кураторы',
        href: "/admin/courators",
        icon: <SchoolRounded/>
    },
    {
        title: 'Родители',
        href: "/admin/parents",
        icon: <FamilyRestroomRounded/>
    },
    {
        title: 'Лимиты',
        href: "/admin/limits",
        icon: <TuneRounded/>
    },
];

export default testSidebarData;


const testStudentsData = [
    {
      id: '1234',
      date: 'Feb 3, 2023',
      kyberones : '3',
      status: 'Refunded',
      customer: {
        initial: 'O',
        name: 'Olivia Ryhe',
        email: 'olivia@email.com',
      },
      isActive: true,
    },
    {
      id: '1233',
      date: 'Feb 3, 2023',
      kyberones : '32',
      status: 'Paid',
      customer: {
        initial: 'S',
        name: 'Steve Hampton',
        email: 'steve.hamp@email.com',
      },
      isActive: true,
  
    },
    {
      id: '1232',
      date: 'Feb 3, 2023',
      kyberones : '3',
      status: 'Refunded',
      customer: {
        initial: 'C',
        name: 'Ciaran Murray',
        email: 'ciaran.murray@email.com',
      },
      isActive: true,
  
    },
    {
      id: '1231',
      date: 'Feb 3, 2023',
      status: 'Refunded',
      customer: {
        initial: 'M',
        name: 'Maria Macdonald',
        email: 'maria.mc@email.com',
      },
      isActive: true,
  
    },
    {
      id: '1230',
      date: 'Feb 3, 2023',
      status: 'Cancelled',
      customer: {
        initial: 'C',
        name: 'Charles Fulton',
        email: 'fulton@email.com',
      },
      isActive: true,
  
    },
    {
      id: '1229',
      date: 'Feb 3, 2023',
      status: 'Cancelled',
      customer: {
        initial: 'J',
        name: 'Jay Hooper',
        email: 'hooper@email.com',
      },
      isActive: true,
  
    },
    {
      id: '1228',
      date: 'Feb 3, 2023',
      status: 'Refunded',
      customer: {
        initial: 'K',
        name: 'Krystal Stevens',
        email: 'k.stevens@email.com',
      },
      isActive: true,
  
    },
    {
      id: '1227',
      date: 'Feb 3, 2023',
      status: 'Paid',
      customer: {
        initial: 'S',
        name: 'Sachin Flynn',
        email: 's.flyn@email.com',
      },
      isActive: true,
  
    },
    {
      id: '1226',
      date: 'Feb 3, 2023',
      status: 'Cancelled',
      customer: {
        initial: 'B',
        name: 'Bradley Rosales',
        email: 'brad123@email.com',
      },
      isActive: false,
  
    },
    {
      id: '1225',
      date: 'Feb 3, 2023',
      status: 'Paid',
      customer: {
        initial: 'O',
        name: 'Olivia Ryhe',
        email: 'olivia@email.com',
      },
      isActive: true,
  
    },
    {
      id: '1224',
      date: 'Feb 3, 2023',
      status: 'Cancelled',
      customer: {
        initial: 'S',
        name: 'Steve Hampton',
        email: 'steve.hamp@email.com',
      },
      isActive: true,
  
    },
    {
      id: '1223',
      date: 'Feb 3, 2023',
      status: 'Paid',
      customer: {
        initial: 'C',
        name: 'Ciaran Murray',
        email: 'ciaran.murray@email.com',
      },
      isActive: true,
  
    },
    {
      id: '1221',
      date: 'Feb 3, 2023',
      status: 'Refunded',
      customer: {
        initial: 'M',
        name: 'Maria Macdonald',
        email: 'maria.mc@email.com',
      },
      isActive: false,
  
    },
    {
      id: '1220',
      date: 'Feb 3, 2023',
      status: 'Paid',
      customer: {
        initial: 'C',
        name: 'Charles Fulton',
        email: 'fulton@email.com',
      },
      isActive: false,
  
    },
    {
      id: '1219',
      date: 'Feb 3, 2023',
      status: 'Cancelled',
      customer: {
        initial: 'J',
        name: 'Jay Hooper',
        email: 'hooper@email.com',
      },
      isActive: false,
    },
    {
      id: '1218',
      date: 'Feb 3, 2023',
      status: 'Cancelled',
      customer: {
        initial: 'K',
        name: 'Krystal Stevens',
        email: 'k.stevens@email.com',
      },
      isActive: false,
  
    },
    {
      id: '1217',
      date: 'Feb 3, 2023',
      status: 'Paid',
      customer: {
        initial: 'S',
        name: 'Sachin Flynn',
        email: 's.flyn@email.com',
      },
    },
    {
      id: '1216',
      date: 'Feb 3, 2023',
      status: 'Cancelled',
      customer: {
        initial: 'B',
        name: 'Bradley Rosales',
        email: 'brad123@email.com',
      },
    },
  ];

  
export {testStudentsData};