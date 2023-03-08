<template>
    <div class="bodyBox">
        <div class="left">
            <div class="box" id="ARegion">
                <div class="droptarget" id="A01" @click="chang(['A0101', 'A0102'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                    <!-- <div class="Q">·</div> -->
                </div>
                <div class="droptarget" id="A02" @click="chang(['A0201', 'A0202'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="A03" @click="chang(['A0301', 'A0302'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="A05" @click="chang(['A0501', 'A0502'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="A04" @click="chang(['A0401', 'A0402'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="A06" @click="chang(['A0601', 'A0602'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
            </div>
            <div class="box" id="BRegion">
                <div class="droptarget" @click="chang(['C04'])" id="C04" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" @click="chang(['C03'])" id="C03" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="C02" @click="chang(['C02'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="C01" @click="chang(['C01'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
            </div>
            <div class="box" id="CRegion">
                <div class="droptarget" id="F22" @click="chang(['F22'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">
                </div>
                <div class="droptarget" id="F21" @click="chang(['F21'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">
                </div>
                <div class="droptarget" id="F20" @click="chang(['F20'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">
                </div>
                <div class="droptarget" id="F19" @click="chang(['F19'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">
                </div>
                <div class="droptarget" id="F08" @click="chang(['F08'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">
                </div>
                <div class="droptarget" id="F07" @click="chang(['F07'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">
                </div>
                <div class="droptarget" id="F06" @click="chang(['F06'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">
                </div>
                <div class="droptarget" id="F05" @click="chang(['F05'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">
                </div>
                <div class="droptarget" id="F04" @click="chang(['F04'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">
                </div>
                <div class="droptarget" id="F03" @click="chang(['F03'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">
                </div>
                <div class="droptarget" id="F02" @click="chang(['F02'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">
                </div>
                <div class="droptarget" id="F01" @click="chang(['F01'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">
                </div>
            </div>
            <div class="box" id="DRegion">
                <div class="droptarget" id="F16" @click="chang(['F16'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="F15" @click="chang(['F15'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="F17" @click="chang(['F17'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="F18" @click="chang(['F18'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="B03" @click="chang(['B03'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="B01" @click="chang(['B01'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="B02" @click="chang(['B02'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
            </div>
            <div class="box" id="ERegion">
                <div class="droptarget" id="C07" @click="chang(['C07'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="C06" @click="chang(['C06'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="C05" @click="chang(['C05'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="F14" @click="chang(['F14'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="F13" @click="chang(['F13'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="F12" @click="chang(['F12'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="F11" @click="chang(['F11'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="F10" @click="chang(['F10'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="F09" @click="chang(['F09'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
            </div>
            <div class="box" id="FRegion">
                <div class="droptarget" id="C11" @click="chang(['C11'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="C09" @click="chang(['C09'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
                <div class="droptarget" id="C08" @click="chang(['C08'])" :ondrop="drop" :ondragenter="dragEnter"
                    :ondragleave="dragLeave" :ondragover="allowDrop" :ondragstart="dragStart" draggable="true">

                </div>
            </div>
        </div>

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

                        <el-table name="A03" class="t8" @row-click="updRow" @row-dblclick="chang2" ref="dragTable"
                            :data="data.grindListAll" row-key="id" :key="key" border>
                            <el-table-column>
                                <template #header>
                                    <el-radio-group @change="getGrindData" v-model="finishStatus">
                                        <el-radio label="true" border>已完成</el-radio>
                                        <el-radio label="false" border>未完成</el-radio>
                                    </el-radio-group>
                                </template>
                                <el-table-column prop="mid" label="主任务号" width="180"></el-table-column>
                                <el-table-column prop="boxId" label="辊框号" width="180"></el-table-column>
                                <el-table-column prop="currentStep" label="当前步骤号"></el-table-column>
                                <!-- <el-table-column label="操作" width="140"> -->
                                <!-- <template #default="scope"> -->
                                <!-- <el-button size="small" @click="chang5(scope.row)">删除 -->
                                <!-- </el-button> -->
                                <!-- </template> -->
                                <!-- </el-table-column> -->
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="tableData9">
                        <el-table name="A03" class="t9" ref="dragTable" :data="data.grindListAll2" row-key="id" border
                            :key="key">
                            <el-table-column prop="currentStep" label="步骤" width="60"></el-table-column>
                            <el-table-column prop="boxId" label="辊框号" width="100"></el-table-column>
                            <el-table-column label="任务状态">
                                <template #default="scope">
                                    <el-tag class="ml-2" v-if="scope.row.status == 0" type="warning">等待发送
                                    </el-tag>
                                    <el-tag class="ml-2" v-if="scope.row.status == 1">已发送</el-tag>
                                    <el-tag class="ml-2" v-if="scope.row.status == 2" type="success">已完成
                                    </el-tag>
                                    <el-tag class="ml-2" v-if="scope.row.status == 3" type="success">编辑
                                    </el-tag>
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
                            <el-table-column label="操作" width="140">
                                <template #default="scope">
                                    <el-button v-if="scope.row.handStatus != 3" size="small" @click="chang3(scope.row)">
                                        确认
                                    </el-button>
                                    <!-- <el-button v-if="scope.row.handStatus != 3" size="small" @click="chang3(scope.row)">
                                        删除
                                    </el-button> -->
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </dv-border-box-13>
            </dv-decoration-11>
        </div>
        <el-dialog draggable v-model="dialogVisible2" title="主任务详情" width="80%" :before-close="handleClose">
            <el-descriptions title="" :column="3" border>
                <el-descriptions-item
                    label="主任务编号
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "
                    label-align="right" align="center" label-class-name="my-label" class-name="my-content" width="150px">
                    {{ from.grindId }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="主任务订单号
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "
                    label-align="right" align="center">
                    {{ from.grindNo }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="磨床编号
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "
                    label-align="right" align="center">
                    {{ from.grinderNumber }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="辊轴位置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "
                    label-align="right" align="center">
                    {{ from.position }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="磨床摆渡区-磨床待磨区
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "
                    label-align="right" align="center">
                    {{ from.step_01_Hand }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="磨床待磨区-磨床
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "
                    label-align="right" align="center">
                    {{ from.step_02_Machine }}
                </el-descriptions-item>
                <el-descriptions-item label="磨床待磨区" label-align="right" align="center">
                    {{ from.step_03_Peel }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="磨床磨削
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "
                    label-align="right" align="center">
                    {{ from.step_04_CaptainId }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="磨床-人工检测平台
        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "
                    label-align="right" align="center">
                    {{ from.step_05_PlatformId }}
                </el-descriptions-item>
                <el-descriptions-item label="人工检测平台-磨床摆渡区" label-align="right" align="center">
                    {{ from.step_06_BothId }}
                </el-descriptions-item>
            </el-descriptions>
        </el-dialog>
        <el-dialog v-model="dialogVisible" draggable title="拖拽详情" width="80%" :before-close="handleClose">
            {{ title }}
        </el-dialog>
        <el-dialog v-model="dialogVisible3" title="详情" draggable width="60%" :before-close="handleClose">
            <!-- <el-button style="position: relative;top: -66px;left: 58px;">出库</el-button> -->
            <el-card class="box-card" shadow="hover">
                起始位置：{{ stitle }}<br /><br />
                终点位置： <el-select v-model="etitle" @change="echange" class="m-2" placeholder="请选择终点位置">
                    <el-option v-for="item in endList" :key="item.position" :label="item.position" :value="item.position" />
                </el-select><br /><br />
                辊种类型： <el-select v-model="rollerType" class="m-2" placeholder="请选择终点位置">
                    <el-option v-for="item in rollerTypeList" :key="item.rollerType" :label="item.rollerType"
                        :value="item.rollerType" />
                </el-select><br /><br />
                <!-- {{ etitle }} -->
                <!-- 辊框号：{{ agvrollerList[0].boxId }}<br /><br /> -->
                任务类型： <el-radio-group @change="selectEnd" v-model="radio" class="ml-4">
                    <el-radio style="color: black" label="工作辊缓存区">半自动</el-radio>
                    <el-radio style="color: black" label="交接工位">全自动</el-radio><br /><br />
                </el-radio-group>
                <br />
                优先执行：
                <el-switch v-model="value" active-text="是" inactive-text="否" />
            </el-card>
            <br /><br />
            <el-table :data="agvrollerList" @selection-change="handleSelectionChange">
                <el-table-column v-if="stitlestatus" type="selection" width="55" />
                <el-table-column prop="boxId" label="辊框号">
                    <!-- <template #default="scope">
                        <span v-if="scope.row.agv_main">
                            {{ scope.row.agv_main.boxId }}
                        </span>
                    </template> -->
                </el-table-column>
                <el-table-column prop="rollerName" label="轧辊号" />
                <el-table-column prop="remarks" label="备注" />
                <el-table-column prop="slotName" label="卡槽位置" />
                <el-table-column prop="rollType" label="轧辊类型" />
                <el-table-column prop="accident" label="轧辊事故类型" />
                <!-- <el-table-column prop="rollStatus" label="轧辊是否拆装" />
                <el-table-column prop="rootHead" label="轧辊方向" />
                <el-table-column prop="outRoller" label="出辊状态" />
                <el-table-column prop="boxId" label="框号" />
                <el-table-column prop="grinderNo" label="磨床号" /> -->
            </el-table>
            <br />
            <br />
            <el-table :data="rollerList">
                <el-table-column prop="" label="辊框号">
                    <template #default="scope">
                        {{ scope.row.agv_main.boxId }}
                    </template>
                </el-table-column>
                <el-table-column prop="rollerName" label="轧辊号" />
                <el-table-column prop="remarks" label="备注" />
                <el-table-column prop="slotName" label="卡槽位置" />
                <el-table-column prop="rollType" label="轧辊类型" />
                <el-table-column prop="accident" label="轧辊事故类型" />
                <!-- <el-table-column prop="rollStatus" label="轧辊是否拆装" />
                <el-table-column prop="rootHead" label="轧辊方向" />
                <el-table-column prop="outRoller" label="出辊状态" />
                <el-table-column prop="boxId" label="框号" />
                <el-table-column prop="grinderNo" label="磨床号" /> -->
            </el-table>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible3 = false">取消</el-button>
                    <el-button v-if="stitlestatus" type="primary" @click="create(1)">拆装</el-button>
                    <el-button v-if="stitle == 'C02'" type="primary" @click="create(2)">出库</el-button>
                    <el-button type="primary" @click="createTask">确定</el-button>
                </span>
            </template>
        </el-dialog>
        <el-dialog v-model="dialogVisible4" title="详情" draggable width="60%" :before-close="handleClose">
        </el-dialog>
    </div>
</template>
<script setup lang="ts">
import { getFrameChild, getGrindAllAndData, selectAgvFramePositionInfo, selectAgvFrameAppointInfo, getAGVOtherStepInfo, getAGVGrindAllAndData, selectAgvFrameRegionMany, selectAgv_CarryInfo, updateFrameChild, updateAGVChild, insertOutMainList, updateAgvRollerParameterKey } from '@/api';
import { Alex } from '@/types';
import { ElMessage } from 'element-plus';
import { title } from 'process';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
const key = ref(0);
const dialogVisible = ref(false);
const dialogVisible3 = ref(false);
const dialogVisible4 = ref(false);
const stitlestatus = ref(false);
const title = ref('');
const agvrollerList: any = ref([]);
const stitle: any = ref('')
const etitle: any = ref('')
const radio = ref('工作辊缓存区');
const rollerType = ref('工作辊 ');
const multipleSelection = ref();
const handleSelectionChange = (val: any) => {
    multipleSelection.value = val
    console.log(val);
}
const rollerTypeList = ref([
    {
        rollerType: '工作辊'
    },
    {
        rollerType: '一中间辊'
    }
]);
const sTable = ref('');
const eTable = ref('');
const value = ref('');
const formData: any = ref({})
const rollerList = ref([]);
const endList: any = ref([])
const step = ref({
    step1: false,
    step2: false,
    step3: false,
    step4: false
});
const fname = ref('')
const data: any = reactive({
    dataA: [
        {
            title: 'A1'
        },
        {
            title: 'A2'
        },
        {
            title: 'A3'
        }
    ],
    grindListAll2: []
})
const echange = (i: any) => {
    console.log(i);
    let alex = new Alex();
    alex.parameter = {
        flag: i
    }
    selectAgvFramePositionInfo(alex).then((res: any) => {
        fname.value = res.result.agv_frame.fname
    })
}
const create = (i: any) => {
    switch (i) {
        case 1:
            for (let i = 0; i < multipleSelection.value.length; i++) {
                delete multipleSelection.value[i].agv_main
            }
            let alex = new Alex();
            alex.parameter = {
                agvRollerList: multipleSelection.value
            }

            updateAgvRollerParameterKey(alex).then((res: any) => {
                dialogVisible3.value = false;
                ElMessage({
                    message: res.message.msg,
                    type: 'success',
                })
            })
            break;
        case 2:

            break;
    }

}
const createTask = () => {
    switch (radio.value) {
        case '工作辊缓存区':
            console.log('是半自动');
            if (etitle.value) {
                let alex = new Alex();
                alex.parameter = {
                    flag: stitle.value
                }
                selectAgvFramePositionInfo(alex).then((res: any) => {
                    console.log(res.result.agv_frame);
                    alex.parameter = {
                        rollerType: rollerType.value,
                        insertRollerList: agvrollerList.value,
                        agv_Carry: {
                            boxId: agvrollerList.value[0].boxId,
                            start: stitle.value,
                            startName: res.result.agv_frame.fname,
                            end: etitle.value,
                            fname: fname.value,
                            ename: "背驼",
                            priority: 10
                        }
                    }
                    selectAgv_CarryInfo(alex).then((res: any) => {
                        ElMessage({
                            message: res.message.msg,
                            type: 'success',
                        })
                        dialogVisible3.value = false;
                    })
                })
            } else {
                ElMessage({
                    message: '请选择终点位置！',
                    type: 'warning',
                })
            }
            break;
        case '交接工位':
            console.log('是全自动');

            if (etitle.value) {
                let alex = new Alex();
                alex.parameter = {
                    flag: stitle.value
                }
                selectAgvFramePositionInfo(alex).then((res: any) => {
                    console.log(res.result.agv_frame);
                    alex.parameter = {
                        ename: "背驼",
                        start: stitle.value,
                        startName: res.result.agv_frame.fname,
                        outMain: {
                            priority: 10,
                            boxType: rollerType.value,
                            boxId: agvrollerList.value[0].boxId,
                            formulate_End: etitle.value,
                            formulate_EndName: fname.value
                        },
                        insertAgvRollerList: agvrollerList.value
                    }
                    insertOutMainList(alex).then((res: any) => {
                        ElMessage({
                            message: res.message.msg,
                            type: 'success',
                        })
                        dialogVisible3.value = false;
                    })
                })
            } else {
                ElMessage({
                    message: '请选择终点位置！',
                    type: 'warning',
                })
            }
            break;
    }



}
const selectEnd = () => {
    etitle.value = null;
    let alex = new Alex();
    alex.parameter = {
        flag: radio.value
    }

    selectAgvFrameAppointInfo(alex).then((res: any) => {
        endList.value = res.result.agv_frameList;
    })
}

const chang = (row: any) => {
    selectEnd();
    stitle.value = row[0];
    if (stitle.value == 'F15' || stitle.value == 'F16' || stitle.value == 'F17' || stitle.value == 'F18') {
        stitlestatus.value = true;
    } else {
        stitlestatus.value = false;
    }
    dialogVisible3.value = true

    console.log(row);
    let alex = new Alex();

    alex.parameter = {
        flag: row
    }
    selectAgvFrameRegionMany(alex).then((res: any) => {
        dialogVisible3.value = true
        console.log(res);
        if (res.result) {
            agvrollerList.value = res.result.agv_rollerList;
            rollerList.value = res.result.rollerList;
        }
    })
}

const handleClose = (done: () => void) => {
    done()
}
const from: any = ref()
const dialogVisible2 = ref(false)
const finishStatus = ref('false')
const row = ref()
const chang2 = (row: any) => {
    console.log(row);
    from.value = row
    dialogVisible2.value = true
}
const bMove = ref(true)
const b1Click = () => {
    getGrindData();
    bMove.value = !bMove.value;
}
// 查询主任务
const getGrindData = () => {
    data.grindListAll2 = []
    let alex = new Alex
    alex.parameter = {
        current: finishStatus.value == 'true' ? true : false
    }
    getAGVGrindAllAndData(alex).then((res: any) => {
        console.log(res);
        data.grindListAll = res.result.getAgvMainOrOK
    })
}

const updRow = (rowx: any) => {

    row.value = rowx;

    getChild();
}
// 查询子任务
const getChild = () => {
    if (row.value) {
        data.grindListAll2 = []
        let alex = new Alex
        alex.parameter = {
            agvMainOne: row.value
        }
        getAGVOtherStepInfo(alex).then((res: any) => {
            if (res.result.agvMainOne.stepList) {
                data.grindListAll2 = res.result.agvMainOne.stepList
                console.log(res);
                // for (let i = 0; i < data.grindListAll2.length; i++) {
                //     console.log(i);
                //     data.grindListAll2[i].num = `step${i}`
                // }
            }
        })
    }
}
const chang3 = (row: any) => {
    console.log(row);

    let alex = new Alex
    alex.parameter = {
        rimNum: row.rimNum
    }
    updateAGVChild(alex).then((res: any) => {
        setTimeout(() => {
            getGrindData();
            getChild();
            ElMessage({
                message: '操作成功！',
                type: 'success',
            })
        }, 1000)
    })
}
// 开始拖动时
const dragStart = (event: any) => {
    title.value = event.path[1].id + '-' + event.path[0].id
    console.log("拖动", event.path[1].id, '的', event.path[0].id);
}
// 拖动时
const allowDrop = (event: any) => {
    // console.log(event);
    event.preventDefault();
}
// 移入拖拽区时
const dragEnter = (event: any) => {
    if (event.target.className == "droptarget") {
        event.target.style.border = "3px dotted red";
    }
}
// 移出拖拽区时
const dragLeave = (event: any) => {
    if (event.target.className == "droptarget") {
        event.target.style.border = "";
    }
}
// 松手时
const drop = (event: any) => {
    event.target.style.border = "";
    title.value += " —— " + event.path[1].id + '-' + event.path[0].id
    dialogVisible.value = true;
    console.log("到了", event.path[1].id, '的', event.path[0].id);
}

const id: any = ref()
onMounted(() => {
    getGrindData();
    id.value = setInterval(async () => {
        await getGrindData();
        await getChild();
    }, 10000)
})
onUnmounted(() => {
    clearInterval(id.value);
})
</script>
<style lang="less" scoped>
#ARegion {
    left: 650px;
    top: 500px;

    #A01 {
        left: 14px;
        bottom: 14px;
    }

    #A02 {
        left: 80px;
        bottom: 14px;

    }

    #A03 {
        left: 145px;
        bottom: 14px;

    }

    #A04 {
        right: 38px;
        transform: rotateZ(-90deg);
        top: 212px;
    }

    #A05 {
        right: 38px;
        transform: rotateZ(-90deg);
        top: 134px;
    }

    #A06 {
        right: 38px;
        transform: rotateZ(-90deg);
        top: 57px;
    }
}





#BRegion {
    left: 1260px;
    top: -250px;

    #C04 {
        left: 17px;
        bottom: 35px;
    }

    #C03 {
        left: 90px;
        bottom: 35px;

    }

    #C02 {
        left: 155px;
        bottom: 35px;

    }

    #C01 {
        left: 222px;
        bottom: 35px;

    }
}

#CRegion {
    left: 950px;
    top: -405px;

    #F22 {
        left: 25px;
        bottom: 181px;
    }

    #F21 {
        left: 91px;
        bottom: 181px;
    }

    #F20 {
        left: 158px;
        bottom: 181px;
    }

    #F19 {
        left: 225px;
        bottom: 181px;
    }

    #F08 {
        left: 25px;
        bottom: 87px;
    }

    #F07 {
        left: 25px;
        bottom: 46px;
    }

    #F06 {
        left: 91px;
        bottom: 87px;
    }

    #F05 {
        left: 91px;
        bottom: 46px;
    }

    #F04 {
        left: 158px;
        bottom: 87px;
    }

    #F03 {
        left: 158px;
        bottom: 46px;
    }

    #F02 {
        left: 225px;
        bottom: 87px;
    }

    #F01 {
        left: 225px;
        bottom: 46px;
    }
}

#DRegion {
    left: 600px;
    top: -798px;

    #F16 {
        left: 10px;
        transform: rotateZ(-90deg);
        top: 40px;
    }

    #F15 {
        left: 10px;
        transform: rotateZ(-90deg);
        top: 120px;
    }

    #F17 {
        left: 150px;
        transform: rotateZ(-90deg);
        top: 120px;
    }

    #F18 {
        left: 150px;
        transform: rotateZ(-90deg);
        top: 40px;
    }

    #B03 {
        left: 91px;
        bottom: 8px;
    }

    #B01 {
        left: 153px;
        bottom: 8px;
    }

    #B02 {
        left: 220px;
        bottom: 8px;
    }
}

