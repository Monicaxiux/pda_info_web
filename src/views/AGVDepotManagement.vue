<template>
    <div style="display:flex">
        <el-input placeholder="请输入工位号" v-model="name" style="width: 130px;margin-right: 10px;" />
        <el-button type="primary" size="large" class="button" @click="selectDtat();">查询</el-button>
    </div>
    <div style="width:100%;display:flex">
        <dv-border-box11 title="" class="box">
            <el-table :data="tableData" border class="table">
                <el-table-column prop="position" label="位置"></el-table-column>
                <el-table-column label="辊框状态">
                    <template #default="scope">
                        <a v-if="scope.row.position == 'B01'">
                            <el-tag class="ml-2" v-if="scope.row.emptyStatus == 0" type="warning">未占用</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.emptyStatus == 1" type="success">已占用</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.emptyStatus == 2" type="success">已占用</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.emptyStatus == 3" type="success">已占用</el-tag>
                        </a>
                        <a v-else>
                            <el-tag class="ml-2" v-if="scope.row.emptyStatus == 0" type="warning">未占用</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.emptyStatus == 1" type="success">已占用</el-tag>
                        </a>

                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <el-button type="primary" class="button" @click="upd(scope.row, scope.row.emptyStatus ==
                            1 ? 2 : 1, 1)">{{ scope.row.emptyStatus ==
        1 ? '释放' : '占用' }}</el-button>
                    </template>
                </el-table-column>
                <el-table-column label="蓝色托架状态">
                    <template #default="scope">
                        <el-tag class="ml-2" v-if="scope.row.existStatus == 0" type="warning">未占用</el-tag>
                        <el-tag class="ml-2" v-if="scope.row.existStatus == 1" type="success">已占用</el-tag>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <el-button type="primary" class="button" @click="upd(scope.row, scope.row.existStatus ==
                            1 ? 2 : 1, 2)">{{ scope.row.existStatus ==
        1 ? '释放' : '占用' }}</el-button>
                    </template>
                </el-table-column>
                <el-table-column label="位置状态">
                    <template #default="scope">
                        <el-tag class="ml-2" v-if="scope.row.pstatus == 0" type="warning">未占用</el-tag>
                        <el-tag class="ml-2" v-if="scope.row.pstatus == 1" type="success">已占用</el-tag>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <el-button type="primary" class="button" @click="upd(scope.row, scope.row.pstatus ==
                            1 ? 2 : 1, 3)">{{ scope.row.pstatus ==
        1 ? '释放' : '占用' }}</el-button>
                    </template>
                </el-table-column>
                <!-- <el-table-column label="操作">
                    <template #default="scope">
                        <el-button type="primary" class="button" @click="upd(scope.row, 1)">占用</el-button>
                        <el-button type="primary" class="button" @click="upd(scope.row, 2)">释放</el-button>
                    </template>
                </el-table-column> -->
            </el-table>
            <br />
            <el-pagination :page-size="50" @current-change="handlePageChange" background layout="prev, pager, next"
                :total="count" />
        </dv-border-box11>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { updateAgvFrameList, selectAgvFramePageAll } from '@/api'
import { Alex } from '@/types';
import { ElMessage } from 'element-plus';
const tableData = ref([]);
const dialogVisible = ref(false)
const ltable = ref([])
const page = ref(1)
const count = ref(0)
const options = [
    {
        value: '22#',
    },
    {
        value: '23#',
    },
    {
        value: '0#',
    },
    {
        value: '20#',
    },
    {
        value: '32#',
    },
    {
        value: '18#',
    }]
const form = ref({
    name: '',
    diameter: ''
});
const name = ref('')
const multipleSelection = ref([])
const handleSelectionChange = (val: any) => {
    multipleSelection.value = val
}
const getShow = () => {
    dialogVisible.value = true;
}
onMounted(() => {
    selectDtat();
})
const handlePageChange = (val: any) => {
    page.value = val;
    selectDtat();
}
const handleSizeChange = (val: any) => {
    page.value = val;
    selectDtat();
}
const selectDtat = () => {
    let alex = new Alex
    alex.parameter = {
        name: name.value,
        page: page.value
    }
    selectAgvFramePageAll(alex).then((res: any) => {
        tableData.value = res.result.agvFrameListPageCount;
    })
}

const upd = (row: any, i: any, s: any) => {
    let alex = new Alex
    delete row.agv_roller
    delete row.detection
    delete row.electronic
    delete row.grind
    delete row.produce
    switch (i) {
        case 1:
            switch (s) {
                case 1:
                    row.emptyStatus = 1

                    break;
                case 2:

                    row.existStatus = 1
                    break;
                case 3:
                    row.pstatus = 1
                    break;
            }
            alex.parameter = {
                agvFrameList: [row]
            }
            break;
        case 2:
            switch (s) {
                case 1:

                    row.emptyStatus = 0
                    break;
                case 2:

                    row.existStatus = 0
                    break;
                case 3:
                    row.pstatus = 0

                    break;
            }
            row.rimNum = ''
            alex.parameter = {
                agvFrameList: [row]
            }

            break;
    }
    updateAgvFrameList(alex).then((res: any) => {

        ElMessage({
            message: '修改成功！',
            type: 'success',
        });
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
    /* width: 400px; */
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