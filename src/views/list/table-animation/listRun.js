import { computed, nextTick, onMounted, ref } from "vue";

/**
 *
 * @param { Array } allData- 数据 []
 * @param { Number} showNum - 展示数据数 number
 * @param { Number } spare- 预留几个
 * @param { Number} itemHeight- 列高度
 * @param { Number } runTime- 滚动时间
 * @param { Number} intervalTime- 滚动后停顿时间
 * @param { Boolean } isLoop- 是否循环滚动
 * @param { 0 | 1 } flow- 滚动方向， 默认0  0下 1上
 */
export function useListRun({
	allData = [],
	showNum = 6,
	spare = 2,
	itemHeight = 40,
	runTime = 1000,
	intervalTime = 500,
	isLoop = true,
	flow = 0,
}) {
	const animationData = ref([]);
	const defaultTranslateY = -spare * itemHeight;
	const translateY = ref(defaultTranslateY);
	const isShowAnimationClass = ref(false);
	const isLoop = true;
	let timeR = null;
	let startNum = 0;

	const getShowData = (startNum) => {
		if (startNum >= allData.length) {
			startNum = startNum - allData.length;
		}
		const arr = allData.slice(startNum, startNum + showNum + spare);
		if (isLoop && startNum + showNum + spare > allData.length) {
			arr.push(...allData.slice(0, startNum + showNum + spare - allData.length));
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

	return {
		animationData,
		run,
		stopNext,
	};
}
