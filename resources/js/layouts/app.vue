<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav menu">
                        <li class="nav-item">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/register">Register</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/dashboard">Dashboard</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    setup () {

        return {}
    }
}
</script>

<style lang="scss" scoped>
li.nav-item {
    margin: 5px;
}
.header {
    margin: 15px;
}
a {
    color: coral;
    font-size: 22px;
    font-weight: 700;
}
</style>