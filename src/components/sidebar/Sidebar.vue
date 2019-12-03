<template>
    <div class="sidebar">
        <div class="logo shadow">
            <img src="../../assets/logo2.png" alt="">
            <h3>PRC <br>Enviromonitory</h3>
        </div>

        <ul class="sidebar-nav nav navbar-nav mr-auto flex-column">
            <router-link 
                        to="/" 
                        tag="li"
                        activeClass="active">
                        <i class="fas fa-tachometer-alt"></i><a>Dashboard</a></router-link>
            <router-link 
                        to="/Table" 
                        tag="li"
                        activeClass="active">
                        <i class="fas fa-columns"></i><a>Table</a></router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .sidebar {
        position: fixed;
        width: 225px;
        height: 100%;
        background-color: #1C2431;
        color: #fafafa;
        border: 1px solid #1C2431;
        .logo {
            padding: 6px;
            border-bottom: 1px solid rgb(56, 63, 75);
            background-color: #252E3F;
            img {
                position: absolute;
                height: 30px;
                margin: 2px 30px;
            }
            h3 {            
                font-family: Montserrat;
                font-weight: bold;
                font-size: 15px;
                margin-left: 65px;
            }
        }
        .sidebar-nav {
            li {
                list-style: none;
                padding: 10px 40px;
                border-bottom: 1px solid #1C2431;
                i {
                    margin-right: 10px;
                }
                a {
                    color: #fafafa;
                }
            }
            li:hover {
                background-color: #252E3F;
            }
        }
    }
</style>