const app = Vue.createApp({
    data() {
        return {
            users: [],
            createDate: new Date().toDateString(),
        }
    },
    methods: {
        getUsers() {
            axios.get('https://reqres.in/api/users?page=1')
            .then(response => {
                this.users = response.data.data;
            })
        }
    }
})

app.mount('#app')