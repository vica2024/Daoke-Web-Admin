import localeMessageBox from "@/components/message-box/locale/en-US";
import localeHome from "@/views/home/locale/en-US";
import localeLogin from "@/views/login/locale/en-US";

import localeWorkplace from "@/views/dashboard/workplace/locale/en-US";

import localeMonitor from "@/views/dashboard/monitor/locale/en-US";

import localeCardList from "@/views/list/card/locale/en-US";
import localeSearchTable from "@/views/list/search-table/locale/en-US";
import localeAnimation from "@/views/list/table-animation/locale/en-US";
import localeList from "@/views/list/tableList/locale/en-US";

import localeGroupForm from "@/views/form/group/locale/en-US";
import localeStepForm from "@/views/form/step/locale/en-US";

import localeBasicProfile from "@/views/profile/basic/locale/en-US";

import localeDataAnalysis from "@/views/visualization/data-analysis/locale/en-US";
import localeMultiDAnalysis from "@/views/visualization/multi-dimension-data-analysis/locale/en-US";

import localeError from "@/views/result/error/locale/en-US";
import localeSuccess from "@/views/result/success/locale/en-US";

import locale403 from "@/views/exception/403/locale/en-US";
import locale404 from "@/views/exception/404/locale/en-US";
import locale500 from "@/views/exception/500/locale/en-US";

import localeUserInfo from "@/views/user/info/locale/en-US";
import localeUserSetting from "@/views/user/setting/locale/en-US";

import localeSettings from "./en-US/settings";

import localeHouse from "@/views/house/locale/en-US";

export default {
	"menu.dashboard": "Dashboard",
	"menu.server.dashboard": "Dashboard-Server",
	"menu.server.workplace": "Workplace-Server",
	"menu.dashboard.operator":"Operator",
	"menu.server.monitor": "Monitor-Server",
	"menu.list": "List",
	"menu.house":"House Manage",
	"menu.house.list":"House List",
	"menu.house.state":"House State",
	"menu.house.price":"House Price",
	"menu.result": "Result",
	"menu.exception": "Exception",
	"menu.form": "Form",
	"menu.profile": "Profile",
	"menu.visualization": "Data Visualization",
	"menu.userList": "User List",
	"menu.user": "User Center",
	"menu.arcoWebsite": "Arco Design",
	"menu.lock.management":"Smart Lock",
	"menu.faq": "FAQ",
	"navbar.docs": "Docs",
	"navbar.action.locale": "Switch to English",

	"modal.title.add": "Add",
	"modal.title.edit": "Edit",
	"modal.title.view": "View",
	"modal.footer.cancel": "Cancel",
	"modal.footer.ok": "Ok",
	"modal.footer.save": "Save",
	"modal.footer.delete": "Delete",

	"message.success.add": "Add Succeeded",
	"message.success.edit": "Edit Succeeded",
	"message.success.delete": "Delete Succeeded",
	"message.success.operations": "Action Succeeded",
	"message.error.add": "Add Error",
	"message.error.edit": "Edit Error",
	"message.error.delete": "Delete Error",
	"message.error.operations": "Action Failed",

	...localeSettings,
	...localeMessageBox,
	...localeLogin,
	...localeHome,
	...localeWorkplace,

	...localeMonitor,
	...localeSearchTable,
	...localeCardList,
	...localeAnimation,
	...localeList,
	...localeStepForm,
	...localeGroupForm,
	...localeBasicProfile,
	...localeDataAnalysis,
	...localeMultiDAnalysis,
	...localeSuccess,
	...localeError,
	...locale403,
	...locale404,
	...locale500,
	...localeUserInfo,
	...localeUserSetting,
	...localeHouse,
};
