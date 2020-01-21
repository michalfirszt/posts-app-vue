<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card card-default">
                <loading :active.sync="isLoading"
                         :is-full-page="fullPage"></loading>

                <div class="card-header">
                    Posts
                </div>

                <div class="card-body">
                    <ul>
                        <li v-for="post in posts" :key="post.id">
                            {{ post.title }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {

        props: [],

        data() {
            return {
                isLoading: false,
                fullPage: false,
                posts: [],
            }
        },

        components: {
            Loading,
        },

        mounted() {
            this.getPosts();
        },

        methods: {

            getPosts() {
                this.isLoading = true;

                axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then(response => {
                        this.posts = response.data;
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                        this.isLoading = false;
                    });
            },

        },
    }
</script>
