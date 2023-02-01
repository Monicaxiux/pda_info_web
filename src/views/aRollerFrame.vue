<template>
    <dv-border-box11 title="A区辊架" class="box">
        <el-table :data="tableData" border class="table">
            <el-table-column prop="location" label="辊框位置"></el-table-column>
            <el-table-column prop="rollId1" label="1号辊槽"></el-table-column>
            <el-table-column prop="rollId2" label="2号辊槽"></el-table-column>
            <el-table-column prop="rollId3" label="3号辊槽"></el-table-column>
            <el-table-column prop="rollId4" label="4号辊槽"></el-table-column>
            <el-table-column prop="rollId5" label="5号辊槽"></el-table-column>
            <el-table-column prop="rollId6" label="6号辊槽"></el-table-column>
            <el-table-column prop="type" label="类型"></el-table-column>
            <el-table-column label="操作">
                <el-button size="small" @click="dialogVisible = true">查看详情</el-button>
            </el-table-column>
        </el-table>
    </dv-border-box11>
    <el-dialog v-model="dialogVisible" title="详情信息" width="30%" :before-close="handleClose">

    </el-dialog>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
    done()
}
const tableData = ref([
    {
        location: '001',
        rollId1: 'asd',
        rollId2: 'asd',
        rollId3: 'asd',
        rollId4: 'asd',
        rollId5: 'asd',
        rollId6: 'asd',
        type: '工作辊'
    },
    {
        location: '002',
        rollId1: 'asd',
        rollId2: 'asd',
        rollId3: 'asd',
        rollId4: 'asd',
        rollId5: 'asd',
        rollId6: 'asd',
        type: '中间辊'
    },
    {
        location: '003',
        rollId1: 'asd',
        rollId2: 'asd',
        rollId3: 'asd',
        rollId4: 'asd',
        rollId5: 'asd',
        rollId6: 'asd',
        type: '工作辊'
    },
    {
        location: '004',
        rollId1: 'asd',
        rollId2: 'asd',
        rollId3: 'asd',
        rollId4: 'asd',
        rollId5: 'asd',
        rollId6: 'asd',
        type: '中间辊'
    },
    {
        location: '005',
        rollId1: 'asd',
        rollId2: 'asd',
        rollId3: 'asd',
        rollId4: 'asd',
        rollId5: 'asd',
        rollId6: 'asd',
        type: '工作辊'
    }
])

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