<template>
	<div class="login-box">
		<div class="login-logo">
			<h1 class="mb-0 ml-2 text-3xl font-bold">Antd Admin</h1>
		</div>
		<a-form layout="horizontal" :model="state.formInline" @submit.prevent="handleSubmit">
			<a-form-item>
				<a-input v-model:value="state.formInline.username" size="large" placeholder="admin">
					<template #prefix>
						<user-outlined type="user" />
					</template>
				</a-input>
			</a-form-item>
			<a-form-item>
				<a-input v-model:value="state.formInline.password" size="large" type="password" placeholder="123456"
					autocomplete="new-password">
					<template #prefix>
						<lock-outlined type="user" />
					</template>
				</a-input>
			</a-form-item>
			<a-form-item>
				<a-button type="primary" html-type="submit" size="large" :loading="state.loading" block>
					登录
				</a-button>
			</a-form-item>
		</a-form>
	</div>
</template>

<script setup lang="ts">
	import { reactive } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	import { message, Modal } from 'ant-design-vue';
	// import { to } from '@/utils/awaitTo';

	const state = reactive({
		loading: false,
		captcha: '',
		formInline: {
			username: '',
			password: '',
			verifyCode: '',
			captchaId: '',
		},
	});

	const route = useRoute();
	const router = useRouter();

	const handleSubmit = async () => {
		const { username, password } = state.formInline;
		if (username.trim() == '' || password.trim() == '') {
			return message.warning('用户名或密码不能为空！');
		}
		
		message.loading('登录中...', 0);
		state.loading = true;
		

		// const [err] = await to(userStore.login(state.formInline));
		// if (err) {
		// 	Modal.error({
		// 		title: () => '提示',
		// 		content: () => err.message,
		// 	});
		// 	setCaptcha();
		// } else {
		// 	message.success('登录成功！');
		// 	setTimeout(() => router.replace((route.query.redirect as string) ?? '/'));
		// }
		
		setTimeout(() => router.replace((route.query.redirect as string) ?? '/dashboard/home'));
		
		state.loading = false;
		message.destroy();
	};
</script>

<style lang="less" scoped>
	.login-box {
		display: flex;
		width: 100vw;
		height: 100vh;
		padding-top: 240px;
		background: url('@/assets/login.svg');
		background-size: 100%;
		flex-direction: column;
		align-items: center;

		.login-logo {
			display: flex;
			margin-bottom: 30px;
			align-items: center;
		}

		:deep(.ant-form) {
			width: 400px;

			.ant-col {
				width: 100%;
			}

			.ant-form-item-label {
				padding-right: 6px;
			}
		}
	}
</style>
