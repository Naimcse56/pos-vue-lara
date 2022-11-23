<template>
    <div class="body row">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-8 col-xl-6">
                    <form @submit.prevent="login">
                        <div class="row">
                            <div class="col text-center">
                                <h1>You Are Logged In Now !!!</h1>
                            </div>
                        </div>
                        <div class="row justify-content-start mt-4">
                            <div class="col">
                                <button type="button" class="btn btn-primary mt-4" @click="logout">Logout</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter} from 'vue-router'
export default {
    setup () {
        const router = useRouter();

        function logout() {
            localStorage.removeItem('token');
            router.push({name:'home'})
        }

        return {
            logout
        }
    }
}
</script>

<style lang="scss" scoped>

</style>