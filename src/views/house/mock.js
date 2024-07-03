import Mock from 'mockjs';
import setupMock, {successResponseWrap} from '@/utils/setup-mock';

const result = [];
function getNextSevenDaysData() {
    const weekDays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    const price = "¥1000";

    const today = new Date();

    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        const year = currentDate.getFullYear().toString();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        const week = weekDays[currentDate.getDay()];
        const is_lok = i % 2 === 0
        result.push({
            year: year,
            day: `${month}-${day}`,
            week: week,
            price: price,
            isLock:is_lok
        });
    }

    return result;
}
getNextSevenDaysData();

setupMock({
    setup() {
        Mock.mock(new RegExp('/api/house/list'), () => {
            return successResponseWrap([{
                defaultPicture: "https://pic.tujia.com/upload/landlordunit/day_240419/thumb/202404191714156824_700_467.jpg",
                unitName: "【时光里*谷雨】近地铁/可长租/近广交会/大学城/生物岛/黄埔军校/岭南印象园/带投影/可洗衣",
                unitSummaries: [],
                address: "方圆大学时光",
                roomList: [{
                    unitNo: "102",
                    rentSummaries: 'h',
                    selected:true,
                    unitPrices: result
                }, {
                    unitNo: "103",
                    selected:false,
                    rentSummaries: 'm',
                    unitPrices: result
                }, {
                    unitNo: "104",
                    selected:false,
                    rentSummaries: 'd',
                    unitPrices: result
                }, {
                    unitNo: "105",
                    selected:false,
                    rentSummaries: 'h',
                    unitPrices: result
                }, {
                    unitNo: "106",
                    selected:false,
                    rentSummaries: 'm',
                    unitPrices: result
                }, {
                    unitNo: "107",
                    selected:false,
                    rentSummaries: 'd',
                    unitPrices: result
                }]
            }]);
        });

        Mock.mock(new RegExp('/api/house/price-list'), () => {
            return successResponseWrap([{}])
        })

    },
});
