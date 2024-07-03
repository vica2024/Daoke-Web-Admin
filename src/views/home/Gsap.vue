<template>
	<section class="box-wrap">
		<div class="box-item one project-wrap-one">
			<div class="project-wrap">
				<div class="label" v-for="item in [...$t('home.head.name')]" :key="item">
					{{ item }}
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";

onMounted(() => {
	startRun();
});
const startRun = () => {
	// let tl = gsap.timeline({  };也是可以的
	let tl = gsap.timeline({
		duration: 1,
		// scrollTrigger: {
		// 	trigger: ".project-wrap-one",
		// 	start: "0% 90%",
		// 	end: "0% 90%",
		// 	toggleActions: "play none reverse none",
		// },
	});

	// 开始基于时间线做一些动画 结合上面的 gsap.to 和 gsap.from
	tl.from(".project-wrap .label", {
		y: -50,
		opacity: 0,
		stagger: 0.2,
		ease: "elastic.out(1, 0.3)",
	});
	// tl.from(".project-wrap .label", {
	// 	stagger: 0.2,
	// 	duration: 2,
	// 	startAt: 0.5,
	// });
};
</script>
<style lang="less" scoped>
.item-box {
	width: 100%;
}
.box-item {
	width: 100%;
	height: 100vh;
}
.one {
	padding-top: 10%;
	background-color: #000;
}
.project-wrap {
	position: absolute;
	display: flex;
	top: 10%;
	left: 50%;
	height: 50px;
	transform: translateX(-50%);
	overflow: hidden;
}
.label {
	font-size: 40px;
	color: #fff;
	// transform: translateY(-100%);
}
</style>
