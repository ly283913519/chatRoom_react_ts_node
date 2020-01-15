// 全局store文件
import { observable, action} from "mobx";

export class GlobalStore {

    // 测试用数字
    @observable
    num: number = 0;

    // 增加数字
    @action
    increase = () => {
        this.num++;
    };

    // 减少数字
    @action
    decrease = () => {
      this.num--;
    };
}

export default new GlobalStore();