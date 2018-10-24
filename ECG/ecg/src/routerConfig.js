import Login from './components/UserControl/Login/login';
import Regist from './components/UserControl/Regist/Regist';
import ForgetPwd from './components/UserControl/ForgetPwd/ForgetPwd';
import NotFount from './components/NotFound/NotFount';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import My from './components/My/My';
import Heart from './components/Heart/Heart';
import FindDoctor from './components/FindDoctor/FindDoctor';

export const routerConfig = [
    {
        path:'/',
        component:Footer
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/regist',
        component:Regist
    },
    {
        path:'/forgetpwd',
        component:ForgetPwd,

    },
    {
        path:'/heart',
        component:Heart
    },
    {
        path:'/finddoc',
        component:FindDoctor
    },
    {
        path:'*',
        component:NotFount
    }
];

