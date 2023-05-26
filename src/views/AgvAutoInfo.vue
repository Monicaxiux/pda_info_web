<template>
    <dv-border-box11 title="AGV半自动任务" class="box">
        <el-table :data="tableData" border class="table">
            <el-table-column prop="ename" label="设备名称"></el-table-column>
            <el-table-column prop="startName" label="起点区域"></el-table-column>
            <el-table-column prop="start" label="起点位置"></el-table-column>
            <el-table-column prop="fname" label="终点区域"></el-table-column>
            <el-table-column prop="end" label="终点位置"></el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
            <el-table-column prop="okTime" label="完成时间"></el-table-column>
            <el-table-column label="任务状态">
                <template #default="scope">
                    <el-tag class="ml-2" v-if="scope.row.status == 0" type="warning">待发送
                    </el-tag>
                    <el-tag class="ml-2" v-if="scope.row.status == 1">已发送</el-tag>
                    <el-tag class="ml-2" v-if="scope.row.status == 2" type="success">已完成
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button @click="upd(scope.row)">确认</el-button>
                </template>
            </el-table-column>
        </el-table>
    </dv-border-box11>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { selectAgvCarryInfo, updateAGVChild } from '@/api'
import { Alex } from '@/types';
import { ElMessage } from 'element-plus';

const tableData = ref([]);
onMounted(() => {
    selectDtat();
})
const selectDtat = () => {
    selectAgvCarryInfo().then((res: any) => {
        tableData.value = res.result.agvCarryList
    })
}
const upd = (row: any) => {
    let alex = new Alex
    alex.parameter = {
        rimNum: row.rimNum
    }
    updateAGVChild(alex).then((res: any) => {
        ElMessage({
            message: '操作成功！',
            type: 'success',
        })
        selectDtat();
    })
}
</script>
<style scoped>
.table {
    height: 70vh;
    margin: 50px auto;
    width: 95%;
}

.box {
    width: 1600px;
    display: flex;
    height: 80vh;
    margin: 0 auto;
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