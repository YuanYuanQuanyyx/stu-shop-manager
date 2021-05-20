import Admin from '../pages/users/Admin';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import RegularUser from '../pages/users/RegularUser';

export const mainRoutes =[{
    path: '/login',
    component: Login
},
{
    path: '/404',
    component: PageNotFound
}
]

export const userRoutes =[{
    path:'/users/admin',
    component: Admin
},
{
    path:'/users/regular',
    component: RegularUser
}]