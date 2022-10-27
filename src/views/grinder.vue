<template>
    <div class="home">
        <div class="tableData">
            <el-table name="A" class="t1" ref="dragTable" @row-dblclick="chang" :data="data.tableData" row-key="id"
                :key="key" border>
                <el-table-column label="13#磨床">
                    <el-table-column label="操作" width="70">
                        <template #default="scope">
                            <el-button class="move" type="text" size="small"><i
                                    class="iconfont icon-guanwangguanli_yidongguandian"></i></el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="slotPosition" label="槽号"></el-table-column>
                    <el-table-column prop="rollId" label="辊号"></el-table-column>
                    <el-table-column prop="slotStatus" label="检测状态">
                        <template #default="scope">
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '0'" type="warning">未检测</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '1'" type="success">已检测</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column prop="slotStatus" label="任务状态">
                        <template #default="scope">
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '0'" type="warning">无任务</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '1'" type="success">有任务</el-tag>
                        </template>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </div>
        <div class="tableData2">
            <el-table name="B" class="t2" ref="dragTable" @row-dblclick="chang" :key="key" :data="data.tableData2"
                row-key="id" border>
                <el-table-column label="14#磨床">
                    <el-table-column label="操作" width="70">
                        <template #default="scope">
                            <el-button class="move" type="text" size="small"><i
                                    class="iconfont icon-guanwangguanli_yidongguandian"></i></el-button>
                        </template>
                    </el-table-column>

                    <el-table-column prop="slotPosition" label="槽号"></el-table-column>
                    <el-table-column prop="rollId" label="辊号"></el-table-column>
                    <el-table-column prop="slotStatus" label="检测状态">
                        <template #default="scope">
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '0'" type="warning">未检测</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '1'" type="success">已检测</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column prop="slotStatus" label="任务状态">
                        <template #default="scope">
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '0'" type="warning">无任务</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '1'" type="success">有任务</el-tag>
                        </template>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </div>
        <div class="tableData3">
            <el-table name="C" class="t3" @row-dblclick="chang" ref="dragTable" :key="key" :data="data.tableData3"
                row-key="id" border>
                <el-table-column label="人工检测">
                    <el-table-column label="操作" width="70">
                        <template #default="scope">
                            <el-button class="move" type="text" size="small"><i
                                    class="iconfont icon-guanwangguanli_yidongguandian"></i></el-button>
                        </template>
                    </el-table-column>

                    <el-table-column prop="slotPosition" label="槽号"></el-table-column>
                    <el-table-column prop="rollId" label="辊号"></el-table-column>
                    <el-table-column prop="slotStatus" label="检测状态">
                        <template #default="scope">
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '0'" type="warning">未检测</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '1'" type="success">已检测</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column prop="slotStatus" label="任务状态">
                        <template #default="scope">
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '0'" type="warning">无任务</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '1'" type="success">有任务</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template #default="scope">
                            <el-button size="small" @click="slot(scope.row, 1)">操作</el-button>
                        </template>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </div>
        <div class="tableData4">
            <el-table name="C" class="t4" ref="dragTable" @row-dblclick="chang" :key="key" :data="data.tableData4"
                row-key="id" border>
                <el-table-column label="U型辊架">
                    <el-table-column label="操作" width="70">
                        <template #default="scope">
                            <el-button class="move" type="text" size="small"><i
                                    class="iconfont icon-guanwangguanli_yidongguandian"></i></el-button>
                        </template>
                    </el-table-column>

                    <el-table-column prop="slotPosition" label="槽号"></el-table-column>
                    <el-table-column prop="rollId" label="辊号"></el-table-column>
                    <el-table-column prop="slotStatus" label="检测状态">
                        <template #default="scope">
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '0'" type="warning">未检测</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '1'" type="success">已检测</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column prop="slotStatus" label="任务状态">
                        <template #default="scope">
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '0'" type="warning">无任务</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '1'" type="success">有任务</el-tag>
                        </template>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </div>
        <div class="tableData5">
            <el-table name="C" class="t5" ref="dragTable" :data="data.tableData5" row-key="id" :key="key" border>
                <el-table-column label="机器人">
                    <el-table-column label="操作" width="70">
                        <template #default="scope">
                            <el-button class="move" type="text" size="small"><i
                                    class="iconfont icon-guanwangguanli_yidongguandian"></i></el-button>
                        </template>
                    </el-table-column>

                    <el-table-column prop="ename" label="设备名称" width="120"></el-table-column>
                    <el-table-column prop="jobId" label="辊号"></el-table-column>
                    <el-table-column label="机器状态" width="140">
                        <template #default="scope">
                            <el-tag class="ml-2" v-if="scope.row.estatus == '2'" type="warning">空闲</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.estatus == '1'" type="success">繁忙</el-tag>
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
                            <el-button v-if="scope.row.jobStatus != '2'" size="small" @click="chang4(scope.row, 2)">确认
                            </el-button>

                        </template>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </div>
        <div class="tableData6">
            <el-table name="C" class="t6" ref="dragTable" @row-dblclick="chang" :data="data.tableData6" row-key="id"
                :key="key" border>
                <el-table-column label="AGV1">
                    <el-table-column label="操作" width="70">
                        <template #default="scope">
                            <el-button class="move" type="text" size="small"><i
                                    class="iconfont icon-guanwangguanli_yidongguandian"></i></el-button>
                        </template>
                    </el-table-column>

                    <el-table-column prop="slotPosition" label="槽号"></el-table-column>
                    <el-table-column prop="rollId" label="辊号"></el-table-column>
                    <el-table-column prop="slotStatus" label="检测状态">
                        <template #default="scope">
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '0'" type="warning">未检测</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '1'" type="success">已检测</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column prop="slotStatus" label="任务状态">
                        <template #default="scope">
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '0'" type="warning">无任务</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '1'" type="success">有任务</el-tag>
                        </template>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </div>
        <div class="tableData7">
            <el-table name="C" class="t7" ref="dragTable" @row-dblclick="chang" :data="data.tableData7" row-key="id"
                :key="key" border>
                <el-table-column label="AGV2">
                    <el-table-column label="操作" width="70">
                        <template #default="scope">
                            <el-button class="move" type="text" size="small"><i
                                    class="iconfont icon-guanwangguanli_yidongguandian"></i></el-button>
                        </template>
                    </el-table-column>

                    <el-table-column prop="slotPosition" label="槽号"></el-table-column>
                    <el-table-column prop="rollId" label="辊号"></el-table-column>
                    <el-table-column prop="slotStatus" label="检测状态">
                        <template #default="scope">
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '0'" type="warning">未检测</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '1'" type="success">已检测</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column prop="slotStatus" label="任务状态">
                        <template #default="scope">
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '0'" type="warning">无任务</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '1'" type="success">有任务</el-tag>
                        </template>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </div>
        <div class="tableData8">
            <el-table name="C" class="t8" @row-dblclick="chang2" ref="dragTable" :data="data.grindListAll" row-key="id"
                :key="key" border>
                <el-table-column label="主任务列表">
                    <el-table-column>
                        <template #header>
                            <el-button @click="add" style="margin-left:10px" type="primary">新增</el-button>
                        </template>

                        <el-table-column prop="grindId" label="主任务号" width="180"></el-table-column>
                        <el-table-column prop="grindNo" label="轧辊号" width="180"></el-table-column>
                        <el-table-column prop="current" label="当前步骤号"></el-table-column>
                        <!-- <el-table-column prop="current" label="任务状态"></el-table-column> -->
                        <el-table-column label="操作" width="140">
                            <template #default="scope">
                                <el-button size="small" @click="chang5(scope.row)">删除
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </div>
        <div class="tableData8">
            <el-table name="C" class="t9" ref="dragTable" :data="data.grindListAll2" row-key="id" border :key="key">
                <el-table-column v-if="search == 'step1'" label="子任务列表">
                    <el-table-column>
                        <template #header>
                            <el-select v-model="search" @change="getChild" class="m-2" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                            <el-button @click="getChild" style="margin-left:10px" type="primary">查询</el-button>
                        </template>
                        <el-table-column label="序号" type="index" width="50" align="center" />
                        <el-table-column prop="handNo" label="轧辊号" width="170"></el-table-column>
                        <el-table-column label="任务状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.handStatus == 1" type="warning">未发送</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.handStatus == 2">已发送</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.handStatus == 3" type="success">已完成</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column prop="" label="起始位置"></el-table-column>
                        <el-table-column prop="" label="结束位置"></el-table-column>
                        <el-table-column prop="expirationTime" label="开始时间" width="180"></el-table-column>
                        <el-table-column prop="aroundTime" label="结束时间" width="180"></el-table-column>
                        <el-table-column label="操作" width="140">
                            <template #default="scope">
                                <el-button v-if="scope.row.handStatus != 3" size="small" @click="chang3(scope.row)">确认
                                </el-button>
                                <el-button v-if="scope.row.handStatus != 3" size="small" @click="chang3(scope.row)">删除
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table-column>
                </el-table-column>
                <el-table-column v-if="search == 'step2'" label="子任务列表">
                    <el-table-column>
                        <template #header>
                            <el-select v-model="search" @change="getChild" class="m-2" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                            <el-button @click="getChild" style="margin-left:10px" type="primary">查询</el-button>
                        </template>
                        <el-table-column label="序号" type="index" width="50" align="center" />
                        <el-table-column prop="machineNo" label="轧辊号"></el-table-column>
                        <el-table-column label="任务状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.machineStatus == 1" type="warning">未发送</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.machineStatus == 2">已发送</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.machineStatus == 3" type="success">已完成</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column prop="" label="起始位置"></el-table-column>
                        <el-table-column prop="" label="结束位置"></el-table-column>
                        <el-table-column prop="expirationTime" label="开始时间"></el-table-column>
                        <el-table-column prop="aroundTime" label="结束时间"></el-table-column>
                        <el-table-column label="操作" width="140">
                            <template #default="scope">
                                <el-button v-if="scope.row.machineStatus != 3" size="small" @click="chang3(scope.row)">
                                    确认</el-button>
                                <el-button v-if="scope.row.machineStatus != 3" size="small" @click="chang3(scope.row)">
                                    删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table-column>
                </el-table-column>
                <el-table-column v-if="search == 'step3'" label="子任务列表">
                    <el-table-column>
                        <template #header>
                            <el-select v-model="search" @change="getChild" class="m-2" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                            <el-button @click="getChild" style="margin-left:10px" type="primary">查询</el-button>
                        </template>
                        <el-table-column label="序号" type="index" width="50" align="center" />
                        <el-table-column prop="peelNo" label="轧辊号"></el-table-column>
                        <el-table-column label="任务状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.peelStatus == 1" type="warning">未发送</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.peelStatus == 2">已发送</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.peelStatus == 3" type="success">已完成</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column prop="" label="起始位置"></el-table-column>
                        <el-table-column prop="" label="结束位置"></el-table-column>
                        <el-table-column prop="expirationTime" label="开始时间"></el-table-column>
                        <el-table-column prop="aroundTime" label="结束时间"></el-table-column>
                        <el-table-column label="操作" width="140">
                            <template #default="scope">
                                <el-button v-if="scope.row.peelStatus != 3" size="small" @click="chang3(scope.row)">确认
                                </el-button>
                                <el-button v-if="scope.row.peelStatus != 3" size="small" @click="chang3(scope.row)">删除
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table-column>
                </el-table-column>
                <el-table-column v-if="search == 'step4'" label="子任务列表">
                    <el-table-column>
                        <template #header>
                            <el-select v-model="search" @change="getChild" class="m-2" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                            <el-button @click="getChild" style="margin-left:10px" type="primary">查询</el-button>
                        </template>
                        <el-table-column label="序号" type="index" width="50" align="center" />
                        <el-table-column prop="captainNo" label="轧辊号"></el-table-column>
                        <el-table-column label="任务状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.captainStatus == 1" type="warning">未发送</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.captainStatus == 2">已发送</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.captainStatus == 3" type="success">已完成</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column prop="" label="起始位置"></el-table-column>
                        <el-table-column prop="" label="结束位置"></el-table-column>
                        <el-table-column prop="captainDate" label="开始时间"></el-table-column>
                        <el-table-column prop="aroundTime" label="结束时间"></el-table-column>
                        <el-table-column label="操作" width="140">
                            <template #default="scope">
                                <el-button v-if="scope.row.captainStatus != 3" size="small" @click="chang3(scope.row)">
                                    确认</el-button>
                                <el-button v-if="scope.row.captainStatus != 3" size="small" @click="chang3(scope.row)">
                                    删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </div>
    </div>
    <el-dialog v-model="dialogVisible" title="详情" width="50%" :before-close="handleClose">
        <el-card class="box-card" shadow="hover">
            <el-form :model="form" label-width="120px">
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
" label-align="right" align="center" label-class-name="my-label" class-name="my-content" width="150px">
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
            <el-descriptions-item label="磨床-人工检测平台

