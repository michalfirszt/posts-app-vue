<template>
    <div class="posts">
        <PostsComponent></PostsComponent>
    </div>
</template>

<script>
    import PostsComponent from '../components/PostsComponent';

    export default {
        name: 'posts',
        components: {
            PostsComponent
        }
    }
</script>
