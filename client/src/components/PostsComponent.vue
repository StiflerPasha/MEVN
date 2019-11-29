<template>
  <v-container class="container">
    <h1 class="text-center">Latest Posts</h1>

    <v-row justify="end">
      <v-col cols="12" md="10">
        <v-textarea v-model="text"
                    :loading="loading"
                    label="Print something"
                    outlined
                    auto-grow
                    filled
                    rows="1"
                    hide-details
                    clearable>
        </v-textarea>
      </v-col>

      <v-col cols="4" sm="2">
        <v-btn outlined
               color="grey darken-3"
               :disabled="loading"
               @click="createdPost">Post!
          <v-icon dark right color="amber darken-3">
            {{ loading ? 'mdi-close-circle-outline' : 'mdi-checkbox-marked-circle'}}
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-divider/>

    <p class="error"
       v-if="error">
      {{ error }}
    </p>

    <v-row class="mt-3">
      <PostItemComponent v-for="post in posts"
                         :post="post"
                         @delete="deletePost"/>
    </v-row>
    <pre class="text-center red--text">\*Double click to delete*/</pre>
  </v-container>
</template>

<script>
  import PostService       from '../PostService';
  import PostItemComponent from './PostItemComponent';

  export default {
    name: 'PostComponent',
    components: { PostItemComponent },
    data() {
      return {
        posts: [],
        error: '',
        text: '',
        loading: true
      };
    },
    methods: {
      async createdPost() {
        this.loading = true;
        await PostService.insertPost(this.text);
        this.posts = await PostService.getPosts();
        this.loading = false;
        this.text = '';
      },
      async deletePost(id) {
        this.posts = this.posts.filter(p => p._id !== id);
        await PostService.deletePost(id);
        this.posts = await PostService.getPosts();
      }
    },
    async created() {
      try {
        this.posts = await PostService.getPosts();
        this.loading = false;
      } catch (err) {
        this.error = err.message;
      }
    }
  };
</script>

<style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  p.error {
    border: 1px solid #ff5b5f;
    background-color: #ffc5c1;
    padding: 10px;
    margin-bottom: 15px;
  }
</style>
