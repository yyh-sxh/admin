<template>
	<Card>
		<Form :label-col="labelCol" :wrapper-col="wrapperCol" :model="formState" @submit='submit'>
			<Form.Item label="Username">
				<Input v-model:value="formState.username" />
			</Form.Item>
			<Form.Item label="Age">
				<Input v-model:value="formState.age" />
			</Form.Item>
			<Form.Item label="Sex">
				<Radio.Group v-model:value="formState.sex">
					<Radio :value="1">男</Radio>
					<Radio :value="2">女</Radio>
				</Radio.Group>
			</Form.Item>
			<Form.Item label="Area">
				<Select v-model:value="formState.area">
					<Select.Option :value="1">南宁</Select.Option>
					<Select.Option :value="2">柳州</Select.Option>
				</Select>
			</Form.Item>
			<Form.Item label="Instant delivery">
				<Switch v-model:checked="formState.delivery" />
			</Form.Item>
			<Form.Item label="Date">
				<DatePicker v-model:value="formState.timer" show-time valueFormat="YYYY-MM-DD HH:mm:ss" />
			</Form.Item>
			<Form.Item label="Like">
				<Checkbox.Group v-model:value="formState.like">
					<Checkbox :value="1">雪梨</Checkbox>
					<Checkbox :value="2">西瓜</Checkbox>
					<Checkbox :value="3">苹果</Checkbox>
					<Checkbox :value="4">香蕉</Checkbox>
				</Checkbox.Group>
			</Form.Item>
			<Form.Item>
				<Button style="margin-left: 150px;" type="primary" html-type="submit">submit</Button>
			</Form.Item>
		</Form>
	</Card>
</template>

<script setup lang="ts">
	import { reactive } from 'vue'
	import { Card, Button, Form, Input, Radio, Checkbox, Select, Switch, DatePicker } from 'ant-design-vue';
	const labelCol = { style: { width: '150px' } }
	const wrapperCol = { span: 14 }


	const formState = reactive({
		username: '',
		age: '',
		sex: 1,
		area: 1,
		delivery: true,
		timer: '',
		like: []
	});
	
	const submit = () =>{
		console.log(formState)
	}
</script>
