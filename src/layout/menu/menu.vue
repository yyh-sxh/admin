<template>
	<div class="menu-container">
		<Menu v-model:selected-keys="state.selectedKeys" mode="inline" :open-keys="state.openKeys" @click="clickMenuItem" theme="dark">
			<template v-for="item in menus" :key="item.name || item.fullPath">
				<MenuItem :menu-info="item" />
			</template>
		</Menu>
	</div>
</template>

<script setup lang="ts">
	import { reactive, computed, watch, type PropType } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	import { Menu } from 'ant-design-vue';
	import MenuItem from './menu-item.vue';

	// 当前路由
	const currentRoute = useRoute();
	const router = useRouter();
	const state = reactive({
		openKeys: [] as string[],
		selectedKeys: [currentRoute.name] as string[],
	});
	
	const { routes } = router.options
	
	//去除root根目录
	let arr = []
	routes.map(item=>{
		if(item.name == 'root'){
			arr = [...arr,...item.children]
		}
		else{
			arr = [...arr,item]
		}
	})
	

	const menus = computed(() => {
		return [...arr].filter((n) => !n.meta?.hideInMenu).sort((a, b) => (a?.meta?.orderNum || 0) - (b?.meta?.orderNum || 0));
	});
	

	// 获取当前打开的子菜单
	const getOpenKeys = () => {
		const meta = currentRoute.meta;
		return (meta?.hideInMenu ?state?.openKeys || [] : currentRoute.meta?.namePath ?? currentRoute.matched.map((n) => n.name)) as string[];
	};


	// 跟随页面路由变化，切换菜单选中状态
	watch(() => currentRoute.fullPath, () => {
		if (currentRoute.name === 'Login') return;
		state.openKeys = getOpenKeys();
		const meta = currentRoute.meta;
	
		state.selectedKeys = [currentRoute.meta?.activeMenu ?? currentRoute.name] as string[];
	
	}, {
		immediate: true,
	}, );
	
	

	// 点击菜单
	const clickMenuItem = ({ item, key, keyPath }) => {
		if (key === currentRoute.name) return;
		router.push({ name: key });
	};
</script>

<style lang="less" scoped>
	.menu-container {
		overflow: auto;
		height: calc(100vh - 64px);

		&::-webkit-scrollbar {
			width: 0;
			height: 0;
		}
	}
</style>
