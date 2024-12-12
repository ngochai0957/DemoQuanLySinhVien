
import Dashboard from "pageUser/Dashboard.js";
import Notifications from "pageUser/Notifications.js";
import Icons from "pageUser/Icons.js";
import Typography from "pageUser/Typography.js";
import TableList from "pageUser/Tables.js";
import Maps from "pageUser/Map.js";
import UserPage from "pageUser/User.js";
import UpgradeToPro from "pageUser/Upgrade.js";
import Sinhvien from "pageUser/Sinhvien.js";
import Khungchuongtrinh from "pageUser/khungchuongtrinh";
import Dangkylaodong from "pageUser/Dangkylaodong";
import PhanHoiSinhVien from "pageUser/Phanhoi";

var routes = [
  {
    path: "/dashboard",
    name: "Trang chủ",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/user",
  },
  {
    path: "/sinhvien",
    name: "Sinh viên",
    icon: "nc-icon nc-single-02",
    component: <Sinhvien />,
    layout: "/user",
  },
  {
    path: "/phanhoi",
    name: "phản hồi",
    icon: "nc-icon nc-tile-56",
    component: <PhanHoiSinhVien />,
    layout: "/user",
  },
  {
    path: "/notifications",
    name: "Thông báo",
    icon: "nc-icon nc-bell-55",
    component: <Notifications />,
    layout: "/user",
  },
  {
    path: "/user-page",
    name: "thông tin cá nhân",
    icon: "nc-icon nc-single-02",
    component: <UserPage />,
    layout: "/user",
  },
  {
    path: "/dangkylaodong",
    name: "đăng ký lao động",
    icon: "nc-icon nc-tile-56",
    component: <Dangkylaodong />,
    layout: "/user",
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "nc-icon nc-tile-56",
    component: <TableList />,
    layout: "/user",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: <Typography />,
    layout: "/user",
  },
  {
    path: "/chuongtrinhdaotao",
    name: "Chương trình đào tạo",
    icon: "nc-icon nc-layout-11",
    component: <Khungchuongtrinh />,
    layout: "/user",
  },
 
];
export default routes;