" label-align="right" align="center">
                {{ from.step_05_PlatformId }}
            </el-descriptions-item>
            <el-descriptions-item label="人工检测平台-磨床摆渡区" label-align="right" align="center">
                {{ from.step_06_BothId }}
            </el-descriptions-item>
        </el-descriptions>
    </el-dialog>
    <el-dialog v-model="dialogVisible3" title="确认" width="50%" :before-close="handleClose">
        <el-table ref="dragTable" :data="detectionListIsNull" row-key="id" border>
            <el-table-column label="待确认列表">

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
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button @click="slot(scope.row, 2)">确认</el-button>
                    </template>
                </el-table-column>
            </el-table-column>
        </el-table>
        <br />
        <br />
        <el-table ref="dragTable" :data="detectionListIsNotNull" row-key="id" border>
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
        </el-table>
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
            起始位置：{{ sTable }}<br /><br />
            终点位置：{{ eTable }}<br /><br />
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
</template>
<script setup lang="ts">
import Sortable from "sortablejs";
import { onMounted, reactive, ref, toRefs, getCurrentInstance } from "vue";
import { ElMessage, ElMessageBox } from 'element-plus'
import { updateFrame, getFrameChild, getFrame, updateFrameChild, updateElectronic, remFrame, addFrame, getDcad, updateDcad } from '@/api'
import { Alex } from '@/types'//引入参数规范类型
import { stat } from "fs";
let data: any = reactive({
    tableData: [],
    tableData2: [],
    tableData3: [],
    tableData4: [],
    tableData5: [],
    tableData6: [],
    tableData7: [],
    frameBedList: [],
})
const inputform: any = ref({})
const value: any = ref(false)
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
const search = ref('step1')
const from: any = ref()
const checkList = ref(['step1'])
const sTable = ref('');
const eTable = ref('');

