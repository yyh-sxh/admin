import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress';
// 导入路由各页面配置
import routes from './routes'
// 配置router对象
const router = createRouter({
	history: createWebHistory(),
	routes
})


//路由守卫
router.beforeEach(async (to, from, next) => {
	
	NProgress.start();
	
	if(to.name == 'login'){
		next()
		NProgress.done();
	}
	else{
		
		const token = sessionStorage.getItem('username')
		
		if(token){
			next()
			NProgress.done();
		}
		else{
			next({name:'login',replace: true})
			NProgress.done();
		}
	}
})

export default router