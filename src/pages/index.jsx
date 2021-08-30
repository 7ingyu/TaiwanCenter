import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

const pages = [
    {
        component: <Home/>,
        en: 'Home',
        中文: '網站主頁',
    },
    {
        component: <About/>,
        en: 'About',
        中文: '會館簡介',
    },
    {
        component: <Contact/>,
        en: 'Contact',
        中文: '聯絡資料',
    }
]

export default pages;