const chang = (row: any) => {
    // console.log(row);
    switch (row.slotStatus) {
        case '0':
            row.slotStatus = false
            break;
        case '1':
            row.slotStatus = true
            break;
    }
    form.value = JSON.parse(JSON.stringify(row))
    console.log(form);
    dialogVisible.value = true
}
const step = ref({
    step1: false,
    step2: false,
    step3: false,
    step4: false
})
const detectionListIsNull: any = ref([])
const detectionListIsNotNull: any = ref([])
const d1 = ref(false)
const d2 = ref(false)
const d3 = ref(false)
const d4 = ref(false)
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
        stepNumber: search.value,
        // updateData: row
    }
    updateFrameChild(alex).then((res: any) => {
        setTimeout(() => {
            getData();
            getChild();
            init();
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
const chang5 = (row: any) => {
    console.log(row);
    let alex = new Alex
    alex.parameter = {
        grindArray: [row]
    }
    remFrame(alex).then((res: any) => {
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
            row.dstatus = 1
            let alex = new Alex
            alex.parameter = {
                updateDetectionList: [row]
            }
            updateDcad(alex).then((res: any) => {
                getDcadx()
            })
            break;
        case 3:
            break;
    }
    dialogVisible3.value = true
}
const getDcadx = () => {
    getDcad().then((res: any) => {
        console.log(res);
        detectionListIsNotNull.value = res.result.detectionListIsNotNull
        detectionListIsNull.value = res.result.detectionListIsNull
    })
}
const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
    done()
}
const dialogVisible2 = ref(false)
const dialogVisible3 = ref(false)
const dialogVisible4 = ref(false)
const dialogVisible5 = ref(false)
const title: any = ref('')
const stepParm: any = ref('1')
const flag: any = ref('U')
const startTable = ref('')
const endTable = ref('')
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
            handEnd: eTable.value,
            handLevel: value.value ? 1 : 0,
            flag: flag.value
        }
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
        }
        setTimeout(() => {
            getData();
            getChild();
            init();
        }, 1000)

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
            // switch (startTable.value) {
            //     case 'tableData':
            //         sTable.value = '13#磨床'
            //         break;
            //     case 'tableData2':
            //         sTable.value = '14#磨床'
            //         break;
            //     case 'tableData3':
            //         sTable.value = '人工检测'
            //         break;
            //     case 'tableData4':
            //         sTable.value = 'U型辊架'
            //         break;
            //     case 'tableData6':
            //         sTable.value = 'AGV1'
            //         break;
            //     case 'tableData7':
            //         sTable.value = 'AGV2'
            //         break;
            // }
        },
        // 元素从一个列表拖拽到另一个列表
        onEnd(obj: any) {
            // let a = data[startTable.value];
            // console.log()
            const { from, to, newIndex, oldIndex, path } = obj;
            let selfData = path[8].className;
            let targetData = to.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className;
            endTable.value = targetData;
            console.log(endTable.value);
            // switch (endTable.value) {
            //     case 'tableData':
            //         eTable.value = '13#磨床'
            //         break;
            //     case 'tableData2':
            //         eTable.value = '14#磨床'
            //         break;
            //     case 'tableData3':
            //         eTable.value = '人工检测'
            //         break;
            //     case 'tableData4':
            //         eTable.value = 'U型辊架'
            //         break;
            //     case 'tableData6':
            //         eTable.value = 'AGV1'
            //         break;
            //     case 'tableData7':
            //         eTable.value = 'AGV2'
            //         break;
            // }
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
            evt.related.style.backgroundColor = 'white'
            evt.related.style.color = 'black'
        }
    });
};

