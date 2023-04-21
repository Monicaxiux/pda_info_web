import request from "@/utils/request";

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
export const getDcad = ((AlexData: any) => {
    return request({
        url: '/detection/getDetectionOne',
        method: 'post',
        data: AlexData
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

//分开查询指定所有的辊架的信息
export const selectAgvFrameAppointInfo = ((AlexData: any) => {
    return request({
        url: '/AgvMain/selectAgvFrameStatusInfo',
        method: 'post',
        data: AlexData
    }) as any
})

//半自动数据的添加
export const selectAgv_CarryInfo = ((AlexData: any) => {
    return request({
        url: '/AgvMain/selectAgv_CarryInfo',
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

//根据主任号查询所有的任务信息
export const selectProduceAll = ((AlexData: any) => {
    return request({
        url: '/Produce/selectProduceAll',
        method: 'post',
        data: AlexData
    }) as any
})

//根据具体位置查询区域
export const selectAgvFramePositionInfo = ((AlexData: any) => {
    return request({
        url: '/AgvMain/selectAgvFramePositionInfo',
        method: 'post',
        data: AlexData
    }) as any
})

//添加agv的半自动出库
export const insertOutMainList = ((AlexData: any) => {
    return request({
        url: '/OutMain/insertOutMainList',
        method: 'post',
        data: AlexData
    }) as any
})

//查询所有的出库主任务数据
export const getOutMainListAll = ((AlexData: any) => {
    return request({
        url: '/OutMain/getOutMainListAll',
        method: 'post',
        data: AlexData
    }) as any
})

//根据主任务号查询所有的出库子任务的数据
export const getOutBoxListChild = ((AlexData: any) => {
    return request({
        url: '/OutBox/getOutBoxListChild',
        method: 'post',
        data: AlexData
    }) as any
})

//添加半自动的单步任务数据信息
export const insertGrind_Carry = ((AlexData: any) => {
    return request({
        url: '/Grind_Carry/insertGrind_Carry',
        method: 'post',
        data: AlexData
    }) as any
})

//查询指定区域辊架的数据信息
export const selectFrameByType = ((AlexData: any) => {
    return request({
        url: '/frame/selectFrameLiTiKuType',
        method: 'post',
        data: AlexData
    }) as any
})

//查询所有的辊架的信息
export const getAgvFrame = (() => {
    return request({
        url: '/AgvMain/getAgvFrame',
        method: 'post'
    }) as any
})

//根据具体位置查询区域数据信息
export const selectFrameRegionAndType = ((AlexData: any) => {
    return request({
        url: '/frame/selectFrameRegionAndType',
        method: 'post',
        data: AlexData
    }) as any
})

//修改中间辊辊号的数据信息
export const updateAgvRollerParameterKey = ((AlexData: any) => {
    return request({
        url: '/AgvRoller/updateAgvRollerParameterKey',
        method: 'post',
        data: AlexData
    }) as any
})

//人工确认出库状态的修改
export const updateAgvMainParameterKey = ((AlexData: any) => {
    return request({
        url: '/AgvMain/updateAgvMainParameterKey',
        method: 'post',
        data: AlexData
    }) as any
})

//查询立体库的分页数据信息
export const selectFramePageSize = ((AlexData: any) => {
    return request({
        url: '/frame/selectFramePageSize',
        method: 'post',
        data: AlexData
    }) as any
})

//添加立体库出库的数据信息
export const insertOutCarryInto = ((AlexData: any) => {
    return request({
        url: '/Grind_Carry/insertOutCarryInto',
        method: 'post',
        data: AlexData
    }) as any
})

//查询立体库所有的分页数据信息
export const selectFramePageFrameAll = ((AlexData: any) => {
    return request({
        url: '/frame/selectFramePageFrameAll',
        method: 'post',
        data: AlexData
    }) as any
})

//查询AGV所有的分页数据信息
export const selectAgvFramePageAll = ((AlexData: any) => {
    return request({
        url: '/AgvMain/selectAgvFramePageAll',
        method: 'post',
        data: AlexData
    }) as any
})

//修改辊架的数据信息
export const updateFrameByIdStatus = ((AlexData: any) => {
    return request({
        url: '/frame/updateFrameData',
        method: 'post',
        data: AlexData
    }) as any
})

//释放工位和占用工位的方法
export const updateAgvFrameList = ((AlexData: any) => {
    return request({
        url: '/AgvMain/updateAgvFrameList',
        method: 'post',
        data: AlexData
    }) as any
})

//强行完成设备的任务信息
export const updateAgvEquipmentAndData = ((AlexData: any) => {
    return request({
        url: '/AgvEquipment/updateAgvEquipmentAndData',
        method: 'post',
        data: AlexData
    }) as any
})
