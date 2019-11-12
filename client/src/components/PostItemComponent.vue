<template>
	<v-col class="pt-0" cols="12" md="6"
	       @dblclick="() => this.$emit('delete', post._id)">
		<v-card color="#242424">
			<v-card-text class="text-center amber--text text--darken-3">
				{{post.text}}
			</v-card-text>
			<v-divider dark></v-divider>
			<p class="pa-1 caption blue--text text--lighten-1 text-right">
				{{ `${post.createdAt.toLocaleDateString()}` }}
			</p>
		</v-card>
	</v-col>
</template>

<script>
	export default {
		name: 'PostItemComponent',
		props: ['post'],
	};
</script>

<style scoped>

</style>
