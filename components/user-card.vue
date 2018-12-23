<template>
	<router-link :to="{ name: 'settings/user/edit', params: { id } }">
		<img :src="img" v-img-fallback="fallback" class="picture" border="0" width="48" height="48"/>
	</router-link>
</template>
<script>
import { ImgFallback } from 'v-img-fallback';

/**
 * @name UserCard
 * @prop {string} id
 */
export default {
	name: 'user-card',
	directives: {
		ImgFallback
	},
	props: {
		id: {
			type: String,
			required: true
		}
	},
	computed: {
		fallback() {
			return {
				loading: '/images/user.png',
				error: '/images/user.png'
			};
		}
	}
};
</script>
<style scoped>
a.user-list{
	float: left;
	padding: 10px;
	margin-right: 10px;
	margin-bottom: 24px;
	border: 1px solid #dedede;
	border-radius: 5px;
	line-height: 2rem;
	height: 10rem;
	width: 10rem;
	background: #e8e8e8;
}
a.user-list img{
	width: auto;
	max-width: 48px;
	height: 48px;
	margin-bottom: 16px;
}
</style>
