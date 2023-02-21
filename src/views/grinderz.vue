<template>
    <div id="box">
        <div class="home">
            <dv-border-box-13 title="18#磨床" class="box11">
                <span id="ftext">18#磨床</span>
                <div class="tableData2">
                    <el-table name="B" class="t2" ref="dragTable" @row-dblclick="chang" :key="key" :data="data.tableData2"
                        row-key="id" border>
                        <!-- <el-table-column prop="slotPosition" label="槽号"></el-table-column> -->
                        <el-table-column label="轧辊号">
                            <template #default="scope">
                                <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.rollerName }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="slotStatus" label="检测状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.isFinish == 0" type="warning">未检测</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.isFinish == 1" type="success">已检测</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column prop="slotStatus" label="任务状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.isRefer == 0" type="warning">无任务</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.isRefer == 1" type="success">有任务</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column prop="" label="上次直径">
                            <template #default="scope">
                                <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.last_Diameter }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="last_RollTypeCode" label="上次辊种">
                            <template #default="scope">
                                <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.last_RollTypeCode }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="" label="状态">
                            <template #default="scope">
                                <div v-if="scope.row.electronic">
                                    <el-tag class="ml-2" v-if="scope.row.electronic.estatus == '2'" type="warning">待机
                                    </el-tag>
                                    <el-tag class="ml-2" v-if="scope.row.electronic.estatus == '3'" type="warning">空闲
                                    </el-tag>
                                    <el-tag class="ml-2" v-if="scope.row.electronic.estatus == '1'" type="success">允许下料
                                    </el-tag>
                                    <el-tag class="ml-2" v-if="scope.row.electronic.estatus == '4'" type="success">允许上料
                                    </el-tag>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="current_RollTypeCode" label="当前辊种"></el-table-column>
                        <el-table-column prop="current_Diameter" label="当前直径"></el-table-column>
                        <el-table-column prop="" label="轧机号 "></el-table-column>
                    </el-table>
                </div>
            </dv-border-box-13>
            <dv-border-box-13 title="17#磨床" class="box11">
                <span id="ftext">17#磨床</span>
                <div class="tableData">
                    <el-table name="A" class="t1" ref="dragTable" @row-dblclick="chang" :data="data.tableData" row-key="id"
                        :key="key" border>
                        <!-- <el-table-column prop="slotPosition" label="槽号"></el-table-column> -->
                        <el-table-column label="轧辊号 ">
                            <template #default="scope">
                                <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.rollerName }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="slotStatus" label="检测状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.isFinish == 0" type="warning">未检测</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.isFinish == 1" type="success">已检测</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column prop="slotStatus" label="任务状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.isRefer == 0" type="warning">无任务</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.isRefer == 1" type="success">有任务</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column prop="" label="上次直径">
                            <template #default="scope">
                                <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.last_Diameter }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="last_RollTypeCode" label="上次辊种">
                            <template #default="scope">
                                <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.last_RollTypeCode }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="" label="状态">
                            <template #default="scope">
                                <div v-if="scope.row.electronic">
                                    <el-tag class="ml-2" v-if="scope.row.electronic.estatus == '2'" type="warning">待机
                                    </el-tag>
                                    <el-tag class="ml-2" v-if="scope.row.electronic.estatus == '3'" type="warning">空闲
                                    </el-tag>
                                    <el-tag class="ml-2" v-if="scope.row.electronic.estatus == '1'" type="success">允许下料
                                    </el-tag>
                                    <el-tag class="ml-2" v-if="scope.row.electronic.estatus == '4'" type="success">允许上料
                                    </el-tag>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="current_RollTypeCode" label="当前辊种"></el-table-column>
                        <el-table-column prop="current_Diameter" label="当前直径"></el-table-column>
                        <el-table-column prop="" label="轧机号 "></el-table-column>
                    </el-table>
                </div>
            </dv-border-box-13>
            <dv-border-box-13 title="三号机器人" class="box11">
                <span id="ftext">三号机器人</span>
                <div class="tableData3">
                    <el-table name="C" class="t5" ref="dragTable" :data="data.tableData5" row-key="id" :key="key" border>

                        <el-table-column prop="ename" label="设备名称" width="120"></el-table-column>
                        <el-table-column label="轧辊号 ">
                            <template #default="scope">
                                <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.rollerName }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="机器状态" width="140">
                            <template #default="scope">
                                <template v-if="scope.row.ename == '三号机器人'">
                                    <el-tag class="ml-2" v-if="scope.row.estatus == '2'" type="warning">空闲</el-tag>
                                    <el-tag class="ml-2" v-if="scope.row.estatus == '1'" type="success">繁忙</el-tag>
                                </template>
                                <template v-else>
                                    <el-tag class="ml-2" v-if="scope.row.estatus == '3'" type="warning">空闲</el-tag>
                                    <el-tag class="ml-2" v-if="scope.row.estatus == '2'" type="success">繁忙</el-tag>
                                </template>
                                &nbsp;
                                <el-button v-if="scope.row.estatus != '2'" size="small" @click="chang4(scope.row, 1)">确认
                                </el-button>
                            </template>
                        </el-table-column>
                        <el-table-column label="任务状态" width="150">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.jobStatus == '2'" type="warning">无任务</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.jobStatus == '1'" type="success">进行中</el-tag>
                                &nbsp;
                                <el-button v-if="scope.row.jobStatus != '2'" size="small" @click="chang4(scope.row, 2)">
                                    确认
                                </el-button>
                            </template>
                        </el-table-column>
                        <el-table-column label="在线状态" width="120">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.Grind_CurrentState == '0'" type="danger">未连接
                                </el-tag>
                                <el-tag class="ml-2" v-if="scope.row.Grind_CurrentState == '1'" type="success">在线
                                </el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column label="上料状态" width="120">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.jobStatus == '0'" type="danger">禁止上料</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.jobStatus == '1'" type="success">允许上料</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column label="下料状态" width="120">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.jobStatus == '0'" type="danger">禁止下料</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.jobStatus == '1'" type="success">允许下料</el-tag>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </dv-border-box-13>
            <dv-border-box-13 title="C08" class="box11" style="height:420px">
                <span id="ftext">C08</span>
                <div class="tableData6">
                    <el-table name="C" class="t6" ref="dragTable" @row-dblclick="chang" :data="data.tableData6" row-key="id"
                        :key="key" border>
                        <!-- <el-table-column prop="slotPosition" label="槽号"></el-table-column> -->
                        <el-table-column label="轧辊号 ">
                            <template #default="scope">
                                <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.rollerName }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="slotStatus" label="检测状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.isFinish == 0" type="warning">未检测</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.isFinish == 1" type="success">已检测</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column prop="slotStatus" label="任务状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.isRefer == 0" type="warning">无任务</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.isRefer == 1" type="success">有任务</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column prop="" label="上次直径">
                            <template #default="scope">
                                <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.last_Diameter }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="last_RollTypeCode" label="上次辊种">
                            <template #default="scope">
                                <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.last_RollTypeCode }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="" label="状态"></el-table-column>
                        <el-table-column prop="current_RollTypeCode" label="当前辊种"></el-table-column>
                        <el-table-column prop="current_Diameter" label="当前直径"></el-table-column>
                        <el-table-column prop="" label="轧机号 "></el-table-column>

                    </el-table>
                </div>
            </dv-border-box-13>
            <dv-border-box-13 title="U型辊架" class="box11" style="height:420px">
                <span id="ftext">U型辊架</span>
                <el-button id="fbutton" type="primary" @click="selectU" plain size="small">查看</el-button>
                <div class="tableData4">
                    <el-table name="C" class="t4" ref="dragTable" @row-dblclick="chang" :key="key" :data="data.tableData4"
                        row-key="id" border>
                        <!-- <el-table-column prop="slotPosition" label="槽号"></el-table-column> -->
                        <el-table-column label="轧辊号 ">
                            <template #default="scope">
                                <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.rollerName }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="slotStatus" label="检测状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.isFinish == 0" type="warning">未检测</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.isFinish == 1" type="success">已检测</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column prop="slotStatus" label="任务状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.isRefer == 0" type="warning">无任务</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.isRefer == 1" type="success">有任务</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column prop="" label="上次直径">
                            <template #default="scope">
                                <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.last_Diameter }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="last_RollTypeCode" label="上次辊种">
                            <template #default="scope">
                                <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.last_RollTypeCode }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="" label="状态"></el-table-column>
                        <el-table-column prop="current_RollTypeCode" label="当前辊种"></el-table-column>
                        <el-table-column prop="current_Diameter" label="当前直径"></el-table-column>
                        <el-table-column prop="" label="轧机号 "></el-table-column>
                    </el-table>
                </div>
            </dv-border-box-13>
            <dv-border-box-13 title="C09" class="box11" style="height:420px">
                <span id="ftext">C09</span>
                <div class="tableData7">
                    <el-table name="C" class="t7" ref="dragTable" @row-dblclick="chang" :data="data.tableData7" row-key="id"
                        :key="key" border>
                        <!-- <el-table-column prop="slotPosition" label="槽号"></el-table-column> -->
                        <el-table-column label="轧辊号 ">
                            <template #default="scope">
                                <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.rollerName }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="slotStatus" label="检测状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.isFinish == 0" type="warning">未检测</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.isFinish == 1" type="success">已检测</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column prop="slotStatus" label="任务状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.isRefer == 0" type="warning">无任务</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.isRefer == 1" type="success">有任务</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column prop="" label="上次直径">
                            <template #default="scope">
                                <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.last_Diameter }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="last_RollTypeCode" label="上次辊种">
                            <template #default="scope">
                                <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.last_RollTypeCode }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="" label="状态"></el-table-column>
                        <el-table-column prop="current_RollTypeCode" label="当前辊种"></el-table-column>
                        <el-table-column prop="current_Diameter" label="当前直径"></el-table-column>
                        <el-table-column prop="" label="轧机号 "></el-table-column>
                    </el-table>
                </div>
            </dv-border-box-13>
            <dv-border-box-13 title="三号人工检测平台" class="box11" style="width: 1000px;height:240px;margin: 0 auto;">
                <span id="ftext">三号人工检测平台</span>
                <div class="tableData5">

                    <el-table name="C" class="t3" @row-dblclick="chang" ref="dragTable" :key="key" :data="data.tableData3"
                        row-key="id" border>
                        <!-- <el-table-column prop="slotPosition" label="槽号"></el-table-column> -->
                        <el-table-column label="轧辊号 ">
                            <template #default="scope">
                                <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.rollerName }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="检测状态">
                            <template #default="scope">
                                <div v-if="scope.row.detection">
                                    <el-tag class="ml-2" v-if="scope.row.detection.dstatus == 1" type="warning">允许下料
                                    </el-tag>
                                    <el-tag class="ml-2" v-if="scope.row.detection.dstatus == 3" type="warning">允许上料
                                    </el-tag>
                                    <el-tag class="ml-2" v-if="scope.row.detection.dstatus == 2" type="success">待机
                                    </el-tag>
                                </div>
                                <div v-else>
                                    <el-tag class="ml-2" type="warning">等待上辊</el-tag>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column label="任务状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.isRefer == 0" type="warning">无任务</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.isRefer == 1" type="success">有任务</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column label="检测人">
                            <template #default="scope">
                                <span v-if="scope.row.detection">{{ scope.row.detection.dpeople }}</span>
                                <span v-else>暂无</span>
                            </template>
                        </el-table-column>
                        <!-- <el-table-column prop="" label="上次辊种"></el-table-column> -->
                        <!-- <el-table-column prop="" label="状态"></el-table-column> -->
                        <!-- <el-table-column prop="" label="当前辊种"></el-table-column> -->
                        <!-- <el-table-column prop="" label="轧机号 "></el-table-column> -->
                        <el-table-column label="操作">
                            <template #default="scope">
                                <!-- <el-button size="small" :disabled="scope.row.detection ? false : true"
                                                                    @click="slot(scope.row, 4)">操作</el-button> -->
                                <el-button size="small" @click="slot(scope.row, 4)">操作</el-button>
                            </template>
                        </el-table-column>

                    </el-table>
                </div>
            </dv-border-box-13>
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

                        <el-table name="C" class="t8" @row-click="updRow" @row-dblclick="chang2" ref="dragTable"
                            :data="data.grindListAll" row-key="id" :key="key" border>
                            <el-table-column>
                                <template #header>
                                    <el-radio-group @change="getGrindData" v-model="finishStatus">
                                        <el-radio label="true" border>已完成</el-radio>
                                        <el-radio label="false" border>未完成</el-radio>
                                        <el-radio label="50" border>已终止</el-radio>
                                    </el-radio-group>
                                </template>
                                <el-table-column prop="grindId" label="主任务号" width="180"></el-table-column>
                                <el-table-column label="轧辊号" width="180">
                                    <template #default="scope">
                                        {{ scope.row.agv_roller.rollerName }}
                                    </template>
                                </el-table-column>
                                <el-table-column prop="current" label="当前步骤号"></el-table-column>
                                <el-table-column label="操作" width="190">
                                    <template #default="scope">
                                        <el-button size="small" @click="chang5(scope.row, '优先')">优先
                                        </el-button>
                                        <el-button size="small" @click="chang5(scope.row, '终止')">终止任务
                                        </el-button>
                                        <el-button size="small" @click="getGrindData">刷新
                                        </el-button>
                                    </template>
                                </el-table-column>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="tableData9">
                        <el-table name="C" class="t9" ref="dragTable" :data="data.grindListAll2" row-key="id" border
                            :key="key">
                            <el-table-column prop="num" label="步骤" width="60"></el-table-column>
                            <el-table-column prop="rimNum" label="轧辊号" width="100">
                                <template #default="scope">
                                    {{ scope.row.agv_roller.rollerName }}
                                </template>
                            </el-table-column>
                            <el-table-column label="任务状态">
                                <template #default="scope">
                                    <el-tag class="ml-2" v-if="scope.row.status == 1" type="warning">未发送
                                    </el-tag>
                                    <el-tag class="ml-2" v-if="scope.row.status == 2">已发送</el-tag>
                                    <el-tag class="ml-2" v-if="scope.row.status == 3" type="success">已完成
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
                                    {{ scope.row.endName + '-' + scope.row.end }}
                                </template>
                            </el-table-column>
                            <el-table-column prop="expirationTime" label="开始时间" width="110"></el-table-column>
                            <el-table-column prop="aroundTime" label="结束时间" width="110"></el-table-column>
                            <el-table-column label="操作" width="140">
                                <template #default="scope">
                                    <el-button v-if="scope.row.status != 3" size="small" @click="chang3(scope.row)">
                                        确认
                                    </el-button>
                                    <el-button v-if="scope.row.status != 3" size="small" @click="chang3(scope.row)">
                                        删除
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </dv-border-box-13>
            </dv-decoration-11>
        </div>
    </div>
    <el-dialog v-model="dialogVisible" title="详情" width="50%" :before-close="handleClose">
        <el-card class="box-card" shadow="hover">
            <el-form :model="form" label-width="70px">
                <el-form-item label="当前槽号">
                    <el-input v-model="form.slotPosition" placeholder="请输入槽号" disabled clearable />
                </el-form-item>
                <el-form-item label="轧辊号">
                    <el-input v-model="form.rollId" placeholder="请输入轧辊号" clearable />
                </el-form-item>
                <el-form-item label="任务状态">
                    <el-switch v-model="form.slotStatus" active-text="有任务" inactive-text="无任务" />
                </el-form-item>
            </el-form>
        </el-card>
        <br>
        <el-card class="box-card" shadow="hover">
            磨床号：{{ queryByKey.Grinder_No }}<br>
            机组号：{{ queryByKey.Plant_Code }}<br>
            辊种：{{ queryByKey.Roll_Seed }}<br>
            轧辊类型：{{ queryByKey.Roll_Type }}<br>
            盖瓦号：{{ queryByKey.Taper }}
        </el-card>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="save">保存</el-button>
            </span>
        </template>
    </el-dialog>
    <el-dialog v-model="dialogVisible2" title="主任务详情" width="80%" :before-close="handleClose">
        <el-descriptions title="" :column="3" border>
            <el-descriptions-item label="主任务编号
                                                                                " label-align="right" align="center"
                label-class-name="my-label" class-name="my-content" width="150px">
                {{ from.grindId }}
            </el-descriptions-item>
            <el-descriptions-item label="主任务订单号
                                                                                " label-align="right" align="center">
                {{ from.grindNo }}
            </el-descriptions-item>
            <el-descriptions-item label="磨床编号
                                                                                " label-align="right" align="center">
                {{ from.grinderNumber }}
            </el-descriptions-item>
            <el-descriptions-item label="辊轴位置
                                                                                " label-align="right" align="center">
                {{ from.position }}
            </el-descriptions-item>
            <el-descriptions-item label="磨床摆渡区-磨床待磨区
                                                                                " label-align="right" align="center">
                {{ from.step_01_Hand }}
            </el-descriptions-item>
            <el-descriptions-item label="磨床待磨区-磨床
                                                                                " label-align="right" align="center">
                {{ from.step_02_Machine }}
            </el-descriptions-item>
            <el-descriptions-item label="磨床待磨区" label-align="right" align="center">
                {{ from.step_03_Peel }}
            </el-descriptions-item>
            <el-descriptions-item label="磨床磨削
                                                                                " label-align="right" align="center">
                {{ from.step_04_CaptainId }}
            </el-descriptions-item>
            <el-descriptions-item label="磨床-三号人工检测平台

                                                                                " label-align="right" align="center">
                {{ from.step_05_PlatformId }}
            </el-descriptions-item>
            <el-descriptions-item label="三号人工检测平台-磨床摆渡区" label-align="right" align="center">
                {{ from.step_06_BothId }}
            </el-descriptions-item>
        </el-descriptions>
    </el-dialog>
    <el-dialog v-model="dialogVisible3" title="待确认列表" width="50%" :before-close="handleClose">
        <el-table ref="dragTable" :data="detectionListIsNull" row-key="id" border>
            <el-table-column prop="dno" label="任务号"></el-table-column>
            <el-table-column prop="rollerId" label="轧辊号"></el-table-column>
            <el-table-column prop="dtime" label="检查时间"></el-table-column>
            <el-table-column prop="diameter" label="轧辊直径"></el-table-column>
            <!-- <el-table-column prop="dpeople" label="检查人"></el-table-column> -->
            <!-- <el-table-column prop="dremarks" label="备注"></el-table-column> -->
            <el-table-column label="任务状态">
                <template #default="scope">
                    <el-tag class="ml-2" v-if="scope.row.dstatus == 1" type="warning">未确认</el-tag>
                    <el-tag class="ml-2" v-if="scope.row.dstatus == 2" type="success">已确认</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button @click="slot(scope.row, 4)">查看</el-button>
                    <!-- <el-button @click="slot(scope.row, 2)">确认</el-button> -->
                </template>
            </el-table-column>
        </el-table>
        <br />
        <br />
        <!-- <el-table ref="dragTable" :data="detectionListIsNotNull" row-key="id" border>
            <el-table-column label="已确认列表">

                <el-table-column prop="dno" label="任务号"></el-table-column>
                <el-table-column prop="rollerId" label="轧辊号"></el-table-column>
                <el-table-column prop="dtime" label="检查时间"></el-table-column>
                <el-table-column prop="diameter" label="轧辊直径"></el-table-column>
                <el-table-column prop="dpeople" label="检查人"></el-table-column>
                <el-table-column prop="dremarks" label="备注"></el-table-column>
                <el-table-column label="任务状态">
                    <template #default="scope">
                        <el-tag class="ml-2" v-if="scope.row.dstatus == 0" type="warning">未确认</el-tag>
                        <el-tag class="ml-2" v-if="scope.row.dstatus == 1" type="success">已确认</el-tag>
                    </template>
                </el-table-column>
            </el-table-column>
        </el-table> -->
    </el-dialog>
    <el-dialog v-model="dialogVisible4" title="创建主任务" width="50%" :before-close="handleClose">
        <el-card class="box-card" shadow="hover">
            <h1>主任务</h1>
            <el-checkbox v-model="step.step1" label="Step1(AGV->辊架)" :disabled="d1" />
            <el-checkbox v-model="step.step2" label="Step2(U辊架->磨床)" :disabled="d2" />
            <el-checkbox v-model="step.step3" label="Step3(磨床->人工检测)" :disabled="d3" />
            <el-checkbox v-model="step.step4" label="Step4(人工检测->U型辊架)" :disabled="d4" />
        </el-card><br />
        <el-card class="box-card" shadow="hover">
            <h1>子任务</h1>
            起始位置：{{ stitle + '-' + sTable }}<br /><br />
            终点位置：{{ etitle + '-' + eTable }}<br /><br />
            轧辊号：{{ formData.rollId }}<br /><br />
            优先执行：
            <el-switch v-model="value" active-text="是" inactive-text="否" />
        </el-card>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible4 = false">取消</el-button>
                <el-button type="primary" @click="createTask">确定</el-button>
            </span>
        </template>
    </el-dialog>
    <el-dialog v-model="dialogVisible5" title="新增主任务" width="30%" :before-close="handleClose">
        <el-card class="box-card" shadow="hover">
            <el-form :model="inputform" label-width="80px">
                <el-form-item label="辊框编号">
                    <el-input placeholder="请输入辊框编号" v-model="form.name" />
                </el-form-item>
                <el-form-item label="辊框位置">
                    <el-input placeholder="请输入辊框位置" v-model="form.name" />
                </el-form-item>
                <el-form-item label="周转方向">
                    <el-input placeholder="请输入周转方向" v-model="form.name" />
                </el-form-item>
                <el-form-item label="轧辊号1">
                    <el-input placeholder="请输入轧辊号1" v-model="form.name" />
                </el-form-item>
                <el-form-item label="轧辊号2">
                    <el-input placeholder="请输入轧辊号2" v-model="form.name" />
                </el-form-item>
                <el-form-item label="轧辊号3">
                    <el-input placeholder="请输入轧辊号3" v-model="form.name" />
                </el-form-item>
                <el-form-item label="轧辊号4">
                    <el-input placeholder="请输入轧辊号4" v-model="form.name" />
                </el-form-item>
                <el-form-item label="轧辊号5">
                    <el-input placeholder="请输入轧辊号5" v-model="form.name" />
                </el-form-item>
                <el-form-item label="轧辊号6">
                    <el-input placeholder="请输入轧辊号6" v-model="form.name" />
                </el-form-item>
            </el-form>
        </el-card>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible5 = false">取消</el-button>
                <el-button type="primary" @click="savex">确定</el-button>
            </span>
        </template>
    </el-dialog>
    <el-dialog draggable v-model="dialogVisible6" title="查看详情" width="50%" :before-close="handleClose">
        <el-card class="box-card" shadow="hover">
            <el-form :model="inputform" style="display: flex;flex-wrap: wrap;" label-width="80px">
                <el-form-item label="任务号">
                    <el-input placeholder="请输入任务号" disabled v-model="form.dno" />
                </el-form-item>
                <el-form-item label="轧辊号">
                    <el-input placeholder="请输入轧辊号" disabled v-model="form.rollerId" />
                </el-form-item>
                <el-form-item label="检查时间">
                    <el-input placeholder="请输入检查时间" disabled v-model="form.dtime" />
                </el-form-item>
                <el-form-item label="轧辊直径">
                    <el-input placeholder="请输入轧辊直径" disabled v-model="form.diameter" />
                </el-form-item>
                <el-form-item label="检查人">
                    <el-input placeholder="请输入检查人" disabled v-model="form.dpeople" />
                </el-form-item>
                <!-- <el-form-item label="轧辊类型">
                    <el-input placeholder="请输入轧辊类型" disabled v-model="form.rollType" />
                </el-form-item> -->
                <el-divider />
                <el-form-item label="机组号">
                    <el-select v-model="form.unitNum" disabled class="m-2" placeholder="请选择机组号">
                        <el-option v-for="item in unitNumList" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="磨床号">
                    <el-select v-model="form.grindNum" class="m-2" placeholder="请选择磨床">
                        <el-option v-for="item in grindNumNoList" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="辊种">
                    <el-select v-model="form.rollType" class="m-2" placeholder="请选择辊种">
                        <el-option v-for="item in rollTypeList" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="班组">
                    <el-select v-model="form.team" disabled class="m-2" placeholder="请选择班组">
                        <el-option v-for="item in teamList" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="班次">
                    <el-select v-model="form.classTimes" disabled class="m-2" placeholder="请选择班次">
                        <el-option v-for="item in classTimesList" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="表面状态">
                    <el-select v-model="form.tableFace" class="m-2" placeholder="请选择轧辊表面状态">
                        <el-option v-for="item in tableFaceList" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="检测结果">
                    <el-select v-model="form.testResult" class="m-2" placeholder="请选择检测结果">
                        <el-option v-for="item in testResultList" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="异常处理">
                    <el-select v-model="form.exception" class="m-2" placeholder="请选择异常处理">
                        <el-option v-for="item in exceptionList" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="异常原因">
                    <el-select v-model="form.dremarks" class="m-2" placeholder="请选择异常原因">
                        <el-option v-for="item in dremarksList" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
            </el-form>
        </el-card>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible6 = false">取消</el-button>
                <el-button type="primary" @click="slot(form, 2)">确定</el-button>
            </span>
        </template>
    </el-dialog>
    <el-dialog draggable v-model="dialogVisible7" title="3号U型辊架状态" width="50%">
        <el-table :key="dialogVisible7" :row-style="{ height: '0' }" :cell-style="{ padding: '0' }" ref="multipleTableRef"
            @selection-change="handleSelectionChange" :data="UData" row-key="id" border>
            <el-table-column prop="slotPosition" label="槽号"></el-table-column>
            <el-table-column label="轧辊号 ">
                <template #default="scope">
                    <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.rollerName }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="" label="上次直径">
                <template #default="scope">
                    <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.last_Diameter }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="last_RollTypeCode" label="上次辊种">
                <template #default="scope">
                    <span v-if="scope.row.grind">{{ scope.row.grind.agv_roller.last_RollTypeCode }}</span>
                </template>
            </el-table-column>
            <!-- <el-table-column prop="" label="状态"></el-table-column> -->
            <el-table-column label="当前辊种">
                <template #default="scope">
                    <el-select v-model="scope.row.rollType" class="m-2" placeholder="选择辊种" size="small">
                        <el-option v-for="item in rollTypeList2" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column prop="" label="轧机号 ">
                <template #default="scope">
                    <el-select v-model="scope.row.turnstNum" class="m-2" placeholder="选择闸机号" size="small">
                        <el-option v-for="item in turnstNumList" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </template>
            </el-table-column>
            <!-- <el-table-column prop="" label="选择配辊">
                    <template #default="scope">
                        <el-checkbox v-model="checked" label="是否配辊" size="large" />
                    </template>
                </el-table-column> -->
            <el-table-column :selectable="selectable" type="selection" width="55" />
        </el-table>
        <div class="bottombox">
            <div class="my-2 flex items-center text-sm">
                <el-radio-group v-model="radio" class="ml-4">
                    <el-radio style="color: black" label="17">下发至17号磨床</el-radio>
                    <el-radio style="color: black" label="18">下发至18号磨床</el-radio><br /><br />
                </el-radio-group>
                <br /><br />
                <el-radio-group v-model="radio2" class="ml-4">
                    <el-radio style="color: black" label="C08">C08工位辊框</el-radio>
                    <el-radio style="color: black" label="C09">C09工位辊框</el-radio>
                </el-radio-group>
            </div>
            <el-button style="margin-left: 10px;" @click="insertP" type="primary">提交磨削排程</el-button>
        </div>
    </el-dialog>
