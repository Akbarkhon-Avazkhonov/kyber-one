import FamilyRestroomRounded from "@mui/icons-material/FamilyRestroomRounded";
import GroupRounded from "@mui/icons-material/GroupRounded";
import PaidRounded from "@mui/icons-material/PaidRounded";
import SchoolRounded from "@mui/icons-material/SchoolRounded";
import GroupsRounded from '@mui/icons-material/GroupsRounded';
import TuneRounded from '@mui/icons-material/TuneRounded';
import KyberOneIcon from "../ui/KyberOneIcon";
const testdata = [
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

export default testdata;