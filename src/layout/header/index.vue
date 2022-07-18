<template>
	<Layout.Header class="layout-header">
		<Space :size="20">
			<slot>
				<Space :size="20">
					<Breadcrumb>
						<template v-for="(routeItem, rotueIndex) in menus" :key="routeItem?.name">
							<Breadcrumb.Item>
								<span>{{routeItem?.meta?.title}}</span>
							</Breadcrumb.Item>
						</template>
					</Breadcrumb>
				</Space>
			</slot>
		</Space>
		<Space :size="20">
			<Dropdown placement="bottomRight" :trigger="['click']">
				<div class="name">
					<Avatar :src='getImageUrl()' alt="" shape="square">管理员</Avatar>
					<span>管理员</span>
				</div>
				<template #overlay>
					<Menu>
						<Menu.Item>
							<div>
								<form-outlined />修改密码
							</div>
						</Menu.Item>
						<Menu.Item>
							<div @click.prevent="doLogout">
								<poweroff-outlined />退出系统
							</div>
						</Menu.Item>
					</Menu>
				</template>
			</Dropdown>
		</Space>
	</Layout.Header>
</template>

<script lang="tsx" setup>
	import { computed, nextTick, type CSSProperties } from 'vue';
	import { useRouter, useRoute, RouteRecordRaw } from 'vue-router';
	import { Layout,message,Modal,Dropdown,Menu,Space,Breadcrumb,Avatar,type MenuTheme } from 'ant-design-vue';
	import { FormOutlined,PoweroffOutlined } from '@ant-design/icons-vue';

	const router = useRouter();
	const route = useRoute();
	
	//面包屑路由
	const menus = computed(() => {
		return route.matched;
	});
	
	//静态头像图片
	const getImageUrl = () => {
		return new URL('../../assets/avatar.gif', import.meta.url).href;
	};


	// 退出登录
	const doLogout = () => {
		Modal.confirm({
			title: '您确定要退出登录吗？',
			
			centered: true,
			onOk: async () => {
				message.success('成功退出登录');
				await nextTick();
				router.replace({
					name: 'login'
				});
			}
		})
	};
</script>

<style lang="less" scoped>
	.layout-header {
		position: sticky;
		top: 0;
		z-index: 10;
		display: flex;
		height: 64px;
		padding: 0 20px;
		justify-content: space-between;
		align-items: center;
		background-color: #ffffffd9;
		border-bottom: 1px solid #eee;
		* {
			cursor: pointer;
		}
		.name{
			font-size: 18px;
			display: flex;
			align-items: center;
			span{
				margin-left: 10px;
			}
		}
	}
</style>