#ERegion {
    left: 300px;
    top: -1006px;

    #C07 {
        top: 90px;
        left: 90px
    }

    #C06 {
        top: 90px;
        left: 156px
    }

    #C05 {
        top: 90px;
        left: 222px
    }

    #F14 {
        bottom: 88px;
        left: 60px
    }

    #F13 {
        bottom: 48px;
        left: 60px
    }

    #F12 {
        bottom: 88px;
        left: 135px
    }

    #F11 {
        bottom: 48px;
        left: 135px
    }

    #F10 {
        bottom: 88px;
        left: 202px
    }

    #F09 {
        bottom: 48px;
        left: 202px
    }
}

#FRegion {
    left: 5px;
    top: -1393px;

    #C11 {
        left: 16px;
        bottom: 55px;
    }

    #C09 {
        left: 97px;
        bottom: 96px;
    }

    #C08 {
        right: 68px;
        bottom: 95px;
    }
}

.rightHome {
    width: 2%;
    height: 100px;
    /* display: flex; */
}

.Q {
    color: rgb(255, 167, 3);
    font-size: 80px;
    position: relative;
    top: 0px;
    left: -3px;
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

.rightTable {
    position: absolute;
    right: -310px;
    backdrop-filter: blur(30px);
    top: 70px;
    transform: rotate(90deg);
    width: 800px;
    height: 780px;
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

.droptarget {
    width: 30px;
    height: 5px;
    line-height: 5px;
    padding: 10px;
    z-index: 200px;
    text-align: center;
    /* margin: 20px; */
    cursor: move;
    // background-color: #aaaaaa;
    border: 1px solid #aaaaaa;
}


.box {
    width: 290px;
    height: 300px;
    padding: 1px 0;
    position: relative;
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* align-items: center; */
    /* justify-content: space-between; */
    /* margin-bottom: 20px; */
    // border: 1px solid red;
}

.box div {
    position: absolute;
}

:deep(.el-table tr:hover) {
    color: black;
    cursor: move;
    background-color: white;
}

.left {
    width: 20%;
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* border: 1px solid red; */
    padding: 20px;
    height: 100%;
}

.right {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    /* border: 1px solid red; */
    padding: 20px;
    height: 100%;
}



.bodyBox {
    /* width: 83vw; */
    width: 94vw;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    background-image: url(../assets/bgt.png);
    color: white;
    justify-content: space-between;
}

h1 {
    position: absolute;
    margin-bottom: 200px;
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
    cursor: move;
    background-color: white;
}

.el-radio {
    color: white;
}
</style>