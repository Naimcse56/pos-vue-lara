<template>
    <div class="body row">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-8 col-xl-6">
                <div class="row">
                    <div class="col text-center">
                    <h1>Register</h1>
                    <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col mt-4">
                        <input type="text" id="name" class="form-control" placeholder="Company Name">
                    </div>
                </div>
                <div class="row align-items-center mt-4">
                    <div class="col">
                        <input type="email" id="email" class="form-control" placeholder="Email">
                    </div>
                </div>
                <div class="row align-items-center mt-4">
                    <div class="col">
                        <input type="password" id="password" class="form-control" placeholder="Password">
                    </div>
                    <div class="col">
                        <input type="password" id="c_password" class="form-control" placeholder="Confirm Password">
                    </div>
                </div>
                <div class="row justify-content-start mt-4">
                    <div class="col">
                        <div class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input"> I Read and Accept <a href="#">Terms and Conditions</a>
                            </label>
                        </div>
                        <button class="btn btn-primary mt-4">Submit</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>