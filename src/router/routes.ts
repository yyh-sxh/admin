import type { RouteRecordRaw } from 'vue-router'
import PageView from '@/layout/index.vue';
const routes:Array<RouteRecordRaw> = [
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
	    path: '/',
	    name: 'root',
		component: PageView,
		redirect: '/dashboard',
		children: [
			{
				path: '/dashboard',
				name: 'dashboard',
				meta: {
					title: '工作台'
				},
				component: () => import('@/pages/dashboard/index.vue')
			},
			{
				path: '/table',
				name: 'table',
				meta: {
					title: '表格'
				},
				redirect: '/table/list',
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
			}
		]
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