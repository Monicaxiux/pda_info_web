<template>
    <div class="">
        <dv-border-box11 title="AGV设备" class="box">
            <el-table :data="tableData" border class="table">
                <el-table-column prop="ename" label="设备名称"></el-table-column>
                <el-table-column prop="startName" label="起点区域"></el-table-column>
                <el-table-column prop="start" label="起点位置"></el-table-column>
                <el-table-column prop="endName" label="终点区域"></el-table-column>
                <el-table-column prop="end" label="终点位置"></el-table-column>
                <el-table-column label="设备状态">
                    <template #default="scope">
                        <div v-if="scope.row">
                            <el-tag class="ml-2" v-if="scope.row.estatus == '2'" type="warning">工作中
                            </el-tag>
                            <el-tag class="ml-2" v-if="scope.row.estatus == '3'" type="warning">允许上料
                            </el-tag>
                            <el-tag class="ml-2" v-if="scope.row.estatus == '1'" type="success">允许下料
                            </el-tag>
                            <el-tag class="ml-2" v-if="scope.row.estatus == '4'" type="success">请求上料
                            </el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="任务状态">
                    <template #default="scope">
                        <div v-if="scope.row">
                            <el-tag class="ml-2" v-if="scope.row.taskStatus == '0'" type="warning">空闲
                            </el-tag>
                            <el-tag class="ml-2" v-if="scope.row.taskStatus == '1'" type="warning">占用
                            </el-tag>
                            <el-tag class="ml-2" v-if="scope.row.taskStatus == '2'" type="success">完成
                            </el-tag>
                        </div>
                    </template>
                </el-table-column>
            </el-table>

        </dv-border-box11>
        <dv-border-box11 title="机器人设备" class="box">
            <el-table :data="tableData2" border class="table">
                <el-table-column prop="ename" label="设备名称"></el-table-column>
                <el-table-column prop="startName" label="起点区域"></el-table-column>
                <el-table-column prop="start" label="起点位置"></el-table-column>
                <el-table-column prop="endName" label="终点区域"></el-table-column>
                <el-table-column prop="end" label="终点位置"></el-table-column>
                <el-table-column label="设备状态">
                    <template #default="scope">
                        <div v-if="scope.row">
                            <el-tag class="ml-2" v-if="scope.row.estatus == '2'" type="warning">工作中
                            </el-tag>
                            <el-tag class="ml-2" v-if="scope.row.estatus == '3'" type="warning">允许上料
                            </el-tag>
                            <el-tag class="ml-2" v-if="scope.row.estatus == '1'" type="success">允许下料
                            </el-tag>
                            <el-tag class="ml-2" v-if="scope.row.estatus == '4'" type="success">请求上料
                            </el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="任务状态">
                    <template #default="scope">
                        <div v-if="scope.row">
                            <el-tag class="ml-2" v-if="scope.row.jobStatus == '0'" type="warning">空闲
                            </el-tag>
                            <el-tag class="ml-2" v-if="scope.row.jobStatus == '1'" type="warning">占用
                            </el-tag>
                            <el-tag class="ml-2" v-if="scope.row.jobStatus == '2'" type="success">完成
                            </el-tag>
                        </div>
                    </template>
                </el-table-column>
            </el-table>

        </dv-border-box11>
    </div>
</template>

<script setup lang="ts">
import { getAgvEquipment } from '@/api'
import { onMounted, ref } from 'vue'
import { Alex } from '@/types'
const tableData = ref([])
const tableData2 = ref([])

const getData = () => {
    let alex = new Alex()
    getAgvEquipment(alex).then((res: any) => {
        tableData2.value = res.result.equipmentList
        tableData.value = res.result.selectAgvEquipmentList
    })
}
onMounted(() => {
    getData()
})
</script>
<style lang="less" scoped>
.table {
    height: 35vh;
    margin: 50px auto;
    width: 95% !important;
}

.box {
    /* width: 400px; */
    display: flex;
    height: 45vh;
    margin: 0 auto;
}

:deep(.el-table__expand-icon > .el-icon) {
    color: white;
}

:deep(.el-table--enable-row-transition .el-table__body td.el-table__cell) {
    background: none;
}

:deep(.el-table) {
    font-size: 12px;
    --el-table-border-color: #7794e3;
}

:deep(.el-table--fit) {
    /* background-color: #ffffff00; */
    backdrop-filter: blur(1px);
    background-color: #111e7038;
}

:deep(.el-table thead.is-group th.el-table__cell) {
    /* background-color: white;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           color: black; */
    background-color: #ffffff00;
    color: white;
    backdrop-filter: blur(1px);
    font-weight: bold;
}

:deep(.el-table th.el-table__cell) {
    backdrop-filter: blur(1px);
    background-color: #111e7038;
    /* background-color: #ffffff5e; */
}

:deep(.el-table thead.is-group th.el-table__cell:hover) {
    color: black;
}

:deep(.el-table tr) {
    background-color: #ffffff00;
    /* background-color: transparent; */
    color: white;
}

:deep(.el-table tr:hover) {
    color: black;
    background-color: white;
}
</style>
