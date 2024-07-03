<template>
	<section class="body-wrap tableList">
		<ListItem v-for="item in list" :key="item.id" :item="item"></ListItem>
	</section>
</template>
<script setup>
import { computed, nextTick, onMounted, ref } from "vue";
import ListItem from "./ListItem.vue";
console.time("list----");
const list = ref(
	Array.from({ length: 100 }, (_, i) => ({
		id: i + 1,
		title: `name${i + 1}`,
		expend: true,
		children: [],
	})),
);
console.timeEnd("list----");

onMounted(() => {
	list.value = Array.from({ length: 100 }, (_, i) => ({
		id: i + 1,
		title: `name${i + 1}`,
		expend: true,
		children: Array.from({ length: 100 }, (_, c) => ({
			id: `${i + 1}-${c + 1}`,
			title: `name${i + 1}-${c + 1}`,
			expend: false,
			children: Array.from({ length: 10 }, (_, d) => ({
				id: `${i + 1}-${c + 1}-${d + 1}`,
				title: `name${i + 1}-${c + 1}-${d + 1}`,
				children: [],
			})),
		})),
	}));
	nextTick(() => {
		const elements = document.querySelectorAll(".body-wrap.tableList .title");
		let isInitial = true;

		function callback(entries, instance) {
			entries.forEach((row) => {
				const title = row.target.dataset.title;
				// 判断是否在可视区域
				if (!row.isIntersecting) {
					// 离开可视区时设置实际高度进行占位 并使数据无法渲染
					if (!isInitial) {
						// row.target.style.height = `${row.target.clientHeight}px`
						row.target.innerHTML = null;
						// listData.value[index].visible = false;
					}
				} else {
					// 元素进入可视区，使数据可以渲染
					row.target.innerHTML = title;
					// listData.value[index].visible = true;
				}
			});
		}
		const observer = new IntersectionObserver(callback);
		elements.forEach((row) => {
			// 监听列表的每一行元素
			observer.observe(row);
		});
		isInitial = false;
	});
});
/**
 * IntersectionObserver 优势
 * 1. 性能消耗小，不会阻塞浏览器的渲染
 * 2. 支持加载更多内容
 * 3. 支持节流，减少回调函数的执行次数
 * 4. 支持监听多个元素，提高性能
 * 5. 支持监听元素进入可视区域、离开可视区域等事件
 *
 */
</script>
<style lang="less" scoped>
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
	// height: v-bind(bodyHeight);
	// overflow: hidden;
	height: 400px;
	overflow: auto;
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
