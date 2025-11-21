<template>
    <div>
        <Navbar />
        <div class="container mt-5">
            <div class="row mt-3">
                <div class="col-sm-4 mt-3">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link text-info fs-5 active" aria-current="page" href="#">Read more</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-info fs-5" href="#">View more</a>
                        </li>
                    </ul>
                    <div class="">
                        <a href="#" class="nav-link d-flex p-2">
                            <img src="../assets/corevalue.jpg" alt="Biết ơn" class="img-fluid me-2" width="70"
                                height="100">
                            <div class="d-flex flex-column">
                                <h6 class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                                    facilis.
                                </h6>
                            </div>
                        </a>
                    </div>
                    <div class="">
                        <a href="#" class="nav-link d-flex p-2">
                            <img src="../assets/sesameoil_300x300.jpg" alt="Biết ơn" class="img-fluid me-2" width="70"
                                height="100">
                            <div class="d-flex flex-column">
                                <h6 class="mb-0">Lorem ipsum dolor sit amet.</h6>
                            </div>
                        </a>
                    </div>
                    <div class="">
                        <a href="#" class="nav-link d-flex p-2">
                            <img src="../assets/corevalue.jpg" alt="Biết ơn" class="img-fluid me-2" width="70"
                                height="100">
                            <div class="d-flex flex-column">
                                <h6 class="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h6>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-sm-8 mt-3">
                    <h2 class="text-info text-center">Video</h2>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card mt-2">
                                    <img src="../assets/video1.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Đi xa hơn để trưởng thành</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make
                                            up
                                            the bulk of the card’s content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card mt-2">
                                    <img src="../assets/video2.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Chút tâm tư những ngày cuối năm</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make
                                            up
                                            the bulk of the card’s content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card mb-2 mt-2">
                                    <img src="../assets/video3.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Ước gì được trở về tuổi thơ</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make
                                            up
                                            the bulk of the card’s content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card mb-2 mt-2">
                                    <img src="../assets/video4.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Ba người thầy vĩ đại</h5>
                                        <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Nihil?</p>
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

<script>
import Navbar from '../components/Navbar.vue';

export default {
    components: {
        Navbar
    }
}
</script>

<style></style>