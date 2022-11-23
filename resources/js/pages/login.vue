<template>
    <div class="body row">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-8 col-xl-6">
                    <form @submit.prevent="login">
                        <div class="row">
                            <div class="col text-center">
                                <h1>Login Please !!!</h1>
                                <p>{{ form }}</p>
                                <h5 class="text-danger" v-if="error">{{ error }}</h5>
                                <h5 class="text-danger" v-if="user_info">{{ user_info }}</h5>
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col">
                                <input type="email" id="email" class="form-control" placeholder="Email" v-model="form.email">
                            </div>
                        </div>
                        <div class="row align-items-center mt-4">
                            <div class="col">
                                <input type="password" id="password" class="form-control" placeholder="Password" v-model="form.password">
                            </div>
                        </div>
                        <div class="row justify-content-start mt-4">
                            <div class="col">
                                <button type="submit" class="btn btn-primary mt-4">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
    setup () {
        let form = reactive({
            'email' : '',
            'password' : '',
        });

        let error = ref('');

        const router = useRouter();

        const login = async() => {
            await axios.post('/api/login', form).then(response => {
                if (response.data.success) {
                    localStorage.setItem('token', response.data.data.token)
                    router.push({name:'dashboard'})
                } else {
                    error.value = response.data.message;
                }
            });
        }

        return {
            form,
            login,
            error
        }
    }
}
</script>

<style lang="scss" scoped>
.text-danger{
    color: brown;
}
</style>