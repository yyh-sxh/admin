const routes = [
    {
        path: '/',
        name: 'index',
		redirect: '/login',
        title: '首页',
        component: () => import('@/components/HelloWorld.vue'), //.vue不能省略
    },
	{
	    path: '/login',
	    name: 'login',
	    title: '登录页',
	    component: () => import('@/pages/login/index.vue'), //.vue不能省略
	}
]
export default routes