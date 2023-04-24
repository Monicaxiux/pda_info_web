<template>
    <div class="bodyBox">
        <div class="box_x">
            <div v-for="item in List" class="conent">
                <el-button @click="select([item.position],)">出库配辊</el-button>
                <el-tag class="m-2" v-if="item.pstatus == 0" size="large" type="warning">未占用</el-tag>
                <el-tag class="m-2" v-if="item.pstatus == 1" size="large" type="success">已占用
                </el-tag>
                <el-button>终点位置</el-button>
            </div>
        </div>
        <div class="box_x2">
            <div v-for="item in List2" class="conent">
                <el-button @click="select([item.position])">出库配辊</el-button>
                <el-tag class="m-2" v-if="item.pstatus == 0" size="large" type="warning">未占用</el-tag>
                <el-tag class="m-2" v-if="item.pstatus == 1" size="large" type="success">已占用
                </el-tag>
                <el-button>终点位置</el-button>
            </div>
        </div>
        <div class="box_x3">
            <div v-for="item in List3" class="conent">
                <el-button @click="select([item.position])">出库配辊</el-button>
                <el-tag class="m-2" v-if="item.pstatus == 0" size="large" type="warning">未占用</el-tag>
                <el-tag class="m-2" v-if="item.pstatus == 1" size="large" type="success">已占用
                </el-tag>
                <el-button>终点位置</el-button>
            </div>
        </div>
    </div>
    <!-- <dv-border-box11 title="A区辊架" class="box">
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

    </el-dialog> -->
    <el-dialog v-model="dialogVisible3" title="详情" width="60%" :before-close="handleClose">
        <el-card class="box-card" shadow="hover">
            起始位置：{{ stitle }}<br /><br />
            终点位置：<el-select v-model="position" placeholder="选择位置">
                <el-option v-for="item in positionList" :key="item.position" :label="item.position"
                    :value="item.position" />
            </el-select><br /><br />
            辊框号：{{ boxId }}<br /><br />
            优先执行：
            <el-switch v-model="value" active-text="是" inactive-text="否" />
        </el-card>
        <br /><br />
        <el-table :data="agvrollerList">
            <el-table-column prop="" label="辊框号">
                <template #default="scope">
                    <span>
                        {{ boxId }}
                    </span>
                </template>
            </el-table-column>
            <el-table-column prop="" label="磨床号">
                <template #default="scope">
                    <span v-if="scope.row.agv_carry">
                        {{ scope.row.agv_carry.grinderNo }}
                    </span>
                    <span v-if="scope.row.agv_main">
                        {{ scope.row.agv_main.grinderNo }}
                    </span>
                </template>

            </el-table-column>
            <el-table-column prop="rollerName" label="轧辊号" />
            <!-- <el-table-column prop="remarks" label="备注" /> -->
            <el-table-column prop="slotName" label="卡槽位置" />
            <el-table-column prop="rollType" label="轧辊类型" />
            <!-- <el-table-column prop="accident" label="轧辊事故类型" /> -->
        </el-table>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible3 = false">取消</el-button>
                <el-button type="primary" @click="createTask">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script setup lang="ts">
