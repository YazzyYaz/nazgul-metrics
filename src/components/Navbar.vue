<template>
    <nav class="navbar navbar-custom">
        <a class="navbar-brand text-link"  href="#">
            Nazgul
        </a>
        <div>
            <a href="https://github.com/eth-classic/nazgul"><font-awesome-icon :icon="['fab', 'github']" size="3x" :style="{ color: '#e06e5c' }"></font-awesome-icon><br><br></a>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
    .navbar-custom {
        background-color: white;
        margin-left: 0px !important;
    }

    .text-link {
        color: black;
    }
</style>
