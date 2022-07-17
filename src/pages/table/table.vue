<template>
	<!-- <a-table :columns="columns" :row-key="record => record.login.uuid" :data-source="dataSource"
		:pagination="pagination" :loading="loading" @change="handleTableChange">
		<template #bodyCell="{ column, text }">
			<template v-if="column.dataIndex === 'name'">{{ text.first }} {{ text.last }}</template>
		</template>
	</a-table> -->
</template>
<script setup lang="ts">
	import type { TableProps } from 'ant-design-vue';
	
	const columns = [{
			title: 'Name',
			dataIndex: 'name',
			sorter: true,
			width: '20%',
		},
		{
			title: 'Gender',
			dataIndex: 'gender',
			filters: [
				{ text: 'Male', value: 'male' },
				{ text: 'Female', value: 'female' },
			],
			width: '20%',
		},
		{
			title: 'Email',
			dataIndex: 'email',
		},
	];



	

</script>
