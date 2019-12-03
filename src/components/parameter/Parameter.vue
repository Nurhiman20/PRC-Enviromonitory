<template>
    <!-- <div> -->
        <div class="col-md-3 card card-sensor shadow">
            <div class="row">
                <div class="col-md-5">
                <div class="icon-sensor"><i :class="[parameter.icon]" :style="iconStyle"></i></div>
                </div>
                <div class="col-md-7">
                    <h6>{{ parameter.name }}</h6>
                    <p>27 {{ parameter.unit }}</p>
                </div>
            </div>                 
        </div>
    <!-- </div> -->
</template>

<script>
export default {
    props: ['parameter'],
    computed: {
        iconStyle() {
            return {
                "color": this.parameter.color
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .card-sensor {
        margin: 30px;
        padding: 30px 25px 10px 25px;
        i {
            font-size: 40px;
            margin: 5px;
        }
    }
</style>