<template>
    <div class="dropdown">
        <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Chart
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Temperature</a>
            <a class="dropdown-item" href="#">Humidity</a>
            <a class="dropdown-item" href="#">Light Intensity</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .dropdown {
        margin-bottom: 15px;
    }
</style>