<template>
    <div>
        <Navbar />
        <div class="container mt-5 p-5">
            <div class="row d-flex justify-content-center">
                <div class="col-xl-6 col-sm-12">
                    <h3 class="text-info text-center">Login</h3>
                    <div class="card">
                        <div class="card-body">
                            <div class="col-12">
                                <label for="" class="form-label">Email</label>
                                <input id="" type="text" class="form-control">
                            </div>
                            <div class="col-12">
                                <label for="" class="form-label">Password</label>
                                <input id="" type="email" class="form-control">
                            </div>
                            <button class="btn btn-primary mt-3">Login</button>
                            <a href="/signup" class="nav-link mt-2">Create a account</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue"

</script>

<style></style>