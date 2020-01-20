<template>
    <div id="app">

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <router-link to="/" class="navbar-brand">
                Posts app
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-item nav-link">
                        Home
                    </router-link>
                    <router-link to="/posts" class="nav-item nav-link">
                        Posts
                    </router-link>
                </div>
            </div>
        </nav>

        <main>
            <div class="container mt-4">
                <router-view/>
            </div>
        </main>
    </div>
</template>

<style lang="scss">
  @import '~bootstrap/scss/bootstrap';
</style>
