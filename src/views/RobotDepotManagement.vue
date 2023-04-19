<template>
    <div style="display:flex">
        <el-input placeholder="请输入工位号" v-model="name" style="width: 130px;margin-right: 10px;" />
        <el-button type="primary" size="large" class="button" @click="selectDtat();">查询</el-button>
    </div>
    <div style="width:100%;display:flex">
        <dv-border-box11 title="立体库数据" class="box">
            <el-table :data="tableData" border class="table">
                <el-table-column prop="slotPosition" label="位置"></el-table-column>
                <el-table-column prop="region" label="区域"></el-table-column>
                <el-table-column prop="difference" label="库位号"></el-table-column>
                <el-table-column label="状态">
                    <template #default="scope">
                        <el-tag class="ml-2" v-if="scope.row.slotStatus == 0" type="warning">未占用</el-tag>
                        <el-tag class="ml-2" v-if="scope.row.slotStatus == 1" type="success">已占用</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="检测状态">
                    <template #default="scope">
                        <el-tag class="ml-2" v-if="scope.row.isFinish == 0" type="warning">未占用</el-tag>
                        <el-tag class="ml-2" v-if="scope.row.isFinish == 1" type="success">已占用</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="轧辊状态">
                    <template #default="scope">
                        <el-tag class="ml-2" v-if="scope.row.isRefer == 0" type="warning">未占用</el-tag>
                        <el-tag class="ml-2" v-if="scope.row.isRefer == 1" type="success">已占用</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="level" label="优先级"></el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button type="primary" class="button" @click="upd(scope.row, 1)">占用</el-button>
                        <el-button type="primary" class="button" @click="upd(scope.row, 2)">释放</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <br />
            <el-pagination :page-size="50" @current-change="handlePageChange" background layout="prev, pager, next"
                :total="count" />
        </dv-border-box11>
    </div>
    <!-- <el-dialog v-model="dialogVisible" title="详情" width="50%">
        <br />
        <br />
        <el-table :data="ltable" @selection-change="handleSelectionChange" border>
            <el-table-column type="selection" width="55" />
            <el-table-column label="轧辊号">
                <template #default="scope">
                    <span v-if="scope.row.agv_roller">{{ scope.row.agv_roller.rollerName }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="slotPosition" label="库位号"></el-table-column>
            <el-table-column prop="difference" label="直径"></el-table-column>

        </el-table>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="save">确定</el-button>
            </span>
        </template>
    </el-dialog> -->
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { selectFramePageFrameAll, selectFramePageSize, insertOutCarryInto, updateFrameByIdStatus } from '@/api'
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
    selectFramePageFrameAll(alex).then((res: any) => {
        tableData.value = res.result.frameListPageCount;
    })
}

const upd = (row: any, i: any) => {
    let alex = new Alex
    delete row.agv_roller
    delete row.detection
    delete row.electronic
    delete row.grind
    delete row.produce
    switch (i) {
        case 1:
            row.slotStatus = '1'
            row.isFinish = 1
            row.isRefer = 1
            alex.parameter = {
                updateFrameList: [row]
            }

            break;
        case 2:
            row.slotStatus = '0'
            row.isFinish = 0
            row.isRefer = 0
            row.rollId = ''
            alex.parameter = {
                updateFrameList: [row]
            }

            break;
    }
    updateFrameByIdStatus(alex).then((res: any) => {
        if (res.message.status == 1) {
            ElMessage({
                message: '修改成功！',
                type: 'success',
            });
            selectDtat();
        }


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