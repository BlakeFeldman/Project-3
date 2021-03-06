import { Mail, BusinessCenter,Face, AttachMoney, ArrowRight,} from "@material-ui/icons";
import TermsOfService from "../../../pages/TermsOfService";
import ContactUs from "../../../pages/ContactUs";
import AboutUS from "../../../pages/AboutUs";
import GoFundMe from "../../../pages/GoFundMe";


const AltRoutes = [
  {
    path: "/termsofservice",
    sidebarName: "Terms Of Service",
    navbarName: "Terms Of Service",
    icon: BusinessCenter,
    component: TermsOfService,
  },
  {
    path: "/contact-us",
    sidebarName: "Contact Us",
    navbarName: "Contact Us",
    icon: Mail,
    component: ContactUs,
  },
  {
    path: "/AboutUS",
    sidebarName: "About Us",
    navbarName: "About Us",
    icon: Face,
    component: AboutUS,
  }, 
  {

    path: "/how-to-help",
    sidebarName: "How To Help",
    navbarName: "How To Help",

    path: "/donate",
    sidebarName: "Donate",
    navbarName: "Donate",

    icon: AttachMoney,
    component: GoFundMe,
  },
  {
    path: "/",
    sidebarName: "Sign Out",
    navbarName: "Sign Out",
    icon: ArrowRight,
  }
  
];

export default AltRoutes;
