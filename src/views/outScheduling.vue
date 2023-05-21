<template>
    <dv-border-box11 title="出库排程" class="box">
        <el-table :data="tableData" border class="table">
            <el-table-column prop="ename" label="设备名称"></el-table-column>
            <el-table-column prop="startName" label="起点区域"></el-table-column>
            <el-table-column prop="start" label="起点位置"></el-table-column>
            <el-table-column prop="ename" label="终点区域"></el-table-column>
            <el-table-column prop="end" label="终点位置"></el-table-column>
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
                    <el-button>删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </dv-border-box11>
    <div class="rightHome">
        <dv-decoration-11 :class="bMove ? 'rightButton' : 'rightButton_move'">
            <div @click="b1Click"
                style="transform:rotate(90deg);width: 30px;line-height: 30px;text-align: center;color: white;">
                任<br>
                务<br>
                列<br>
                表
            </div>
            <dv-border-box-13 title="任务列表" class="rightTable">
                <div style="margin-top: 20px">

                </div>
                <div class="tableData8">
                    <el-table name="C" class="t8" @row-click="updRow" @row-dblclick="chang2" ref="dragTable"
                        :data="data.grindListAll" row-key="id" border>
                        <el-table-column>
                            <template #header>
                                <el-radio-group @change="getGrindData" v-model="finishStatus">
                                    <el-radio label="1" border>未完成</el-radio>
                                    <el-radio label="3" border>已完成</el-radio>
                                    <el-radio label="50" border>已终止</el-radio>
                                    <!-- <el-button @click="getGrindData">刷新
                                    </el-button> -->
                                    <el-input style="width: 100px;margin-right: 20px;" v-model="name"
                                        placeholder="框号" />

                                    <el-button @click="getGrindData">查询
                                    </el-button>
                                </el-radio-group>
                            </template>
                            <el-table-column prop="mid" label="主任务号" width="180"></el-table-column>
                            <el-table-column prop="boxId" label="辊框号" width="180">
                            </el-table-column>
                            <el-table-column prop="currentStep" label="当前步骤号"></el-table-column>
                            <el-table-column prop="priority" label="优先级别"></el-table-column>
                            <el-table-column label="操作" width="140">
                                <template #default="scope">
                                    <el-button size="small" @click="chang(scope.row)">终止任务
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="tableData9">
                    <el-table name="C" class="t9" ref="dragTable" :data="data.grindListAll2" row-key="id" border>
                        <el-table-column prop="num" label="步骤" width="60"></el-table-column>
                        <el-table-column label="任务状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.status == 0" type="warning">未发送</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.status == 1">已发送</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.status == 2" type="success">已完成</el-tag>
                                <!-- <el-tag class="ml-2" v-if="scope.row.status == 4" type="danger">已终止
                                </el-tag> -->
                            </template>
                        </el-table-column>
                        <el-table-column label="起始位置" width="100">
                            <template #default="scope">
                                {{ scope.row.startName + '-' + scope.row.start }}
                            </template>
                        </el-table-column>
                        <el-table-column label="结束位置" width="100">
                            <template #default="scope">
                                {{ scope.row.fname + '-' + scope.row.end }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="createTime" label="开始时间" width="110"></el-table-column>
                        <el-table-column prop="okTime" label="结束时间" width="110"></el-table-column>
                        <el-table-column prop="priority" width="80" label="优先级"></el-table-column>
                        <el-table-column label="操作" width="140">
                            <template #default="scope">
                                <el-button v-if="scope.row.status != 3" size="small" @click="chang3(scope.row)">
                                    确认
                                </el-button>
                                <!-- <el-button v-if="scope.row.status != 3" size="small" @click="chang3(scope.row)">
                                    删除
                                </el-button> -->
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </dv-border-box-13>
        </dv-decoration-11>
    </div>
</template>
<script setup lang="ts">
import { Alex } from '@/types';
import { ElMessage } from 'element-plus';
import { onMounted, reactive, ref } from 'vue';
import { getOutBoxListChild, getOutMainListAll, updateAgvEquipmentAndData, updateOutBoxListChild, updatePullThePlugTry } from '@/api'
const bMove = ref(true)
const row: any = ref()
const name: any = ref()
const finishStatus = ref('1')
const search = ref('step1')
let data: any = reactive({
    grindListAll: [],
    grindListAll2: []
})
const chang = (row: any) => {
    console.log(row);

    let alex = new Alex();
    alex.parameter = {
        outMain: row
    }
    updateOutBoxListChild(alex).then((res: any) => {
        ElMessage({
            message: res.message.msg,
            type: 'success',
        })
        getGrindData();
    })
}
const b1Click = () => {
    data.grindListAll2 = []
    getGrindData();
    bMove.value = !bMove.value;
}
const tableData = ref([]);
onMounted(() => {

})
const updRow = (rowx: any) => {
    row.value = rowx;
    console.log(row.value);
    getChild();
}
const chang2 = (row: any) => {
    console.log(row);
    // from.value = row
    // dialogVisible2.value = true
}
// 查询主任务
const getGrindData = () => {
    data.grindListAll2 = []
    let alex = new Alex
    alex.parameter = {
        name: name.value,
        number: parseInt(finishStatus.value)
    }
    getOutMainListAll(alex).then((res: any) => {
        console.log(res);
        data.grindListAll = res.result.outMainList
    })
}
// 查询子任务
const getChild = () => {
    if (row.value) {
        console.log(row.value);
        data.grindListAll2 = []
        let alex = new Alex
        alex.parameter = {
            outMain: row.value
        }
        getOutBoxListChild(alex).then((res: any) => {
            if (res.result.outBoxList) {
                data.grindListAll2 = res.result.outBoxList
                // res.result.grindOne.getHand.handnum = "step1"
                console.log('qwe', data.grindListAll2);

                for (let i = 0; i < data.grindListAll2.length; i++) {
                    console.log(i);

                    data.grindListAll2[i].num = `step${i + 1}`
                }
            }
        })
    }

}
const chang5 = (row: any, status: string) => {
    console.log(row);
    let alex = new Alex
    alex.parameter = {
        flag: status,
        grindOne: row
    }
    // remFrame(alex).then((res: any) => {
    //     ElMessage({
    //         message: '修改成功',
    //         type: 'success',
    //     })
    //     setTimeout(() => {
    //         getChild();
    //     }, 1000)
    // })
}
const chang3 = (row: any) => {
    let alex = new Alex
    alex.parameter = {
        updateOutBox: row
    }
    updateAgvEquipmentAndData(alex).then((res: any) => {
        setTimeout(() => {
            getChild();
            ElMessage({
                message: '操作成功！',
                type: 'success',
            })
        }, 1000)
    })
}
</script>
<style scoped>
.table {
    height: 70vh;
    margin: 50px auto;
    width: 95%;
}

.t8 {
    height: 320px;
    margin: 50px auto;
    width: 90%;
}

.t9 {
    height: 320px;
    margin: 50px auto;
    width: 90%;
}

.rightButton {
    position: absolute;
    right: -60px;
    z-index: 999;
    transition: 0.5s;
    top: 450px;
    transform: rotate(-90deg);
    width: 200px;
    cursor: pointer;
    height: 60px;
}

.rightButton_move {
    position: absolute;
    right: 690px;
    z-index: 999;
    transition: 0.5s;
    top: 450px;
    transform: rotate(-90deg);
    width: 200px;
    cursor: pointer;
    height: 60px;
}

.rightHome {
    width: 2%;
    height: 100px;
    /* display: flex; */
}

.rightTable {
    position: absolute;
    right: -310px;
    backdrop-filter: blur(30px);
    top: 70px;
    transform: rotate(90deg);
    width: 800px;
    height: 780px;
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