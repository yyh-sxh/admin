<template>
	<Layout class="layout">
		<Layout.Sider class="layout-sider">
			<Logo/>
			<AsideMenu/>
		</Layout.Sider>
		<Layout>
			<!-- <PageHeader/>
			<Layout.Content class="layout-content"/>
			<PageFooter /> -->
		</Layout>
	</Layout>
</template>

<script lang="ts" setup>
	import { ref, computed } from 'vue';
	import { Layout } from 'ant-design-vue';
	import Logo from './logo/index.vue';
	import AsideMenu from './menu/menu.vue';
	// import PageHeader from './header/index.vue';
	// import PageFooter from './footer';

</script>

<style lang="less" scoped>
	.layout {
		display: flex;
		height: 100vh;
		overflow: hidden;

		.ant-layout {
			overflow: hidden;
		}

		.layout-content {
			flex: none;
		}
	}
</style>
