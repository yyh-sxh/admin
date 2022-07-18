import type { RouteRecordRaw } from 'vue-router'
import PageView from '@/layout/index.vue';
const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
		redirect: '/dashboard/home',
		meta: {
			 title: '',
			 hideInMenu: true
		}
    },
	{
	    path: '/login',
	    name: 'login',
	    meta: {
			title: '登录页',
			hideInMenu: true
		},
	    component: () => import('@/pages/login/index.vue'), //.vue不能省略
	},
	{
		path: '/dashboard',
		name: 'dashboard',
		meta: {
			title: '工作台'
		},
		redirect: '/dashboard/home',
		component: PageView,
		children: [
			{
			    path: 'home',
			    name: 'home',
				meta: {
					 title: '首页'
				},
				component: () => import('@/pages/dashboard/index.vue')
			}
		]
	},
	{
		path: '/table',
		name: 'table',
		meta: {
			title: '表格'
		},
		redirect: '/table/list',
		component: PageView,
		children: [
			{
			    path: 'list',
			    name: 'table-list',
				meta: {
					 title: '基础表格'
				},
				component: () => import('@/pages/table/table.vue')
			}
		]
	},
	{
		path: '/form',
		name: 'form',
		meta: {
			title: '表单'
		},
		redirect: '/form/list',
		component: PageView,
		children: [
			{
			    path: 'list',
			    name: 'form-list',
				meta: {
					 title: '基础表单'
				},
				component: () => import('@/pages/form/form.vue')
			}
		]
	},
	{
	    path: '/404',
	    name: '404',
		component: () => import('@/pages/result/404.vue'),
		meta: {
			 title: '',
			 hideInMenu: true
		}
	},
	{
	    path: '/403',
	    name: '403',
		component: () => import('@/pages/result/403.vue'),
		meta: {
			 title: '',
			 hideInMenu: true
		}
	},
	{
	    path: '/500',
	    name: '500',
		component: () => import('@/pages/result/500.vue'),
		meta: {
			 title: '',
			 hideInMenu: true
		}
	},
	{
	    path: '/:catchAll(.*)',
	    redirect: '/404',
		meta: {
			hideInMenu: true
		}
	}
]
export default routes