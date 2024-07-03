<template>
	<section class="box-wrap">
		<div class="box-item one">111</div>
		<div class="box-item two">
			<div class="item-title">测试标题</div>
			<div class="item-desc">测试描述测试描述测试描述测试描述</div>
			<div class="item-progress"></div>
		</div>
	</section>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

function increment() {
	count.value++;
}
</script>

<style scoped>
.box-item {
	width: 100%;
	height: 100vh;
	background-color: #7d8eee;
}
.two {
	position: relative;
	padding-left: 40px;
	view-timeline: --sectionReveal;
	background-color: #a496e0;
}
.item-progress {
	position: absolute;
	top: 20px;
	left: 10px;
	width: 3px;
	height: 200px;
	background-image: linear-gradient(to bottom, #492ad3 0%, transparent 100%);
}
.item-title {
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 20px;

	animation-timeline: --sectionReveal;
	animation-name: slideInLeft;
	animation-range: entry 40% entry 60%;
	animation-fill-mode: both;
}
.item-desc {
	animation-timeline: --sectionReveal;
	animation-name: slideInLeft;
	animation-range: entry 50% entry 70%;
	animation-fill-mode: both;
}

.item-progress {
	animation-timeline: --sectionReveal;
	animation-name: progress;
	animation-range: entry 50% entry 70%;
	animation-fill-mode: both;
}

@keyframes slideInLeft {
	from {
		transform: translateX(-15px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}

@keyframes progress {
	from {
		transform-origin: top;
		transform: scaleY(0);
	}
	to {
		transform-origin: top;
		transform: scaleY(100%);
	}
}
</style>
