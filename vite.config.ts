import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import DefineOptions from 'unplugin-vue-define-options/vite'
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		}
	},
	plugins: [
		vue(),
		DefineOptions()
	],
	server: {
		host: '0.0.0.0',
		port: '8080'
	}
})
