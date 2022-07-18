<template>
	<Result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
		<template #extra>
		      <Button type="primary" href="/dashboard/home">Back Home</Button>
		</template>
	</Result>
</template>

<script setup lang="ts">
	import { Result,Button } from 'ant-design-vue';
</script>