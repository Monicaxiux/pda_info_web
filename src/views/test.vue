<template>
    <dv-border-box11 title="测试页" class="box">
        <el-table :data="tableData" border class="table">
            <el-table-column v-for="(item, i) in column" :prop="item.value" :label="item.title"></el-table-column>
        </el-table>
        <el-button @click="qh">切换</el-button>
    </dv-border-box11>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { selectGrindCarryInfo } from '@/api'
const tableData: any = ref([]);
const column: any = ref([])
onMounted(() => {
    column.value = a.value
})
const status = ref(false)
const a = ref(
    [
        {
            title: '轧辊号',
            value: 'rollNo'
        },
        {
            title: '设备名称',
            value: 'ename'

        },
        {
            title: '辊头方向',
            value: 'rootHead'
        },
        {
            title: '起点区域',
            value: 'startName'
        }
    ]
)
const b = ref(
    [
        {
            title: '姓名',
            value: 'username'
        },
        {
            title: '年龄',
            value: 'age'

        },
        {
            title: '性别',
            value: 'sex'
        },
        {
            title: '身高',
            value: 'height'
        }
    ]
);
const v1 = [
    {
        rollNo: 'HJSIWL',
        ename: 'NCJASK',
        rootHead: 'IEHWK',
        startName: 'JCIQLs'
    },
    {
        rollNo: 'JKLKVOI',
        ename: 'NCJASK',
        rootHead: 'IEHWK',
        startName: 'JCIQLs'
    },
    {
        rollNo: 'SCVKSIWLWEQ',
        ename: 'NCJASK',
        rootHead: 'IEHWK',
        startName: 'JCIQLs'
    },
    {
        rollNo: 'IVOWIQMNN',
        ename: 'NCJASK',
        rootHead: 'IEHWK',
        startName: 'JCIQLs'
    }
]
const v2 = [
    {
        username: '张三',
        age: '18',
        sex: '男',
        height: '160'
    },
    {
        username: '李四',
        age: '19',
        sex: '男',
        height: '170'
    },
    {
        username: '王五',
        age: '20',
        sex: '男',
        height: '180'
    },
    {
        username: '赵六',
        age: '21',
        sex: '男',
        height: '190'
    }
]
const qh = () => {
    status.value = !status.value;
    if (status.value) {
        column.value = b.value;
        tableData.value = v2
    } else {
        column.value = a.value;
        tableData.value = v1

    }
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