<template>
  <v-app>
    <v-app-bar app
               dark>
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo"
               class="shrink mr-2"
               contain
               src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
               transition="scale-transition"
               width="40"/>

        <v-img alt="Vuetify Name"
               class="shrink mt-1 hidden-sm-and-down"
               contain
               min-width="100"
               src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
               width="100"/>
      </div>

      <v-spacer/>

      <v-btn href="https://github.com/StiflerPasha"
             target="_blank"
             text>
        <span class="mr-2">Check my GitHub</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content class="content">

      <PostsComponent/>

    </v-content>
  </v-app>
</template>

<script>
  import PostsComponent from './components/PostsComponent';

  export default {
    name: 'App',

    components: {
      PostsComponent
    }
  };
</script>

<style scoped>
  .content {
    background-color: wheat;
  }
</style>
