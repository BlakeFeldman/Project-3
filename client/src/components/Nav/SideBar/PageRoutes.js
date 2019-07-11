import {
  Build,
  DateRange,
  DirectionsCar,
  School,
  Public,
} from "@material-ui/icons";
import HowToHelp from "../../../pages/HowToHelp";
import Education from "../../../pages/Education";
import Advocacy from "../../../pages/Advocacy";
import Community from "../../../pages/Community";
import Services from "../../../pages/Services";

const PageRoutes = [
  {
    path: "/howtohelp",
    sidebarName: "HowToHelp",
    navbarName: "HowToHelp",
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
    icon: DirectionsCar,
    component: Advocacy,
  },
  {
    path: "/community",
    sidebarName: "Community",
    navbarName: "Community",
    icon: Build,
    component: Community,
  },
  {
    path: "/services",
    sidebarName: "Services",
    navbarName: "Services",
    icon: School,
    component: Services,
  },
];

export default PageRoutes;