let data1: any = reactive({
    tableData: [],
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
        data.grindListAll = res.result.grindListAll
        data.tableData = res.result.frameBedList
        data.tableData2 = res.result.frameBedListTwo
        data.tableData3 = res.result.peopleFrameListAll
        data.tableData4 = res.result.uFrameListAll
        data.tableData5 = res.result.electronicListAll
        data.tableData6 = res.result.frameAgvListAll
        data.tableData7 = res.result.frameAgvListAll2

        data1.grindListAll = JSON.parse(JSON.stringify(res.result.grindListAll))
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
        initSortable('t5')
        initSortable('t6')
        initSortable('t7')
    })
}
// 查询子任务
const getChild = () => {
    let alex = new Alex
    alex.parameter = {
        stepNumber: search.value
    }
    getFrameChild(alex).then((res: any) => {
        // console.log(res.result.listAndChild);
        data.grindListAll2 = res.result.listAndChild
        init();
    })
}
onMounted(() => {
    getData();
    getChild();
    setInterval(async () => {
        await getData();
        await getChild();
        await init();
    }, 10000)
})

</script>
<style scoped>
i {
    color: white;
    font-size: 25px;
}

.move {
    cursor: move;
}

.home {
    display: flex;
    height: 80vh;
}

.t1 {
    position: absolute;
    top: 70px;
    height: 150px;
    width: 400px;
}

