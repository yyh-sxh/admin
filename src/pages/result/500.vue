<template>
	<Result status="500" title="500" sub-title="Sorry, the server is wrong.">
		<template #extra>
		      <Button type="primary" href="/dashboard">Back Home</Button>
		</template>
	</Result>
</template>

<script setup lang="ts">
	import { Result,Button } from 'ant-design-vue';
</script>