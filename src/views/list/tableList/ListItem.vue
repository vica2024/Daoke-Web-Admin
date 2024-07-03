<template>
	<div :class="['content', props.item.expend && 'expend']">
		<div class="title" :data-title="props.item.title" @click="props.item.expend = !props.item.expend"></div>
		<div class="body">
			<ListItem v-for="child in item.children" :key="child.id" :item="child"></ListItem>
		</div>
	</div>
</template>

<script setup>
defineOptions({
	name: "ListItem",
});
const props = defineProps({
	item: {
		type: Object,
		default: () => ({}),
	},
});
</script>
<style scoped>
.content > .body {
	display: none;
}
.content.expend > .body {
	display: block;
}
.title {
	height: 40px;
	cursor: pointer;
	background-color: #f5f5f5;
}
</style>
