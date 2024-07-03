<template>
	<section class="body-wrap">
		<div
			:class="['body-content', isShowAnimationClass ? 'body-content-transition' : '']"
			ref="bodyContent"
			:style="{
				transform: `translateY(${translateY}px)`,
			}"
		>
			<div class="item-wrap" v-for="(item, index) in animationData">
				<!-- 模块内容 -->
				<span class="item-content">{{ item }}</span>
			</div>
		</div>
		<div class="btn-wrap">
			<a-button class="btn" @click="run">开始</a-button>
			<a-button class="btn" @click="stopNext">停止</a-button>
		</div>
	</section>
</template>
<script setup>
import { computed, nextTick, onMounted, ref } from "vue";

const allData = ref(Array.from({ length: 15 }, (_, i) => i + 1));
const animationData = ref([]);
const showNum = 6;
const spare = 2;
const itemHeight = 40;
const defaultTranslateY = -spare * itemHeight;
const translateY = ref(defaultTranslateY);
const bodyContent = ref(null);
const runTime = 1000;
const runTimeBind = runTime + "ms";
const intervalTime = 500;
const bodyHeight = computed(() => showNum * itemHeight + "px");
const isShowAnimationClass = ref(false);

const isLoop = true;
// const runTimeS = computed(() => {
// 	return runTime.value / 1000 + "s";
// });

let timeR = null;

let startNum = 0;

const getShowData = (startNum) => {
	if (startNum >= allData.value.length) {
		startNum = startNum - allData.value.length;
	}
	const arr = allData.value.slice(startNum, startNum + showNum + spare);
	if (isLoop && startNum + showNum + spare > allData.value.length) {
		arr.push(...allData.value.slice(0, startNum + showNum + spare - allData.value.length));
	}
	// 动画数据
	animationData.value = arr.reverse();
};
getShowData(0);

const handleNext = () => {
	startNum = startNum + spare;
	getShowData(startNum);
};
const run = () => {
	clearTimeout(timeR);
	if (translateY.value >= 0) {
		console.log("111---", Date.now());
		isShowAnimationClass.value = false;
		// 回到初始值
		translateY.value = defaultTranslateY;
		handleNext();
		timeR = setTimeout(() => {
			run();
		}, intervalTime);
	} else {
		console.log("222---", Date.now());
		isShowAnimationClass.value = true;
		translateY.value = translateY.value + itemHeight;
		timeR = setTimeout(() => {
			run();
		}, runTime + intervalTime);
	}
};
const stopNext = () => {
	clearTimeout(timeR);
};
</script>
<style>
.item-wrap {
	padding: 5px 0;
	height: 40px;
	line-height: 40px;
	text-align: center;
	color: #683bd6;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 0 2px rgba(0, 0, 0, 0.1) inset;
	/* transition: all 0.3s ease-in-out; */
}
.item-content {
	display: flex;
	box-sizing: border-box;
	border-left: 2px solid #683bd6;
	padding-left: 10px;
	width: 100%;
}
.body-wrap {
	position: relative;
	height: v-bind(bodyHeight);
	overflow: hidden;
}
.body-content {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	transform: translateY(0);
}
.body-content-transition {
	transition: transform v-bind("runTimeBind") linear;
}
.btn-wrap {
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
}
</style>
