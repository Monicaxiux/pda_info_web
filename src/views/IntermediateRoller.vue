<template>
    <div class="shopList">
        <!-- <el-table :data="tableData" ref="multipleTable" @select="handleSelectionChange" @row-click="rowClick"
            :row-style="styleBack" style="width: 100%"> -->
        <el-table :data="tableData" style="width: 100%">
            <!-- <el-table-column type="selection" width="55" /> -->
            <el-table-column type="expand">
                <template #default="props">
                    <el-table :data="props.row.agv_rollerList" style="width: 60%; margin-left: 20px">
                        <el-table-column v-for="(value, id, index) in sonColumns" :label="value.name" :prop="value.propName"
                            :key="index">
                        </el-table-column>
                        <!-- <el-table-column label="操作">
                            <template #default="scope">
                                <el-button :type="primary" @click="changeStatus()">{{ props.row.status ? "完成" : "修改"
                                }}</el-button>
                            </template>
                        </el-table-column> -->
                    </el-table>
                </template>
            </el-table-column>
            <el-table-column v-for="(value, key, index) in parentsCloums" :label="value.name" :prop="value.propName"
                :key="index">
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { selectCenterRollerList } from '@/api'
import { onMounted, ref } from 'vue'
import { Alex } from '@/types'
const csId = ref(null)
const multipleTable: any = ref()
const multipleSelection: any = ref([])
const handleSelectionChange = (selection: any, row: any) => {
    // ----------------------------------------------------------------------
    // 获取当前选中行的 caseId
    const selectedCaseIds = selection.map((item: any) => item.caseId)
    // 获取当前点击的行的 caseId
    const clickedCaseId = row.caseId
    csId.value = row.caseId
    // 如果当前点击的行的 caseId 在已选中的 caseId 中存在，则先取消选择其他不同的 caseId
    if (selectedCaseIds.includes(clickedCaseId)) {
        multipleTable.value.clearSelection()
        // 再选中全部 caseId 为当前点击行的 caseId 的表格行
        tableData.value.forEach((item: any) => {
            if (item.caseId === clickedCaseId) {
                multipleTable.value.toggleRowSelection(item, true)
            }
        })
    } else {

        // 直接选中全部 caseId 为当前点击行的 caseId 的表格行
        tableData.value.forEach((item: any) => {


            if (item.caseId === clickedCaseId) {
                multipleTable.value.toggleRowSelection(item, true)
            }

        })
    }
}
const rowClick = (row: any) => {
    csId.value = row.caseId
    const selectedCaseIds = multipleTable.value.store.states.selection.value.map(
        (item: any) => item.caseId
    ) // 获取已选中的所有 caseId

    if (selectedCaseIds.includes(row.caseId)) {
        // 如果已有选中的行的 caseId 与当前行的 caseId 相同，则取消选择当前行
        // multipleTable.value.toggleRowSelection(row, false)
        multipleTable.value.clearSelection()
        multipleSelection.value = []
        csId.value = null;
        console.log(multipleSelection.value);
    } else {
        multipleSelection.value = []
        // 如果已有选中的行的 caseId 不同于当前行的 caseId，则先取消选择其他行，再全选当前行的所有相同 caseId 的行
        const differentCaseIds = selectedCaseIds.filter(
            (id: any) => id !== row.caseId
        )
        if (differentCaseIds.length > 0) {
            differentCaseIds.forEach((id: any) => {
                const rows = tableData.value.filter((item: any) => item.caseId === id)
                rows.forEach((row) => {

                    multipleTable.value.toggleRowSelection(row, false)
                })
            })
        }

        const rowsToSelect = tableData.value.filter(
            (item: any) => item.caseId === row.caseId
        )
        rowsToSelect.forEach((row) => {
            multipleSelection.value.push(row)
            multipleTable.value.toggleRowSelection(row, true)
        })
        console.log(multipleSelection.value);

    }
}
const styleBack = (row: any) => {
    // console.log(row.row);
    if (row.row.caseId == csId.value) {
        console.log('一样')
        return { backgroundColor: '#04c15f' }
    } else {
        return { backgroundColor: '#ffffff00' }
    }
}
const parentsCloums = ref([
    //外层table的表头
    {
        name: '框号',
        propName: 'caseId',
    },
    {
        name: '锥度',
        propName: 'taper',
    },
    {
        name: '轧机号',
        propName: 'control_Number',
    },
    {
        name: '状态',
        propName: 'caseStatus',
    },
    {
        name: '处理人',
        propName: 'processor_Man',
    },
])
const sonColumns = ref([
    //内层table的表头
    {
        name: '轧辊号',
        propName: 'rollerName',
    },
    {
        name: '辊头方向',
        propName: 'rootHead',
    },
    {
        name: '直径',
        propName: 'last_Diameter',
    },
    {
        name: '锥度',
        propName: 'roller_Dimension',
    },
    {
        name: '组号',
        propName: 'group',
    },
])
const tableData = ref([
    // {
    //     caseId: 1,
    // },
    // {
    //     caseId: 1,
    // },
    // {
    //     caseId: 1,
    // },
    // {
    //     caseId: 1,
    // },
    // {
    //     caseId: 2,
    // },
    // {
    //     caseId: 2,
    // },
    // {
    //     caseId: 3,
    // },
    // {
    //     caseId: 4,
    // },
    // {
    //     caseId: 4,
    // },
    // {
    //     caseId: 6,
    // },
    // {
    //     caseId: 6,
    // },
])

const getData = () => {
    let alex = new Alex()
    selectCenterRollerList(alex).then((res: any) => {
        tableData.value = res.result.list
    })
}
onMounted(() => {
    getData()
})
</script>
<style lang="less" scoped>
.table {
    height: 70vh;
    margin: 50px auto;
    width: 95% !important;
}

.box {
    /* width: 400px; */
    display: flex;
    height: 80vh;
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
