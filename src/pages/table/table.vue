<template>
	<Card>
		<div class="search">
			<Form layout="inline">
				<Form.Item label='Name'>
					<Input />
				</Form.Item>
				<Form.Item label='Age'>
					<Input />
				</Form.Item>
			</Form>
			<div>
				<Button type="primary">查询</Button>
			</div>
		</div>
		
		<Table :dataSource="dataSource" :columns="columns">
			<template #bodyCell="{ column, record }">
				<template v-if="column.key == 'action'">
					<Button type="primary" size="small">详情</Button>
					<Divider type="vertical"></Divider>
					<Button type="danger" size="small">删除</Button>
				</template>
			</template>
		</Table>
	</Card>
</template>
<script setup lang="ts">
	import { Card, Table, Button,Form,Input,Divider  } from 'ant-design-vue';
	const columns = [{
			title: 'Name',
			dataIndex: 'name'
		},
		{
			title: 'Age',
			dataIndex: 'age'
		},
		{
			title: 'Address',
			dataIndex: 'address',
		},
		{
		    title: 'Action',
		    key: 'action',
		}
	];

	const dataSource = [{
				key: '1',
				name: '胡彦斌',
				age: 32,
				address: '西湖区湖底公园1号'
			},
			{
				key: '2',
				name: '胡彦祖',
				age: 42,
				address: '西湖区湖底公园1号'
			},
		];
</script>
<style lang="less" scoped>
	.search{
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
	}
</style>