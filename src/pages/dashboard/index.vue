<template>
	<Result status="success" title="Admin, Welcome Back">
		<template #icon>
			<smile-twoTone />
	    </template>
	</Result>
</template>

<script setup lang="ts">
	import { Result } from 'ant-design-vue';
	import { SmileTwoTone } from '@ant-design/icons-vue';
</script>