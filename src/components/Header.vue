<template>
    <nav class="navbar navbar-expand-lg navbar-light shadow">
        <ul class="nav navbar-nav ml-auto">
            <li class="nav-item dropdown">
                <a 
                class="nav-link dropdown-toggle" 
                href="#" 
                id="navbarDropdown" 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                Angga Nurhiman</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="https://instagram.com/nurhiman_a"><i class="fab fa-instagram"></i>  Instagram</a>
                    <a class="dropdown-item" href="https://fb.com/nurhiman.a"><i class="fab fa-facebook-square"></i>  Facebook</a>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            time: ''
        }
    },
    methods: {
        currentDate() {
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date+' '+time;

        }
    }
}
</script>

<style lang="scss" scoped>
    .navbar {
        background-color: #fff;
        border-bottom: 1px solid #e2e2e2;
        img {
            height: 25px;
        }
    }
</style>