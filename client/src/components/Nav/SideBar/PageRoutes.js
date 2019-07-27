import {
  Domain,
  DateRange,
  Group,
  School,
  Public,
  Camera,
} from "@material-ui/icons";
import HowToHelp from "../../../pages/HowToHelp";
import Education from "../../../pages/Education";
import Advocacy from "../../../pages/Advocacy";
import Community from "../../../pages/Community";
import Services from "../../../pages/Services";
import Gallery from "../../../pages/Gallery";

const PageRoutes = [
  {
    path: "/howtohelp",
    sidebarName: "How To Help",
    navbarName: "How To Help",
    icon: Public,
    component: HowToHelp,
  },
  {
    path: "/education",
    sidebarName: "Education",
    navbarName: "Education",
    icon: DateRange,
    component: Education,
  },
  {
    path: "/advocacy",
    sidebarName: "Advocacy",
    navbarName: "Advocacy",
    icon:Group ,
    component: Advocacy,
  },
  {
    path: "/community",
    sidebarName: "Community",
    navbarName: "Community",
    icon:Domain ,
    component: Community,
  },
  {
    path: "/services",
    sidebarName: "Services",
    navbarName: "Services",
    icon: School,
    component: Services,
  },
  {
    path: "/Gallery",
    sidebarName: "Gallery",
    navbarName: "Gallery",
    icon: Camera,
    component: Gallery,
  },
];

export default PageRoutes;
