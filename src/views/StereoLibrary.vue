<template>
    <div>
        <el-input style="width: 200px;margin-right: 10px;" v-model="form.userName" clearable placeholder="请输入直径" />
        <el-button type="primary" class="button" @click="getData">查询</el-button>

    </div>>
    <div style="width:100%;display:flex">
        <dv-border-box11 title="立体库数据" class="box">
            <el-table :data="tableData1" border class="table">
                <el-table-column label="轧辊号">
                    <template #default="scope">
                        <span v-if="scope.row.agv_roller">{{ scope.row.agv_roller.rollerName }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="slotPosition" label="设备名称"></el-table-column>
                <el-table-column prop="difference" label="起点区域"></el-table-column>
            </el-table>
        </dv-border-box11>
        <dv-border-box11 title="立体库数据" class="box">
            <el-table :data="tableData2" border class="table">
                <el-table-column label="轧辊号">
                    <template #default="scope">
                        <span v-if="scope.row.agv_roller">{{ scope.row.agv_roller.rollerName }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="slotPosition" label="设备名称"></el-table-column>
                <el-table-column prop="difference" label="起点区域"></el-table-column>
            </el-table>
        </dv-border-box11>
        <dv-border-box11 title="立体库数据" class="box">
            <el-table :data="tableData3" border class="table">
                <el-table-column label="轧辊号">
                    <template #default="scope">
                        <span v-if="scope.row.agv_roller">{{ scope.row.agv_roller.rollerName }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="slotPosition" label="设备名称"></el-table-column>
                <el-table-column prop="difference" label="起点区域"></el-table-column>
            </el-table>
        </dv-border-box11>
        <dv-border-box11 title="立体库数据" class="box">
            <el-table :data="tableData4" border class="table">
                <el-table-column label="轧辊号">
                    <template #default="scope">
                        <span v-if="scope.row.agv_roller">{{ scope.row.agv_roller.rollerName }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="slotPosition" label="设备名称"></el-table-column>
                <el-table-column prop="difference" label="起点区域"></el-table-column>
            </el-table>
        </dv-border-box11>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { selectFrameByType } from '@/api'
import { Alex } from '@/types';
import { ElMessage } from 'element-plus';
const tableData = ref([]);
const tableData1 = ref([]);
const tableData2 = ref([]);
const tableData3 = ref([]);
const tableData4 = ref([]);
const form = ref({
    userName: ''
});
const getData = () => {

}
onMounted(() => {
    selectDtat();
})
const selectDtat = () => {
    let alex = new Alex
    alex.parameter = {
        flag: '立体库',
    }
    selectFrameByType(alex).then((res: any) => {
        tableData.value = res.result.getFrameTypeAll;
        for (let i = 0; i < 50; i++) {
            tableData1.value.push(tableData.value[i]);
        }
        for (let i = 50; i < 100; i++) {
            tableData2.value.push(tableData.value[i]);
        }
        for (let i = 100; i < 150; i++) {
            tableData3.value.push(tableData.value[i]);
        }
        for (let i = 150; i < 202; i++) {
            tableData4.value.push(tableData.value[i]);
        }
    })
}
const upd = (row: any) => {
    // let alex = new Alex
    // alex.parameter = {
    //     stepNumber: 'step1',
    // }
    // updateFrameChild(alex).then((res: any) => {
    //     ElMessage({
    //         message: '操作成功！',
    //         type: 'success',
    //     });
    //     selectDtat();
    // })
}
</script>
<style scoped>
.table {
    height: 70vh;
    margin: 50px auto;
    width: 95%;
}

.box {
    width: 400px;
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