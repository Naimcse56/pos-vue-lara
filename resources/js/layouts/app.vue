<template>
    <div>
        <ul class="menu">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/register">Register</router-link>
            </li>
            <li>
                <router-link to="/login">Login</router-link>
            </li>
        </ul>
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
.menu {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    border: 1px solid;
    background-color: aliceblue;
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
}
</style>