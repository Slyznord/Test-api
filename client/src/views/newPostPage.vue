<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <h1>Add New Post</h1>

                <form>
                    <div class="form-group">
                        <input type="text" name="title" id="title" placeholder="Title" v-model="post.title">
                    </div>

                    <div class="form-group">
                        <textarea type="text" class="form-control" rows="5" name="description" id="description" placeholder="Description" v-model.trim="post.description"></textarea>
                    </div>

                    <div class="form-group">
                        <button class="btn btn-block btn-primary" type="button" name="addPost" id="addPost" @click="addPost()">add new post</button>
                    </div>

                    <section>
                        <button class="btn btn-success btn-block" type="button" @click="goBack()">go to posts page</button>
                    </section>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import PostsService from '@/services/PostsService'

    export default {
        data() {
            return {
                post: {
                    title: '',
                    description: ''
                }
            }
        },
        methods: {
            async addPost() {
                if(this.post.title !== '' && this.post.description !== '') {
                    await PostsService.addNewPost({
                        title: this.post.title,
                        description: this.post.description
                    })
                    this.$router.push('/posts')
                }else{
                    alert('Empty fields')
                }
            },
            goBack() {
                this.$router.push('/posts')
            }
        }    
    }
</script>
