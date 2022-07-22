<template>
	<Result status="403" title="403" sub-title="Sorry, you are not authorized to access this page.">
		<template #extra>
		      <Button type="primary" href="/dashboard">Back Home</Button>
		</template>
	</Result>
</template>

<script setup lang="ts">
	import { Result,Button } from 'ant-design-vue';
</script>