</template>
<script setup lang="ts">
import Sortable from "sortablejs";
import { onMounted, reactive, ref, onBeforeUnmount, toRefs, getCurrentInstance, onUnmounted } from "vue";
import { ElMessage, ElMessageBox } from 'element-plus'
import { updateFrame, getFrameChild, insertProduce, selectGrindParameterTry, getGrindAllAndData, getFrame, updateFrameChild, updateElectronic, remFrame, addFrame, getDcad, updateDcad, getFrameInfo } from '@/apiz'
import { Alex } from '@/types'//引入参数规范类型
let data: any = reactive({
    tableData: [],
    tableData2: [],
    tableData3: [],
    tableData4: [],
    tableData5: [],
    tableData6: [],
    tableData7: [],
    frameBedList: [],
    grindListAll2: []
})
const multipleSelection: any = ref([])
const b2Move = ref(true)
const b2Click = () => {
    b2Move.value = !b2Move.value;
}
const UData = ref([])
const selectable = (row: any) => {
    console.log(row);

    let isChecked = true;
    if (row.rollType && row.turnstNum) { // 判断里面是否存在某个参数
        isChecked = true
    } else {
        isChecked = false
    }
    return isChecked
}

const multipleTableRef = ref();
const handleSelectionChange = (val: any) => {
    // for (let i = 0; i < val.length; i++) {
    //     val[i].work = 'C08'
    // }
    multipleSelection.value = val
    console.log(multipleSelection.value);
}
const radio = ref('')
const radio2 = ref('')
const checked = ref()
const bMove = ref(true)
const b1Click = () => {
    data.grindListAll2 = []
    getGrindData();
    bMove.value = !bMove.value;
}
const inputform: any = ref({})
const row: any = ref()
const stitle: any = ref('')
const etitle: any = ref('')
const value: any = ref(false)
const finishStatus = ref('false')
const form: any = ref({})
const formData: any = ref({})
const options = ref([
    {
        label: 'Step1(AGV->辊架)',
        value: 'step1'
    },
    {
        label: 'Step2(U辊架->磨床)',
        value: 'step2'
    },
    {
        label: 'Step3(磨床->人工检测)',
        value: 'step3'
    },
    {
        label: 'Step4(人工检测->U型辊架)',
        value: 'step4'
    }
])
const rollState = ref('')
const stateList = ref([
    {
        label: '正常',
        value: '1'
    },
    {
        label: '缺陷',
        value: '2'
    },
])
const search = ref('step1')
const from: any = ref()
const checkList = ref(['step1'])
const sTable = ref('');
const eTable = ref('');
const queryByKey: any = ref({
    Grinder_No: '',
    Roll_Seed: '',
    Taper: '',
    Roll_Type: '',
    Plant_Code: ''
});
const chang = (row: any) => {
    switch (row.slotStatus) {
        case '0':
            row.slotStatus = false
            break;
        case '1':
            row.slotStatus = true
            break;
    }
    form.value = JSON.parse(JSON.stringify(row))
    if (row.rollId) {
        let alex = new Alex
        alex.parameter = {
            rimNum: row.rollId
        }
        getFrameInfo(alex).then((res: any) => {
            if (res.result.queryByKey == '暂时没有轧辊数据的信息') {
                for (let i in queryByKey.value) {
                    queryByKey.value[i] = "";
                }
            } else {
                var reg1 = new RegExp("/", "g");
                var a1 = res.result.queryByKey.replace(reg1, "");
                queryByKey.value = JSON.parse(a1)
                console.log(queryByKey.value);
            }
            dialogVisible.value = true

        })
    } else {
        for (let i in queryByKey.value) {
            queryByKey.value[i] = "";
        }
        dialogVisible.value = true

    }

    // console.log(row);


}
const step = ref({
    step1: false,
    step2: false,
    step3: false,
    step4: false
})
const insertP = () => {
    ElMessageBox.confirm(
        '确认提交?',
        '',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(() => {
            if (multipleSelection.value.length > 6) {
                ElMessage({
                    message: '不能超过6个！',
                    type: 'warning',
                })
            } else if (multipleSelection.value.length == 0 || radio2.value == '' || radio.value == '') {
                ElMessage({
                    message: '请选择！',
                    type: 'warning',
                })
            } else {
                let status = true;
                for (let i = 0; i < multipleSelection.value.length; i++) {
                    delete multipleSelection.value[i].detection
                    delete multipleSelection.value[i].difference
                    delete multipleSelection.value[i].electronic
                    delete multipleSelection.value[i].grind
                    delete multipleSelection.value[i].isFinish
                    delete multipleSelection.value[i].isRefer
                    delete multipleSelection.value[i].level
                    delete multipleSelection.value[i].register
                    delete multipleSelection.value[i].slotNO
                    delete multipleSelection.value[i].slotPosition
                    delete multipleSelection.value[i].slotStatus
                    multipleSelection.value[i].grinderNo = radio.value
                    multipleSelection.value[i].mainNo = multipleSelection.value[i].rollId
                    delete multipleSelection.value[i].rollId
                    if (radio2.value == 'C02') {
                        multipleSelection.value[i].work = 'C02'
                    } else {
                        multipleSelection.value[i].work = 'C03'
                    }
                    multipleSelection.value[i].region = 'A区'
                }
                for (let i = 0; i < multipleSelection.value.length; i++) {
                    if (!multipleSelection.value[i].rollerName) {
                        status = false
                    }
                }
                if (status) {
                    let alex = new Alex
                    alex.parameter = {
                        addProduceList: multipleSelection.value
                    }
                    insertProduce(alex).then((res: any) => {
                        ElMessage({
                            message: res.message.msg,
                            type: 'success',
                        })
                        dialogVisible7.value = false;
                    })
                } else {
                    ElMessage({
                        message: '选择了没有轧辊号的数据！',
                        type: 'warning',
                    })
                }

            }

        })
        .catch(() => {

        })
}
const detectionListIsNull: any = ref([])
const detectionListIsNotNull: any = ref([])
const d1 = ref(false)
const d2 = ref(false)
const d3 = ref(false)
const d4 = ref(false)
const exceptionList = ref([
    {
        label: '重磨',
        value: '1'
    },
    {
        label: '报废',
        value: '2'
    },
])
const dremarksList = ref([
    {
        label: '轧辊破裂 ',
        value: '1'
    },
    {
        label: '轧辊直径错误',
        value: '2'
    },
])
const testResultList = ref([
    {
        label: '合格',
        value: '1'
    },
    {
        label: '异常',
        value: '2'
    },
])
const tableFaceList = ref([
    {
        label: '正常',
        value: "1"
    },
    {
        label: '异常',
        value: "2"
    },
])
const classTimesList = ref([
    {
        label: '早',
        value: '早'
    },
    {
        label: '晚',
        value: '晚'
    },
])
const teamList = ref([
    {
        label: '甲',
        value: '甲'
    },
    {
        label: '乙',
        value: '乙'
    },
    {
        label: '丙',
        value: '丙'
    },
    {
        label: '丁',
        value: '丁'
    },
])
const rollTypeList = ref([
    {
        label: 'M',
        value: 'M'
    },
    {
        label: 'I',
        value: 'I'
    },
    {
        label: 'H',
        value: 'H'
    },
    {
        label: 'H2',
        value: 'H2'
    },
    {
        label: 'G',
        value: 'G'
    },
    {
        label: 'F',
        value: 'F'
    },
])
const rollTypeList2 = ref([
    {
        label: 'H',
        value: 'H'
    },
    {
        label: 'F',
        value: 'F'
    },
    {
        label: 'G',
        value: 'G'
    },
])
const turnstNumList = ref([
    {
        label: '1',
        value: 1
    },
    {
        label: '2',
        value: 2
    },
    {
        label: '3',
        value: 3
    },
    {
        label: '4',
        value: 4
    },
    {
        label: '5',
        value: 5
    },
])
const grindNumNoList = ref([
    {
        label: '13',
        value: '13'
    },
    {
        label: '14',
        value: '14'
    },
    {
        label: '15',
        value: '15'
    },
    {
        label: '16',
        value: '16'
    },
    {
        label: '17',
        value: '17'
    },
    {
        label: '18',
        value: '18'
    },
])
const unitNumList = ref([
    {
        label: '2CR',
        value: '2CR'
    },
    {
        label: '5CR',
        value: '5CR'
    },
    {
        label: '6CR',
        value: '6CR'
    },
    {
        label: '7CR',
        value: '7CR'
    },
])
const chang2 = (row: any) => {
    console.log(row);
    from.value = row
    dialogVisible2.value = true
}
const chang3 = (row: any) => {
    console.log(row, search.value);
    switch (search.value) {
        case 'step1':
            // row.handStatus = 3
            break;
        case 'step2':
            // row.machineStatus = 3
            break;
        case 'step3':
            // row.peelStatus = 3
            break;
        case 'step4':
            // row.captainStatus = 3
            break;
    }
    // row.aroundTime = getNow();
    let alex = new Alex
    alex.parameter = {
        stepNumber: 'step1',
        // updateData: row
    }
    updateFrameChild(alex).then((res: any) => {
        setTimeout(() => {
            getData();
            getChild();
            init();
            ElMessage({
                message: '操作成功！',
                type: 'success',
            })
        }, 1000)
    })
}
function getNow() {
    var d = new Date();
    var year = d.getFullYear();
    var month = change(d.getMonth() + 1);
    var day = change(d.getDate());
    var hour = change(d.getHours());
    var minute = change(d.getMinutes());
    var second = change(d.getSeconds());
    function change(t: any) {
        if (t < 10) {
            return "0" + t;
        } else {
            return t;
        }
    }
    var time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    return time;
}
const chang4 = (row: any, i: any) => {
    let alex = new Alex
    alex.parameter = {
        updateElectronicList: []
    }
    switch (i) {
        case 1:
            row.estatus = '2'
            break;
        case 2:
            row.jobStatus = '2'
            break;
    }
    alex.parameter.updateElectronicList[0] = row
    updateElectronic(alex).then((res: any) => {
        setTimeout(() => {
            getData();
            getChild();
            init();

        }, 1000)


    })
}

const chang5 = (row: any, status: string) => {
    console.log(row);
    let alex = new Alex
    alex.parameter = {
        flag: status,
        grindOne: row
    }
    remFrame(alex).then((res: any) => {
        ElMessage({
            message: '修改成功',
            type: 'success',
        })
        setTimeout(() => {
            getChild();
            getData();
            init();
        }, 1000)
    })
}
const add = () => {

    dialogVisible5.value = true
}
const slot = (row: any, i: any) => {
    switch (i) {
        case 1:
            getDcadx();
            break;
        case 2:
            // row.dstatus = 1
            let alex = new Alex
            row.dstatus = 2
            alex.parameter = {
                updateDetectionList: [row]
            }
            updateDcad(alex).then((res: any) => {
                getDcadx()
                dialogVisible6.value = false;
                ElMessage({
                    message: '操作成功！',
                    type: 'success',
                })
            })
            break;
        case 3:
            break;
        case 4:
            console.log(row);

            form.value = JSON.parse(JSON.stringify(row.detection))
            dialogVisible6.value = true;
            break;
    }
    // dialogVisible3.value = true
}
const getDcadx = () => {
    getDcad().then((res: any) => {
        console.log(res);
        detectionListIsNotNull.value = res.result.detectionListIsNotNull
        detectionListIsNull.value = res.result.detectionListIsNull
    })
}


const handleClose = (done: () => void) => {
    done()
}
const dialogVisible = ref(false)
const dialogVisible2 = ref(false)
const dialogVisible3 = ref(false)
const dialogVisible4 = ref(false)
const dialogVisible5 = ref(false)
const dialogVisible6 = ref(false)
const dialogVisible7 = ref(false)
const title: any = ref('')
const stepParm: any = ref('1')
const flag: any = ref('U')
const startTable = ref('')
const endTable = ref('')
const selectU = () => {
    multipleSelection.value = []
    UData.value = data.tableData4
    dialogVisible7.value = true;
}
// 修改辊架信息
const save = () => {
    switch (form.value.slotStatus) {
        case false:
            form.value.slotStatus = '0'
            break;
        case true:
            form.value.slotStatus = '1'
            break;
    }
    let alex = new Alex
    alex.parameter = {
        updateFrameList: [
            {
                rollId: form.value.rollId,
                slotPosition: form.value.slotPosition,
                slotStatus: form.value.slotStatus,
                region: form.value.region,
                difference: form.value.difference
            }
        ]
    }
    updateFrame(alex).then((res: any) => {
        setTimeout(() => {
            getData();
            getChild();
            init();
        }, 1000)

    })
    dialogVisible.value = false
}
let key = ref(0)
const savex = () => {
    dialogVisible4.value = false
    setTimeout(() => {
        location.reload()
    }, 1000)
}
const stat = ref(false)
const createTask = () => {
    dialogVisible4.value = false
    let alex = new Alex
    alex.parameter = {
        stepParm: stepParm.value,
        insertPoll: {
            step_01_Hand: step.value.step1 ? '1' : '0',
            step_02_Machine: step.value.step2 ? '1' : '0',
            step_03_Peel: step.value.step3 ? '1' : '0',
            step_04_CaptainId: step.value.step4 ? '1' : '0',
            grindNo: formData.value.rollId
        },
        insertData: {
            handStart: sTable.value,
            startName: stitle.value,
            handEnd: eTable.value,
            handLevel: value.value ? 1 : 0,
            flag: flag.value
        },
        // insertRoller:{

        // }
    }
    if (flag.value == 'B') {
        alex.parameter.insertData = {
            machineStart: sTable.value,
            machineEnd: eTable.value,
            machineLevel: value.value ? 1 : 0,
            flag: flag.value
        }
        delete alex.parameter.insertPoll.grindNo

    }
    if (flag.value == 'P') {
        alex.parameter.insertData = {
            peelStart: sTable.value,
            peelEnd: eTable.value,
            peelLevel: value.value ? 1 : 0,
            flag: flag.value
        }
        delete alex.parameter.insertPoll.grindNo

    }
    if (flag.value == 'U' && stat.value) {
        alex.parameter.insertData = {
            captainStart: sTable.value,
            captainEnd: eTable.value,
            captainLevel: value.value ? 1 : 0,
            flag: flag.value
        }
        delete alex.parameter.insertPoll.grindNo

    }
    addFrame(alex).then((res: any) => {
        if (res.message.msg == '终点位置被占用 重新添加') {
            ElMessage.error('终点位置被占用 重新添加')
        } else {
            setTimeout(() => {
                getData();
                init();
                ElMessage({
                    message: '任务制定成功',
                    type: 'success',
                })
            }, 1000)
        }


    })
    console.log(alex.parameter);

}
// document.addEventListener('mousemove', function (e) {
//     //mousemove 只要鼠标一移动，就会触发事件
//     //获取鼠标最新的坐标
//     console.log(e.pageY, 'Y')
//     console.log(e.pageX, 'X');
// })
// 创建sortable实例
const initSortable = (className: any) => {
    let D = JSON.parse(JSON.stringify(data));
    // console.log(D)
    // 获取表格row的父节点
    const table = document.querySelector('.' + className + ' .el-table__body-wrapper tbody');
    const tablex = document.querySelector('.' + className + ' .el-table__body-wrapper tbody');
    // 创建拖拽实例
    let dragTable = Sortable.create(table, {
        animation: 150, //动画
        sort: false,
        // disabled: true,
        group: { name: 'table-group', pull: true, put: true },
        // 开始拖动事件
        onStart: (obj: any) => {
            const { from, to, newIndex, oldIndex, path } = obj;
            let targetData = to.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className;
            startTable.value = targetData

        },
        // 元素从一个列表拖拽到另一个列表
        onEnd(obj: any) {
            // let a = data[startTable.value];
            // console.log()
            const { from, to, newIndex, oldIndex, path } = obj;
            let selfData = path[8].className;
            console.log(selfData, 'qwewqeqw');

            let targetData = to.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className;
            endTable.value = targetData;
            console.log(endTable.value);
            if (from === to) {
                // console.log('右边自己内部拖动', newIndex, oldIndex)
                // const currRow: any = data[selfData].splice(newIndex, 1)[0];
                // console.log(currRow);
                // data[selfData].splice(newIndex, 0, currRow)
                init();

            } else if (from !== to) {
                const currRow: any = data[selfData][oldIndex]
                // console.log(currRow);
                formData.value = currRow
                if (currRow.rollId) {
                    // console.log(data[endTable.value][newIndex]);
                    if (data[endTable.value][newIndex]) {
                        eTable.value = data[endTable.value][newIndex].slotPosition
                        sTable.value = data[startTable.value][oldIndex].slotPosition
                        if (eTable.value && sTable.value) {
                            title.value = `${startTable.value}--${data[startTable.value][oldIndex].slotPosition} ==> ${endTable.value}--${data[endTable.value][newIndex].slotPosition}`
                            data[startTable.value] = []
                            data[endTable.value] = []
                            for (let i in data1[startTable.value]) {
                                data[startTable.value].push(data1[startTable.value][i])
                            }
                            for (let i in data1[endTable.value]) {
                                data[endTable.value].push(data1[endTable.value][i])
                            }
                            init()
                            if (startTable.value == 'tableData6' && endTable.value == 'tableData4') {
                                stitle.value = "C09"
                                etitle.value = "U型辊架"
                                dialogVisible4.value = true
                                d1.value = true
                                d2.value = false
                                d3.value = false
                                d4.value = false
                                step.value.step1 = true
                                step.value.step2 = false
                                step.value.step3 = false
                                step.value.step4 = false
                                stepParm.value = '1'
                                flag.value = 'U'
                            } else if (startTable.value == 'tableData7' && endTable.value == 'tableData4') {
                                stitle.value = "C08"
                                etitle.value = "U型辊架"
                                dialogVisible4.value = true
                                d1.value = true
                                d2.value = false
                                d3.value = false
                                d4.value = false
                                step.value.step1 = true
                                step.value.step2 = false
                                step.value.step3 = false
                                step.value.step4 = false
                                stepParm.value = '1'
                                flag.value = 'U'
                            } else if (startTable.value == 'tableData4' && endTable.value == 'tableData') {
                                stitle.value = "U型辊架"
                                etitle.value = "17#磨床"
                                dialogVisible4.value = true
                                d1.value = true
                                d2.value = true
                                d3.value = false
                                d4.value = false
                                step.value.step4 = false
                                step.value.step3 = false
                                step.value.step2 = true
                                step.value.step1 = false
                                stepParm.value = '2'
                                flag.value = 'B'
                            } else if (startTable.value == 'tableData' && endTable.value == 'tableData3') {
                                stitle.value = "17#磨床"
                                etitle.value = "人工检测"
                                dialogVisible4.value = true
                                d1.value = true
                                d2.value = true
                                d3.value = true
                                d4.value = false
                                step.value.step4 = false
                                step.value.step3 = true
                                step.value.step2 = false
                                step.value.step1 = false
                                stepParm.value = '3'
                                flag.value = 'P'
                            } else if (startTable.value == 'tableData3' && endTable.value == 'tableData4') {
                                stitle.value = "人工检测"
                                etitle.value = "U型辊架"
                                dialogVisible4.value = true
                                d1.value = true
                                d2.value = true
                                d3.value = true
                                d4.value = true
                                step.value.step4 = true
                                step.value.step3 = false
                                step.value.step2 = false
                                step.value.step1 = false
                                stepParm.value = '4'
                                flag.value = 'U'
                                stat.value = true
                            } else {
                                console.log('来了');

                                init()
                            }
                        } else {
                            init()
                        }
                    } else {
                        init()

                    }
                } else {
                    ElMessage.error('请输入轧辊号！')
                    init()

                }

            }
        },
        // 拖拽移动的时候
        onMove: function (/**Event*/evt: any, /**Event*/originalEvent: any) {
            // Example: https://jsbin.com/nawahef/edit?js,output
            evt.dragged; // dragged HTMLElement
            evt.draggedRect; // DOMRect {left, top, right, bottom}
            evt.related; // HTMLElement on which have guided
            evt.relatedRect; // DOMRect
            evt.willInsertAfter; // Boolean that is true if Sortable will insert drag element after target by default
            originalEvent.clientY; // mouse position
            evt.dragged.style.backgroundColor = 'white'
            evt.dragged.style.color = 'black'
        }
    });
};

let data1: any = reactive({
    tableData: [{

    }],
    tableData2: [],
    tableData3: [],
    tableData4: [],
    tableData5: [],
    tableData6: [],
    tableData7: [],
    frameBedList: []
})
// 查询辊架数据
const getData = () => {
    getFrame().then((res: any) => {
        // data.grindListAll = res.result.grindListAll
        data.tableData = res.result.frameBedList
        data.tableData2 = res.result.frameBedListTwo
        data.tableData3 = res.result.peopleFrameListAll
        data.tableData4 = res.result.uFrameListAll
        data.tableData5 = res.result.electronicListAll
        data.tableData6 = res.result.frameAgvListAll
        data.tableData7 = res.result.frameAgvListAll2
        // data1.grindListAll = JSON.parse(JSON.stringify(res.result.grindListAll))
        data1.tableData = JSON.parse(JSON.stringify(res.result.frameBedList))
        data1.tableData2 = JSON.parse(JSON.stringify(res.result.frameBedListTwo))
        data1.tableData3 = JSON.parse(JSON.stringify(res.result.peopleFrameListAll))
        data1.tableData4 = JSON.parse(JSON.stringify(res.result.uFrameListAll))
        data1.tableData5 = JSON.parse(JSON.stringify(res.result.electronicListAll))
        data1.tableData6 = JSON.parse(JSON.stringify(res.result.frameAgvListAll))
        data1.tableData7 = JSON.parse(JSON.stringify(res.result.frameAgvListAll2))
        init();
    })
}
const init = () => {
    key.value++
    setTimeout(() => {
        initSortable('t1')
        initSortable('t2')
        initSortable('t3')
        initSortable('t4')
        // initSortable('t5')
        initSortable('t6')
        initSortable('t7')
    })
}
// 查询主任务
const getGrindData = () => {
    data.grindListAll2 = []
    let alex = new Alex
    if (finishStatus.value != '50') {
        alex.parameter = {
            current: finishStatus.value == 'true' ? true : false
        }
        getGrindAllAndData(alex).then((res: any) => {
            console.log(res);
            data.grindListAll = res.result.grindListAll
        })
    } else {
        alex.parameter = {
            current: 50
        }
        selectGrindParameterTry(alex).then((res: any) => {
            console.log(res);
            data.grindListAll = res.result.grindListAll
        })
    }
}
const updRow = (rowx: any) => {
    row.value = rowx;
    console.log(row.value);
    getChild();
}

// 查询子任务
const getChild = () => {
    if (row.value) {
        console.log(row.value);
        data.grindListAll2 = []
        let alex = new Alex
        alex.parameter = {
            grindOne: row.value
        }
        getFrameChild(alex).then((res: any) => {
            if (res.result.grindOne.stepList) {
                data.grindListAll2 = res.result.grindOne.stepList
                // res.result.grindOne.getHand.handnum = "step1"
                console.log('qwe', data.grindListAll2);

                for (let i = 0; i < data.grindListAll2.length; i++) {
                    console.log(i);

                    data.grindListAll2[i].num = `step${i + 1}`
                }
            }
            // data.grindListAll2 = [res.result.grindOne]
            init();
        })
    }

}
const id: any = ref()
onMounted(() => {
    init();
    getData();
    getGrindData();
    id.value = setInterval(async () => {
        await getData();
        await getGrindData();
        await getChild();
    }, 60000)
})
onUnmounted(() => {
    clearInterval(id.value);
})
</script>
<style scoped>
#box {
    display: flex;
}

