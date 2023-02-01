<template>
    <dv-border-box11 title="机器人半自动任务" class="box">
        <el-table :data="tableData" border class="table">
            <el-table-column prop="rollNo" label="轧辊号"></el-table-column>
            <el-table-column prop="ename" label="设备名称"></el-table-column>
            <el-table-column prop="rootHead" label="辊头方向"></el-table-column>
            <el-table-column prop="startName" label="起点区域"></el-table-column>
            <el-table-column prop="start" label="起点位置"></el-table-column>
            <el-table-column prop="endName" label="终点区域"></el-table-column>
            <el-table-column prop="end" label="终点位置"></el-table-column>
            <el-table-column prop="level" label="优先级">
                <template #default="scope">
                    <el-tag class="ml-2" type="success">{{ scope.row.level }}
                    </el-tag>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <el-button>编辑</el-button>
                </template>
            </el-table-column>
            <el-table-column label="任务状态">
                <template #default="scope">
                    <el-tag class="ml-2" v-if="scope.row.status == 1" type="warning">待发送
                    </el-tag>
                    <el-tag class="ml-2" v-if="scope.row.status == 2">已发送</el-tag>
                    <el-tag class="ml-2" v-if="scope.row.status == 3" type="success">已完成
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button>删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </dv-border-box11>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { selectGrindCarryInfo } from '@/api'
const tableData = ref([]);
onMounted(() => {
    selectGrindCarryInfo().then((res: any) => {

    })
})

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