import request from "@/utils/requests";

//用户登陆
export const login = ((eilnfoData: any) => {
    return request({
        url: '/user/login',
        method: 'post',
        data: eilnfoData
    }) as any
})


//查询辊架信息
export const getFrame = (() => {
    return request({
        url: '/frame/selectFrameListPostData',
        method: 'post'
    })
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
        url: '/grind/selectOtherStepInfo',
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
        url: '/grind/updateGrindByIdInfo',
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

//查询磨床的基本信息
export const getFrameInfo = ((AlexData: any) => {
    return request({
        url: '/frame/selectFrameInfoData',
        method: 'post',
        data: AlexData
    }) as any
})

//查询主任务信息
export const getGrindAllAndData = ((AlexData: any) => {
    return request({
        url: '/grind/selectGrindParameterData',
        method: 'post',
        data: AlexData
    }) as any
})

//查询子任务信息
export const getOtherStepInfo = ((AlexData: any) => {
    return request({
        url: '/grind/selectOtherStepInfo',
        method: 'post',
        data: AlexData
    }) as any
})

//查询AGV主任务信息
export const getAGVGrindAllAndData = ((AlexData: any) => {
    return request({
        url: '/AgvMain/selectAgv_Main_All',
        method: 'post',
        data: AlexData
    }) as any
})

//查询AGV子任务信息
export const getAGVOtherStepInfo = ((AlexData: any) => {
    return request({
        url: '/AgvMain/selectAgvMainOtherStepInfo',
        method: 'post',
        data: AlexData
    }) as any
})

//修改子任务信息
export const updateAGVChild = ((AlexData: any) => {
    return request({
        url: '/AgvMain/updateCurrentStepOrInfo',
        method: 'post',
        data: AlexData
    }) as any
})

//AGV半自动任务数据
export const selectAgvCarryInfo = (() => {
    return request({
        url: '/Agv_Carry/selectAgvCarryInfo',
        method: 'post'
    }) as any
})

//机器人半自动任务数据
export const selectGrindCarryInfo = (() => {
    return request({
        url: '/Grind_Carry/selectGrindCarryInfo',
        method: 'post'
    }) as any
})

//根据具体位置查询所有的轧辊信息
export const selectAgvFrameRegionMany = ((AlexData: any) => {
    return request({
        url: '/AgvMain/selectAgvFrameRegionMany',
        method: 'post',
        data: AlexData
    }) as any
})

//制定计划添加数据
export const insertProduce = ((AlexData: any) => {
    return request({
        url: '/Produce/insertProduce',
        method: 'post',
        data: AlexData
    }) as any
})
//根据主任务数据查询终止的数据信息
export const selectGrindParameterTry = ((AlexData: any) => {
    return request({
        url: '/grind/selectGrindParameterTry',
        method: 'post',
        data: AlexData
    }) as any
})