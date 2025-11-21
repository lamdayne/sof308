<template>
    <nav class="navbar navbar-expand-sm bg-light fixed-top">
        <div class="container">
            <a href="/home" class="navbar-brand">
                <img src="../assets/logo-energy-pilates.png" alt="" width="80px">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a href="/home" class="nav-link">
                            <i class="fa-solid fa-list"></i>
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/blog" class="nav-link">
                            <i class="fa-solid fa-film"></i>
                            Bài viết
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/about" class="nav-link">
                            <i class="fa-solid fa-circle-info"></i>
                            Giới thiệu
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/event" class="nav-link">
                            <i class="fa-solid fa-calendar"></i>
                            Sự kiện
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa-solid fa-user"></i>
                            Tài khoản
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="/login">Đăng nhập</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/signup">Đăng ký</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/forgot-password">Quên mật khẩu</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="navbar-nav d-flex">
                    <li class="nav-item">
                        <a href="/vi" class="nav-link">Tiếng Việt</a>
                    </li>
                    <li class="nav-item">
                        <a href="/en" class="nav-link">English</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style></style>
