<template>
  <v-col cols="12" class="post pt-0"
         @dblclick="() => this.$emit('delete', post._id)">
    <v-card color="#242424">

      <v-row>
        <v-col cols="auto" class="delete d-flex align-center ml-2"
               @click="() => this.$emit('delete', post._id)">
          <v-btn icon>
            <v-icon>mdi-trash-can-outline</v-icon>
          </v-btn>
        </v-col>

        <v-col class="pl-0">
          <v-card-text class="text-center amber--text text--darken-3">
            {{post.text}}
          </v-card-text>

          <v-divider dark/>

          <p class="mb-0 pr-4 caption blue--text text--lighten-1 text-right">
            {{ `${post.createdAt.toLocaleDateString()}` }}
          </p>
        </v-col>
      </v-row>

    </v-card>
  </v-col>
</template>

<script>
  export default {
    name: 'PostItemComponent',
    props: ['post']
  };
</script>

<style scoped>
  .delete {
    background-color: darkred;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .delete:hover {
    cursor: pointer;
  }
</style>
