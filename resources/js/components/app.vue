<template>
    <h1>Hello app</h1>
    <p>
        <strong>current route path</strong>{{ $route.fullPath }}
    </p>
    <nav>
        <router-link class="link" to="/">Home</router-link>
        <router-link  class="link" to="/about">About</router-link>

    </nav>
    <main>
        <router-view/>
    </main>
</template>

