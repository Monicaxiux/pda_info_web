import request from "@/utils/request";
//查询辊架信息
export const getFrame = (() => {
    return request({
        url: '/frame/selectFrameListPostData',
        method: 'post'
    })
})
//用户登陆
export const login = ((eilnfoData: any) => {
    return request({
        url: '/user/login',
        method: 'post',
        data: eilnfoData
    }) as any
})
//修改辊架
export const updateFrame = ((AlexData: any) => {
    return request({
        url: '/frame/updateFrameData',
        method: 'post',
        data: AlexData
    }) as any
})
//查询辊架子任务
export const getFrameChild = ((AlexData: any) => {
    return request({
        url: '/frame/selectChildAllAndInfo',
        method: 'post',
        data: AlexData
    }) as any
})

//修改子任务信息
export const updateFrameChild = ((AlexData: any) => {
    return request({
        url: '/frame/updateGrindChildData',
        method: 'post',
        data: AlexData
    }) as any
})

//修改机器人状态
export const updateElectronic = ((AlexData: any) => {
    return request({
        url: '/electronic/updateElectronicAndData',
        method: 'post',
        data: AlexData
    }) as any
})

//删除主任务
export const remFrame = ((AlexData: any) => {
    return request({
        url: '/grind/deleteGrindById',
        method: 'post',
        data: AlexData
    }) as any
})

//添加主任务
export const addFrame = ((AlexData: any) => {
    return request({
        url: '/frame/insertStepAndData',
        method: 'post',
        data: AlexData
    }) as any
})

//查询人工检测数据
export const getDcad = (() => {
    return request({
        url: '/detection/selectDetectionAndData',
        method: 'post'
    }) as any
})

//修改人工检测数据
export const updateDcad = ((AlexData: any) => {
    return request({
        url: '/detection/updateDetection',
        method: 'post',
        data: AlexData
    }) as any
})