import { selectAgvFrameAppointInfo, selectAgvFrameRegionMany, selectAgv_CarryInfo } from '@/api';
import { onMounted, ref } from 'vue';
import { Alex } from '@/types';
import { ElMessage } from 'element-plus';
const dialogVisible = ref(false)
const dialogVisible3 = ref(false)
const agvrollerList: any = ref([])
const stitle: any = ref('')
const etitle: any = ref('')
const boxId: any = ref('')
const value: any = ref('否')
const List: any = ref([])
const List2: any = ref([])
const List3: any = ref([])
const position: any = ref([])
const positionList: any = ref([])
onMounted(() => {
    selectList(1);
    selectList(2);
    selectList(3);

})
const selectList = (i: any) => {
    let alex = new Alex();
    switch (i) {
        case 1:
            alex.parameter = {
                flag: '工作辊货架'
            }
            selectAgvFrameAppointInfo(alex).then((res: any) => {
                for (let i = 0; i < 6; i++) {
                    console.log(res.result.agv_frameList[i]);
                    List.value.push(res.result.agv_frameList[i])
                }
                for (let i = 6; i < 12; i++) {
                    console.log(res.result.agv_frameList[i]);
                    List2.value.push(res.result.agv_frameList[i])
                }
            })
            console.log(List.value);
            break;
        case 2:
            alex.parameter = {
                flag: '中间辊货架'
            }
            selectAgvFrameAppointInfo(alex).then((res: any) => {
                for (let i = 0; i < 6; i++) {
                    console.log(res.result.agv_frameList[i]);
                    List3.value.push(res.result.agv_frameList[i])
                }
            })
            console.log(List2.value);

            break;
        case 3:
            alex.parameter = {
                flag: '出入库区域'
            }
            selectAgvFrameAppointInfo(alex).then((res: any) => {
                positionList.value = res.result.agv_frameList
            })

            console.log(List3.value);


            // while (true) {
            //     let Person: any = new Object()
            //     Person.name = '陈需要'
            //     Person.sex = '女'
            //     Person.age = 18
            //     console.log(Person);
            // }



            break;
    }
}
const handleClose = (done: () => void) => {
    done()
}
const select = (row: any) => {
    position.value = ''
    stitle.value = row[0];
    console.log(row);
    let alex = new Alex();
    let region = ''
    if (row[0] == 'A10' || row[0] == 'A1' || row[0] == 'A2' || row[0] == 'A13' || row[0] == 'A14' || row[0] == 'A15') {
        region = '工作辊货架'
    } else {
        region = '中间辊货架'
    }
    alex.parameter = {
        flag: row,
        region: region
    }
    selectAgvFrameRegionMany(alex).then((res: any) => {
        dialogVisible3.value = true
        console.log(res);
        if (res.result) {
            agvrollerList.value = res.result.agv_rollerList;
            if (agvrollerList.value) {


                boxId.value = agvrollerList.value[0].agv_main ? agvrollerList.value[0].agv_main.boxId : agvrollerList.value[0].agv_carry.boxId
                console.log(boxId.value, '来了');
            } else {
                boxId.value = ''
            }
        }
    })
}
const createTask = () => {
    console.log(agvrollerList.value);
    if (agvrollerList.value) {
        let sn = '';
        if (stitle.value != 'A30' && stitle.value != 'A31' && stitle.value != 'A32' && stitle.value != 'A33' && stitle.value != 'A34' && stitle.value != 'A35') {
            sn = '工作辊货架'
        } else {
            sn = '中间辊货架'
        }
        let alex = new Alex();
        alex.parameter = {
            rollerType: agvrollerList.value[0].agv_main ? agvrollerList.value[0].agv_main.rollType : agvrollerList.value[0].rollType,
            agv_Carry: {
                workId: agvrollerList.value[0].rimNum,
                boxId: agvrollerList.value[0].agv_main ? agvrollerList.value[0].agv_main.boxId : agvrollerList.value[0].agv_carry.boxId,
                start: stitle.value,
                startName: sn,
                end: position.value,
                fname: '出入库区域',
                ename: '叉车AGV',
                priority: 5
            }
        }
        selectAgv_CarryInfo(alex).then((res: any) => {
            ElMessage({
                message: res.message.msg,
                type: 'success',
            })
            selectList(1);
            selectList(2);
            selectList(3);
            dialogVisible3.value = false;
        })
    } else {
        ElMessage({
            message: '没有辊框号',
            type: 'warning',
        })
    }

}
</script>
<style scoped>
.table {
    height: 70vh;
    margin: 50px auto;
    width: 95%;
}

.m-2 {
    width: 80px;
}

.box_x {
    width: 25%;
    display: flex;
    margin-left: 50px;
    justify-content: center;
    /* margin-top: 5px; */
    flex-wrap: wrap;
    height: 90%;
}

.box_x2 {
    width: 25%;
    display: flex;
    margin-left: 9px;
    justify-content: center;
    /* margin-top: 5px; */
    flex-wrap: wrap;
    height: 90%;
}

.box_x3 {
    width: 25%;
    display: flex;
    margin-left: 75px;
    justify-content: center;
    /* margin-top: 5px; */
    flex-wrap: wrap;
    height: 90%;
}

.conent {
    width: 60%;
    height: 80px;
    align-items: flex-end;
    margin-left: -20px;
    display: flex;
    justify-content: space-between;
    flex-direction: row
}

.bodyBox {
    /* width: 83vw; */
    width: 94vw;
    background-size: 90%;
    background-repeat: no-repeat;
    height: 95%;
    display: flex;
    flex-wrap: wrap;
    background-image: url(../assets/background.png);
    color: white;
    background-color: white;
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