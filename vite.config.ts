import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		}
	},
	plugins: [
		vue(),
		Components({
			dts: true,
			resolvers: [AntDesignVueResolver({importStyle: false, resolveIcons: true })]
		})
	],
	server: {
		host: '0.0.0.0',
		port: '8080'
	}
})
