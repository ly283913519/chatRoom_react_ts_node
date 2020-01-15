// store 的props接口校验
import { GlobalStore as GlobalStoreModel} from "./index";

// 将这个命名空间作为全局变量的方式来访问
export as namespace IGlobalStore;

// 同时导出这个命名空间中的接口，这个接口以类作为数据类型校验
export interface GlobalStore extends GlobalStoreModel{}