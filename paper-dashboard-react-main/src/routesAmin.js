
import Dashboard from "pageAdmin/Dashboard.js";
import Notifications from "pageAdmin/Notifications.js";
import Icons from "pageAdmin/Icons.js";
import Typography from "pageAdmin/Typography.js";
import TableList from "pageAdmin/Tables.js";
import Maps from "pageAdmin/Map.js";
import UserPage from "pageAdmin/User.js";
import UpgradeToPro from "pageAdmin/Upgrade.js";
import Sinhvien from "pageAdmin/Sinhvien.js";
import Khungchuongtrinh from "pageAdmin/khungchuongtrinh";
import PhanHoiSinhVien from "pageAdmin/Phanhoi";

var routes = [
  {
    path: "/dashboard",
    name: "Trang chủ",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/sinhvien",
    name: "Sinh viên",
    icon: "nc-icon nc-single-02",
    component: <Sinhvien />,
    layout: "/admin",
  },
  {
    path: "/phanhoi",
    name: "Phản hồi",
    icon: "nc-icon nc-bell-55",
    component: <PhanHoiSinhVien />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icon",
    icon: "nc-icon nc-tile-56",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Thông báo",
    icon: "nc-icon nc-bell-55",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: <UserPage />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "nc-icon nc-tile-56",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: <Typography />,
    layout: "/admin",
  },
  {
    path: "/chuongtrinhdaotao",
    name: "Chương trình đào tạo",
    icon: "nc-icon nc-layout-11",
    component: <Khungchuongtrinh />,
    layout: "/admin",
  },
 
];
export default routes;
