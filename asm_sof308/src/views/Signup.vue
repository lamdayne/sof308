<template>
    <div>
        <Navbar />
        <div class="container mt-5">
            <div class="row d-flex justify-content-center">
                <div class="col-xl-6 col-sm-12">
                    <h3 class="text-info text-center">Signup</h3>
                    <div class="card">
                        <div class="card-body">
                            <div class="col-12">
                                <label for="inputFullname" class="form-label">Họ và tên</label>
                                <input id="inputFullname" type="text" class="form-control">
                            </div>
                            <div class="col-12">
                                <label for="" class="form-label">Email</label>
                                <input id="" type="email" class="form-control">
                            </div>
                            <div class="col-12">
                                <label for="" class="form-label">Mật khẩu</label>
                                <input id="" type="password" class="form-control">
                            </div>
                            <div class="col-12">
                                <label for="" class="form-label">Xác nhận mật khẩu</label>
                                <input id="" type="password" class="form-control">
                            </div>
                            <div class="col-12 mt-3">
                                <label for="" class="form-label">Giới tính:</label>
                                <input type="radio" class="form-check-input ms-3" name="gender" id="">Nam
                                <input type="radio" class="form-check-input ms-3" name="gender" id="">Nữ
                            </div>
                            <div class="form-check mt-3">
                                <input class="form-check-input" type="checkbox" value="" id="checkDefault">
                                <label class="form-check-label" for="checkDefault">
                                    Tôi đồng ý với các điều khoản và điều kiện
                                </label>
                            </div>
                            <button class="btn btn-primary mt-3">Signup</button>
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