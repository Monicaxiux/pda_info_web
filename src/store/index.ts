import { defineStore } from "pinia";
export const piniaData = defineStore("piniaData", {
    state: () => {
        return {
            userInfo: <any>{},
            active:''
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