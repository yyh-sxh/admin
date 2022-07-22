import { createStore } from 'vuex'

const store = createStore({
	state: {
		name : ''
	},
	mutations: {},
	actions: {
		setUser({dispatch,commit},data){
			const { username } = data
			sessionStorage.setItem('username',username)
			return
		},
		
		resetToken(){
			 sessionStorage.removeItem("username");
		}
	},
	getters: {
		user(state,getters):String {
			const username = sessionStorage.getItem('username')
			state.name = username
			return username
		}
	}
})

export default store