.t2 {
    position: absolute;
    top: 70px;
    left: 1110px;
    height: 150px;
    width: 400px;
}

.t3 {
    position: absolute;
    top: 70px;
    left: 500px;
    height: 150px;
    width: 600px;
}

.t4 {
    position: absolute;
    top: 230px;
    left: 500px;
    height: 450px;
    width: 600px;
}

.t5 {
    position: absolute;
    top: 710px;
    left: 500px;
    height: 250px;
    width: 600px;
}

.t6 {
    position: absolute;
    top: 230px;
    height: 500px;
    /* left: 0; */
    width: 400px;
}

.t7 {
    position: absolute;
    top: 230px;
    /* right: 70px; */
    left: 1110px;
    height: 500px;
    width: 400px;
}

.t8 {
    position: absolute;
    top: 70px;
    right: 10px;
    height: 350px;
    /* display: none; */
    width: 800px;
}

.t9 {
    position: absolute;
    top: 500px;
    right: 10px;
    height: 450px;
    /* display: none; */
    width: 800px;
}

:deep(.el-table--fit) {
    background-color: #ffffff21;
}

:deep(.el-table thead.is-group th.el-table__cell) {
    /* background-color: white;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   color: black; */
    background-color: #ffffff5e;
    color: #ffffff;
    font-weight: bold;
}

:deep(.el-table thead.is-group th.el-table__cell:hover) {
    color: black;
}

:deep(.el-table tr) {
    background-color: transparent;
    color: white;
}

:deep(.el-table tr:hover) {
    color: black;
    background-color: white;
}

:deep(.el-select .el-input__wrapper) {
    background: #ffffffb8;
    color: white;
}

:deep(.el-select .el-input__inner) {
    /* color: white; */
}
</style>