.el-table__header-wrapper .el-checkbox {
    display: none
}

#ftext {
    position: absolute;
    color: white;
    font-weight: bold;
    font-size: 18px;
    top: 20px;
    left: 25px;
}

#fbutton {
    position: absolute;
    font-weight: bold;
    top: 20px;
    left: 105px;
}

.bottombox {
    display: flex;
    height: 111px;
    align-items: center;
}

.el-radio {
    color: white;
}

.box11 {
    width: 500px;
    display: flex;
    height: 170px;
    margin: 0 auto;
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

i {
    color: white;
    font-size: 25px;
}

.home {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    height: 100%;
}

.rightHome {
    width: 2%;
    height: 100px;
    /* display: flex; */
}

.t1 {
    margin: 50px auto;
    height: 90px;
    width: 90%;
}

.t2 {
    margin: 50px auto;
    height: 90px;
    width: 90%;
}

.t3 {
    margin: 50px auto;
    height: 160px;
    width: 90%;
}

.t4 {
    height: 350px;
    margin: 50px auto;
    width: 90%;
}

.t5 {
    height: 100px;
    margin: 50px auto;
    width: 90%;
}

.t6 {
    height: 350px;
    margin: 50px auto;
    width: 90%;
}

.t7 {
    margin: 50px auto;
    height: 350px;
    width: 90%;
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

:deep(.el-table__header-wrapper .el-checkbox) {
    display: none
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

:deep(.el-select .el-input__wrapper) {
    background: #ffffffb8;
    color: rgb(209, 209, 209);
}

:deep(.el-select .el-input__inner) {
    /* color: white; */
}
</style>