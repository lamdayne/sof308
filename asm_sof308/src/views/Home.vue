<template>
    <div>
        <Navbar />
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-4">
                    <h2 class="text-info">About</h2>
                    <div class="card bg-light">
                        <img src="../assets/logo.png" alt="" class="card-img-top rounded-circle p-5">
                        <div class="card-body">
                            <h5 class="card-title">Giới thiệu bản thân</h5>
                            <p class="card-text">
                                Hi, I'm Nguyen Hoang Phuong Lam. My major is software development.
                            </p>
                        </div>
                    </div>
                    <h2 class="text-info mt-3">Category</h2>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center active">
                            <a href="#" class="nav-link">Exercise Mode</a>
                            <span class="badge bg-primary">18</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" class="nav-link">Nutrition Mode</a>
                            <span class="badge bg-primary">10</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" class="nav-link">Life handbook</a>
                            <span class="badge bg-primary">06</span>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-8">
                    <h2 class="text-info">Blog</h2>
                    <div class="container card bg-light">
                        <div class="row mt-3 mb-3">
                            <div class="col-sm-6">
                                <div class="card">
                                    <h5 class="card-header">Featured</h5>
                                    <div class="card-body">
                                        <img src="../assets/tap-piltes.jpg" class="card-img-top rounded-0" alt="...">
                                        <p class="card-text">With supporting text below as a natural lead-in to
                                            additional
                                            content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card">
                                    <div class="card-body p-2 mb-2">
                                        <a href="#" class="nav-link d-flex align-items-center">
                                            <img src="../assets/orange_300x300.jpg" alt="Biết ơn"
                                                class="img-fluid rounded me-2" width="70" height="70">
                                            <div class="d-flex flex-column">
                                                <h6 class="mb-0">Lorem ipsum dolor sit amet.</h6>
                                                <small class="text-muted mt-3">
                                                    <i class="fa-solid fa-message"></i>
                                                    30
                                                </small>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="card-body p-2 mb-2">
                                        <a href="#" class="nav-link d-flex align-items-center">
                                            <img src="../assets/corevalue.jpg" alt="Biết ơn"
                                                class="img-fluid rounded me-2" width="70" height="70">
                                            <div class="d-flex flex-column">
                                                <h6 class="mb-0">Lorem ipsum dolor sit amet.</h6>
                                                <small class="text-muted mt-3">
                                                    <i class="fa-solid fa-message"></i>
                                                    30
                                                </small>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="card-body p-2 mb-2">
                                        <a href="#" class="nav-link d-flex align-items-center">
                                            <img src="../assets/sesameoil_300x300.jpg" alt="Biết ơn"
                                                class="img-fluid rounded me-2" width="70" height="70">
                                            <div class="d-flex flex-column">
                                                <h6 class="mb-0">Lorem ipsum dolor sit amet.</h6>
                                                <small class="text-muted mt-3">
                                                    <i class="fa-solid fa-message"></i>
                                                    30
                                                </small>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="card-body p-2">
                                        <a href="#" class="nav-link d-flex align-items-center">
                                            <img src="../assets/corevalue.jpg" alt="Biết ơn"
                                                class="img-fluid rounded me-2" width="70" height="100">
                                            <div class="d-flex flex-column">
                                                <h6 class="mb-0">Lorem ipsum dolor sit amet.</h6>
                                                <small class="text-muted mt-3">
                                                    <i class="fa-solid fa-message"></i>
                                                    30
                                                </small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 d-flex justify-content-center">
                                <button class="btn btn-primary mt-3">More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<style></style>