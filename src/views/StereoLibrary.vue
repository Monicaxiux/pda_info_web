<template>
    <div>
        <el-button type="primary" style="width: 150px;background-color: red;height: 50px;margin-bottom: 20px;" size="large"
            class="button" @click="getShow">配辊</el-button>
    </div>
    <div style="width:100%;display:flex">
        <dv-border-box11 title="立体库数据" class="box">
            <el-table :data="tableData1" border class="table">
                <el-table-column label="轧辊号">
                    <template #default="scope">
                        <span v-if="scope.row.agv_roller">{{ scope.row.agv_roller.rollerName }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="当前直径">
                    <template #default="scope">
                        <span v-if="scope.row.agv_roller">
                            {{ scope.row.agv_roller.current_Diameter }}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="slotPosition" label="库位号"></el-table-column>
                <el-table-column label="状态">
                    <template #default="scope">
                        <span v-if="scope.row.agv_roller">
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 0">未知</span>
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 1">黑辊</span>
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 2">白辊</span>
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 3">新辊</span>
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 4">报废辊</span>
                        </span>
                    </template>
                </el-table-column>
            </el-table>
        </dv-border-box11>
        <dv-border-box11 title="立体库数据" class="box">
            <el-table :data="tableData2" border class="table">
                <el-table-column label="轧辊号">
                    <template #default="scope">
                        <span v-if="scope.row.agv_roller">{{ scope.row.agv_roller.rollerName }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="当前直径">
                    <template #default="scope">
                        <span v-if="scope.row.agv_roller">
                            {{ scope.row.agv_roller.current_Diameter }}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="slotPosition" label="库位号"></el-table-column>
                <el-table-column label="状态">
                    <template #default="scope">
                        <span v-if="scope.row.agv_roller">
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 0">未知</span>
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 1">黑辊</span>
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 2">白辊</span>
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 3">新辊</span>
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 4">报废辊</span>
                        </span>
                    </template>
                </el-table-column>
            </el-table>
        </dv-border-box11>
        <dv-border-box11 title="立体库数据" class="box">
            <el-table :data="tableData3" border class="table">
                <el-table-column label="轧辊号">
                    <template #default="scope">
                        <span v-if="scope.row.agv_roller">{{ scope.row.agv_roller.rollerName }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="当前直径">
                    <template #default="scope">
                        <span v-if="scope.row.agv_roller">
                            {{ scope.row.agv_roller.current_Diameter }}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="slotPosition" label="库位号"></el-table-column>
                <el-table-column label="状态">
                    <template #default="scope">
                        <span v-if="scope.row.agv_roller">
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 0">未知</span>
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 1">黑辊</span>
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 2">白辊</span>
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 3">新辊</span>
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 4">报废辊</span>
                        </span>
                    </template>
                </el-table-column>
            </el-table>
        </dv-border-box11>
        <dv-border-box11 title="立体库数据" class="box">
            <el-table :data="tableData4" border class="table">
                <el-table-column label="轧辊号">
                    <template #default="scope">
                        <span v-if="scope.row.agv_roller">{{ scope.row.agv_roller.rollerName }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="当前直径">
                    <template #default="scope">
                        <span v-if="scope.row.agv_roller">
                            {{ scope.row.agv_roller.current_Diameter }}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="slotPosition" label="库位号"></el-table-column>
                <el-table-column label="状态">
                    <template #default="scope">
                        <span v-if="scope.row.agv_roller">
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 0">未知</span>
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 1">黑辊</span>
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 2">白辊</span>
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 3">新辊</span>
                            <span v-if="scope.row.agv_roller.white_Roll_Status == 4">报废辊</span>
                        </span>
                    </template>
                </el-table-column>
            </el-table>
        </dv-border-box11>
    </div>
    <el-dialog v-model="dialogVisible" title="详情" width="50%">
        <el-input style="width: 200px;margin-right: 10px;" v-model="form.rollerName" clearable placeholder="请输入轧辊号" />
        <el-input style="width: 200px;margin-right: 10px;" v-model="form.name" clearable placeholder="请输入直径" />
        <el-select v-model="form.diameter" class="m-2" placeholder="请选择维度">
            <el-option v-for="item in options" :key="item.value" :label="item.value" :value="item.value" />
        </el-select>
        &nbsp;
        <el-button type="primary" class="button" @click="getData()">查询</el-button>
        <br />
        <br />
        <el-table style="max-height: 450px;overflow: auto;" :data="ltable" :row-style="styleBack" @row-dblclick="dbSelected"
            @selection-change="handleSelectionChange" border>
            <el-table-column type="selection" width="55" />
            <el-table-column label="轧辊号">
                <template #default="scope">
                    <span v-if="scope.row.agv_roller">{{ scope.row.agv_roller.rollerName }}</span>
                </template>
            </el-table-column>
            <el-table-column label="当前直径">
                <template #default="scope">
                    <span v-if="scope.row.agv_roller">
                        {{ scope.row.agv_roller.current_Diameter }}
                    </span>
                </template>
            </el-table-column>
            <el-table-column label="锥度">
                <template #default="scope">
                    <span v-if="scope.row.agv_roller">
                        {{ scope.row.agv_roller.roller_Dimension }}
                    </span>
                </template>
            </el-table-column>
            <el-table-column label="锥头">
                <template #default="scope">
                    <span v-if="scope.row.agv_roller">
                        {{ scope.row.agv_roller.center_Conule }}
                    </span>
                </template>
            </el-table-column>
            <el-table-column prop="slotPosition" label="库位号"></el-table-column>
            <el-table-column label="轧辊状态">
                <template #default="scope">
                    <span v-if="scope.row.agv_roller.white_Roll_Status == 0">未知</span>
                    <span v-if="scope.row.agv_roller.white_Roll_Status == 1">黑辊</span>
                    <span v-if="scope.row.agv_roller.white_Roll_Status == 2">白辊</span>
                    <span v-if="scope.row.agv_roller.white_Roll_Status == 3">新辊</span>
                    <span v-if="scope.row.agv_roller.white_Roll_Status == 4">报废辊</span>
                </template>
            </el-table-column>
            <el-table-column label="组号">
                <template #default="scope">
                    <span v-if="scope.row.agv_roller">
                        {{ scope.row.agv_roller.group }}
                    </span>
                </template>
            </el-table-column>
        </el-table>
        <br />
        <el-pagination :page-size="50" @current-change="handlePageChange" background layout="prev, pager, next"
            :total="count" />
        <template #footer>
            <span class="dialog-footer">
                <div class="btfont">配辊出库时C11工位必须要有辊架和空辊框</div>
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="save(2)">磨削</el-button>
                <el-button type="primary" @click="save(1)">出库</el-button>
            </span>
        </template>
    </el-dialog>
    <el-dialog v-model="dialogVisible2" title="详情" width="50%">
        <el-table style="max-height: 450px;overflow: auto;" :data="tableData5" @selection-change="handleSelectionChange"
            border>
            <el-table-column type="selection" width="55" />
            <el-table-column prop="rollerName" label="轧辊号">
            </el-table-column>
            <el-table-column prop="current_Diameter" label="当前直径">
                <template #default="scope">
                    <el-input v-model="scope.row.current_Diameter" placeholder="请输入直径" />
                </template>
            </el-table-column>
            <el-table-column prop="roller_Dimension" label="锥度">
                <template #default="scope">
                    <el-select v-model="scope.row.roller_Dimension" class="m-2" placeholder="请选择">
                        <el-option v-for="item in roller_DimensionList" :key="item.value" :label="item.value"
                            :value="item.value" />
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column prop="center_Conule" label="锥头">
                <template #default="scope">
                    <el-select v-model="scope.row.center_Conule" class="m-2" placeholder="请选择">
                        <el-option v-for="item in center_ConuleList" :key="item.value" :label="item.value"
                            :value="item.value" />
                    </el-select>
                </template>
            </el-table-column>

            <el-table-column label="辊头">
                <template #default="scope">
                    <el-select v-model="scope.row.rootHead" class="m-2" placeholder="请选择">
                        <el-option v-for="item in rootHeadList" :key="item.value" :label="item.value" :value="item.value" />
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column label="轧辊状态">
                <template #default="scope">
                    <el-select v-model="scope.row.white_Roll_Status" class="m-2" placeholder="请选择">
                        <el-option v-for="item in whiteRollStatusList" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </template>

            </el-table-column>
            <el-table-column prop="group" label="组号">
            </el-table-column>
        </el-table>
        <br />
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible2 = false, multipleSelection.value = []">取消</el-button>
                <el-button type="primary" @click="save(3)">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { selectFrameByType, selectFramePageSize, insertGrindCarryCrush, updateAgvRollerStereoscopicLibrary, getAgvRollerListGrop, insertOutCarryInto } from '@/api'
import { Alex } from '@/types';
import { ElMessage } from 'element-plus';
const tableData = ref([]);
const tableData1 = ref([]);
const tableData2 = ref([]);
const tableData3 = ref([]);
const tableData4 = ref([]);
const tableData5 = ref([]);
const dialogVisible = ref(false)
const dialogVisible2 = ref(false)
const styleBack = (row: any) => {
    switch (row.row.agv_roller.center_Conule) {
        case '上':
            return { backgroundColor: '#04c15f' }
            break;
        case '下':
            return { backgroundColor: 'yellow' }
            break;

    }
}
const whiteRollStatusList = ref(
    [
        {
            label: '未知',
            value: 0
        },
        {
            label: '黑辊',
            value: 1
        },
        {
            label: '白辊',
            value: 2
        },
        {
            label: '新辊',
            value: 3
        },
        {
            label: '报废辊',
            value: 4
        }
    ]
)
const center_ConuleList = ref([
    {
        value: '上'
    },
    {
        value: '下'
    },
])
const rootHeadList = ref([
    {
        value: '左'
    },
    {
        value: '右'
    },
])
const roller_DimensionList = ref([
    {
        value: '22'
    },
    {
        value: '23'
    },
    {
        value: '0'
    },
    {
        value: '20'
    },
    {
        value: '32'
    },
    {
        value: '18'
    },
])
const ltable = ref([])
const page = ref(1)
const count = ref(0)
const dbSelected = (row: any) => {
    let alex = new Alex
    alex.parameter = {
        agvRoller: row.agv_roller
    }
    delete alex.parameter.agvRoller.agv_carry
    delete alex.parameter.agvRoller.register
    delete alex.parameter.agvRoller.agv_main
    getAgvRollerListGrop(alex).then((res: any) => {
        console.log(res.result.selectAgv_RollerList);
        tableData5.value = res.result.selectAgv_RollerList;
        dialogVisible2.value = true
    })
    console.log(row)
}
const options = [
    {
        value: '22',
    },
    {
        value: '23',
    },
    {
        value: '0',
    },
    {
        value: '20',
    },
    {
        value: '32',
    },
    {
        value: '18',
    }]
const form = ref({
    name: '',
    rollerName: '',
    diameter: null
});

const multipleSelection: any = ref([])
const handleSelectionChange = (val: any) => {
    multipleSelection.value = val
}
const getShow = () => {
    getData();
    dialogVisible.value = true;
}
onMounted(() => {
    selectDtat();
})
const handlePageChange = (val: any) => {
    page.value = val;
    getData();
}
const handleSizeChange = (val: any) => {
    page.value = val;
    getData();
}
const save = (i: any) => {
    switch (i) {
        case 1:
            if (multipleSelection.value.length > 4) {
                ElMessage({
                    message: '不能超过4个！',
                    type: 'warning',
                })
            } else if (multipleSelection.value.length == 0) {
                ElMessage({
                    message: '请选择！',
                    type: 'warning',
                })
            } else {
                let alex = new Alex
                for (let i = 0; i < multipleSelection.value.length; i++) {
                    delete multipleSelection.value[i].detection
                    delete multipleSelection.value[i].electronic
                    delete multipleSelection.value[i].grind
                    delete multipleSelection.value[i].produce
                    delete multipleSelection.value[i].register
                    delete multipleSelection.value[i].agv_roller
                }
                alex.parameter = {
                    frameList: multipleSelection.value
                }
                insertOutCarryInto(alex).then((res: any) => {
                    ElMessage({
                        message: '添加成功！',
                        type: 'success',
                    })
                    dialogVisible.value = false;
                    selectDtat();
                })
            }
            break;
        case 2:
            if (multipleSelection.value.length == 0) {
                ElMessage({
                    message: '请选择！',
                    type: 'warning',
                })
            } else {
                let alex = new Alex
                for (let i = 0; i < multipleSelection.value.length; i++) {
                    delete multipleSelection.value[i].detection
                    delete multipleSelection.value[i].electronic
                    delete multipleSelection.value[i].grind
                    delete multipleSelection.value[i].produce
                    delete multipleSelection.value[i].register
                    delete multipleSelection.value[i].agv_roller
                    delete multipleSelection.value[i].level
                }
                alex.parameter = {
                    frameList: multipleSelection.value
                }
                insertGrindCarryCrush(alex).then((res: any) => {
                    ElMessage({
                        message: '添加成功！',
                        type: 'success',
                    })
                    dialogVisible.value = false;
                    selectDtat();
                })
            }

            break;
        case 3:
            let alex = new Alex
            alex.parameter = {
                agvRollerList: multipleSelection.value
            }
            updateAgvRollerStereoscopicLibrary(alex).then((res: any) => {
                ElMessage({
                    message: '修改成功！',
                    type: 'success',
                })
                multipleSelection.value = []
                dialogVisible2.value = false;
                getData();
                selectDtat();
            })
            break;
    }


}
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
const getData = () => {
    let alex = new Alex
    alex.parameter = {
        page: page.value,
        name: form.value.name,
        rollerName: form.value.rollerName,
        diameter: form.value.diameter
    }
    selectFramePageSize(alex).then((res: any) => {
        ltable.value = res.result.frameListPageCount;
        count.value = res.result.count;
        form.value.diameter = null
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
.btfont {
    /* width: 05px; */
    color: red;
    margin-right: 20px;
    margin-bottom: 20px;
    text-align: left;
    font-size: 25px;
}

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