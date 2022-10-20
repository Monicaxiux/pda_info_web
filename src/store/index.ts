import { defineStore } from "pinia";
export const piniaData = defineStore("piniaData", {
    state: () => {
        return {
            status: <string>'测试',
            userInfo: <any>{}
        };
    },
    getters: {},
    actions: {},
    persist: {
        // 开启数据存储持久化（刷新页面不丢失）
        enabled: true,
        strategies: [
            {
                key: 'piniaData',
                storage: localStorage
            }
        ]
    }
});