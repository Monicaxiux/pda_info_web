<template>
    <div class="home">
        <div class="tableData">
            <el-table name="A" class="t1" ref="dragTable" @row-dblclick="chang" :data="data.tableData" row-key="id"
                border>
                <el-table-column label="13#磨床">
                    <el-table-column label="操作" width="70">
                        <template #default="scope">
                            <el-button class="move" type="text" size="small"><i
                                    class="iconfont icon-guanwangguanli_yidongguandian"></i></el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="序号" type="index" width="80" align="center" />
                    <el-table-column prop="slotPosition" label="槽号"></el-table-column>
                    <el-table-column prop="rollId" label="辊号"></el-table-column>
                    <el-table-column prop="slotStatus" label="状态">
                        <template #default="scope">
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '0'" type="warning">无任务</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '1'" type="success">有任务</el-tag>
                        </template>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </div>
        <div class="tableData2">
            <el-table name="B" class="t2" ref="dragTable" @row-dblclick="chang" :data="data.tableData2" row-key="id"
                border>
                <el-table-column label="14#磨床">
                    <el-table-column label="操作" width="70">
                        <template #default="scope">
                            <el-button class="move" type="text" size="small"><i
                                    class="iconfont icon-guanwangguanli_yidongguandian"></i></el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="序号" type="index" width="80" align="center" />
                    <el-table-column prop="slotPosition" label="槽号"></el-table-column>
                    <el-table-column prop="rollId" label="辊号"></el-table-column>
                    <el-table-column prop="slotStatus" label="状态">
                        <template #default="scope">
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '0'" type="warning">无任务</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '1'" type="success">有任务</el-tag>
                        </template>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </div>
        <div class="tableData3">
            <el-table name="C" class="t3" @row-dblclick="chang" ref="dragTable" :data="data.tableData3" row-key="id"
                border>
                <el-table-column label="人工检测">
                    <el-table-column label="操作" width="70">
                        <template #default="scope">
                            <el-button class="move" type="text" size="small"><i
                                    class="iconfont icon-guanwangguanli_yidongguandian"></i></el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="序号" type="index" width="80" align="center" />
                    <el-table-column prop="slotPosition" label="槽号"></el-table-column>
                    <el-table-column prop="rollId" label="辊号"></el-table-column>
                    <el-table-column prop="slotStatus" label="状态">
                        <template #default="scope">
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '0'" type="warning">无任务</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '1'" type="success">有任务</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template #default="scope">
                            <el-button @click="slot(scope.row)">操作</el-button>
                        </template>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </div>
        <div class="tableData4">
            <el-table name="C" class="t4" ref="dragTable" @row-dblclick="chang" :data="data.tableData4" row-key="id"
                border>
                <el-table-column label="U型辊架">
                    <el-table-column label="操作" width="70">
                        <template #default="scope">
                            <el-button class="move" type="text" size="small"><i
                                    class="iconfont icon-guanwangguanli_yidongguandian"></i></el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="序号" type="index" width="80" align="center" />
                    <el-table-column prop="slotPosition" label="槽号"></el-table-column>
                    <el-table-column prop="rollId" label="辊号"></el-table-column>
                    <el-table-column prop="slotStatus" label="状态">
                        <template #default="scope">
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '0'" type="warning">无任务</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.slotStatus == '1'" type="success">有任务</el-tag>
                        </template>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </div>
        <div class="tableData5">
            <el-table name="C" class="t5" ref="dragTable" :data="data.tableData5" row-key="id" border>
                <el-table-column label="机器人">
                    <el-table-column label="操作" width="70">
                        <template #default="scope">
                            <el-button class="move" type="text" size="small"><i
                                    class="iconfont icon-guanwangguanli_yidongguandian"></i></el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="序号" type="index" width="80" align="center" />
                    <el-table-column prop="jobId" label="辊号"></el-table-column>
                    <el-table-column label="机器状态" width="140">
                        <template #default="scope">
                            <el-tag class="ml-2" v-if="scope.row.estatus == '1'" type="warning">空闲</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.estatus == '2'" type="success">有任务</el-tag>
                            &nbsp;
                            <el-button v-if="scope.row.estatus != '2'" size="small" @click="chang4(scope.row, 1)">确认
                            </el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="任务状态" width="150">
                        <template #default="scope">
                            <el-tag class="ml-2" v-if="scope.row.jobStatus == '1'" type="warning">进行中</el-tag>
                            <el-tag class="ml-2" v-if="scope.row.jobStatus == '2'" type="success">已完成</el-tag>
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
                border>
                <el-table-column label="AGV1">
                    <el-table-column label="操作" width="70">
                        <template #default="scope">
                            <el-button class="move" type="text" size="small"><i
                                    class="iconfont icon-guanwangguanli_yidongguandian"></i></el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="序号" type="index" width="80" align="center" />
                    <el-table-column prop="slotPosition" label="槽号"></el-table-column>
                    <el-table-column prop="rollId" label="辊号"></el-table-column>
                    <el-table-column prop="slotStatus" label="状态">
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
                border>
                <el-table-column label="AGV2">
                    <el-table-column label="操作" width="70">
                        <template #default="scope">
                            <el-button class="move" type="text" size="small"><i
                                    class="iconfont icon-guanwangguanli_yidongguandian"></i></el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="序号" type="index" width="80" align="center" />
                    <el-table-column prop="slotPosition" label="槽号"></el-table-column>
                    <el-table-column prop="rollId" label="辊号"></el-table-column>
                    <el-table-column prop="slotStatus" label="状态">
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
                border>
                <el-table-column label="主任务列表">
                    <el-table-column>
                        <template #header>
                            <el-button @click="add" style="margin-left:10px" type="primary">新增</el-button>
                        </template>
                        <el-table-column label="序号" type="index" width="80" align="center" />
                        <el-table-column prop="grindId" label="主任务号" width="180"></el-table-column>
                        <el-table-column prop="grindNo" label="轧辊号" width="180"></el-table-column>
                        <el-table-column prop="current" label="当前步骤号"></el-table-column>
                        <el-table-column prop="current" label="状态"></el-table-column>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </div>
        <div class="tableData8">
            <el-table name="C" class="t9" ref="dragTable" :data="data.grindListAll2" row-key="id" border>
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
                        <el-table-column label="状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.handStatus == 1" type="warning">未发送</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.handStatus == 2">已发送</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.handStatus == 3" type="success">已完成</el-tag>
                            </template>
                        </el-table-column>
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
                        <el-table-column prop="machineRollId" label="轧辊号"></el-table-column>
                        <el-table-column label="状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.machineStatus == 1" type="warning">未发送</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.machineStatus == 2">已发送</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.machineStatus == 3" type="success">已完成</el-tag>
                            </template>
                        </el-table-column>
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
                        <el-table-column prop="peelRollId" label="轧辊号"></el-table-column>
                        <el-table-column label="状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.peelStatus == 1" type="warning">未发送</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.peelStatus == 2">已发送</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.peelStatus == 3" type="success">已完成</el-tag>
                            </template>
                        </el-table-column>
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
                        <el-table-column prop="captainRollId" label="轧辊号"></el-table-column>
                        <el-table-column label="状态">
                            <template #default="scope">
                                <el-tag class="ml-2" v-if="scope.row.captainStatus == 1" type="warning">未发送</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.captainStatus == 2">已发送</el-tag>
                                <el-tag class="ml-2" v-if="scope.row.captainStatus == 3" type="success">已完成</el-tag>
                            </template>
                        </el-table-column>
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
                <el-form-item label="状态">
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
        <el-table ref="dragTable" :data="data.grindListAll2" row-key="id" border>
            <el-table-column label="待确认列表">
                <el-table-column label="序号" type="index" width="80" align="center" />
                <el-table-column prop="rollId" label="任务号"></el-table-column>
                <el-table-column prop="current" label="轧辊号"></el-table-column>
                <el-table-column prop="current" label="检查时间"></el-table-column>
                <el-table-column prop="grindId" label="检查人"></el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button @click="slot(scope.row)">确认</el-button>
                    </template>
                </el-table-column>
            </el-table-column>
        </el-table>
        <br />
        <br />
        <el-table ref="dragTable" :data="data.grindListAll2" row-key="id" border>
            <el-table-column label="已确认列表">
                <el-table-column label="序号" type="index" width="80" align="center" />
                <el-table-column prop="rollId" label="任务号"></el-table-column>
                <el-table-column prop="current" label="轧辊号"></el-table-column>
                <el-table-column prop="current" label="检查时间"></el-table-column>
                <el-table-column prop="grindId" label="检查人"></el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button @click="slot(scope.row)">确认</el-button>
                    </template>
                </el-table-column>
            </el-table-column>
        </el-table>
    </el-dialog>
    <el-dialog v-model="dialogVisible4" title="确认" width="50%" :before-close="handleClose">
        <el-card class="box-card" shadow="hover">
            <el-steps :active="active" finish-status="success">
                <el-button @click="activeL(0)" class="pos">{{ activeList[0].show ? '启用' : '禁用' }}</el-button>
                <el-step />
                <el-button @click="activeL(1)" class="pos">{{ activeList[1].show ? '启用' : '禁用' }}</el-button>
                <el-step />
                <el-button @click="activeL(2)" class="pos">{{ activeList[2].show ? '启用' : '禁用' }}</el-button>
                <el-step />
                <el-button @click="activeL(3)" class="pos">{{ activeList[3].show ? '启用' : '禁用' }}</el-button>
                <el-step />
                <el-button @click="activeL(4)" class="pos">{{ activeList[4].show ? '启用' : '禁用' }}</el-button>
                <el-step />
                <el-button @click="activeL(5)" class="pos">{{ activeList[5].show ? '启用' : '禁用' }}</el-button>
                <el-step />
            </el-steps>
        </el-card><br />
        <el-card class="box-card" shadow="hover">

        </el-card>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible4 = false">取消</el-button>
                <el-button type="primary" @click="savex">确定</el-button>
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
import { onMounted, reactive, ref, toRefs } from "vue";
import { ElMessageBox } from 'element-plus'
import { updateFrame, getFrameChild, getFrame, updateFrameChild, updateElectronic } from '@/api'
import { Alex } from '@/types'//引入参数规范类型
const data: any = reactive({
    tableData: [],
    tableData2: [],
    tableData3: [],
    tableData4: [],
    tableData5: [],
    tableData6: [],
    tableData7: [],
    frameBedList: []
})
const inputform: any = ref({})
const form: any = ref({})
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
const active = ref(1)
const activeList = ref([
    {
        show: false
    },
    {
        show: true
    },
    {
        show: false
    },
    {
        show: false
    },
    {
        show: false
    },
    {
        show: false
    },
])
const activeL = (i: any) => {
    activeList.value[i].show = !activeList.value[i].show
}
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
const chang2 = (row: any) => {
    console.log(row);
    from.value = row
    dialogVisible2.value = true
}
const chang3 = (row: any) => {
    console.log(row, search.value);
    switch (search.value) {
        case 'step1':
            row.handStatus = 3
            break;
        case 'step2':
            row.machineStatus = 3
            break;
        case 'step3':
            row.peelStatus = 3
            break;
        case 'step4':
            row.captainStatus = 3
            break;
    }
    let alex = new Alex
    alex.parameter = {
        stepNumber: search.value,
        updateData: row
    }
    updateFrameChild(alex).then((res: any) => {
        getChild();
    })

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
        getData();
    })
}
const add = () => {

    dialogVisible5.value = true
}
const slot = (row: any) => {
    dialogVisible3.value = true

}
const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
    done()
}
const dialogVisible2 = ref(false)
const dialogVisible3 = ref(false)
const dialogVisible4 = ref(false)
const dialogVisible5 = ref(false)

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
        getData();
    })
    dialogVisible.value = false
}

const savex = () => {
    console.log('焯');
    dialogVisible4.value = false
    setTimeout(() => {
        location.reload()
    }, 1000)
}

// 创建sortable实例
const initSortable = (className: any) => {
    // 获取表格row的父节点
    const table = document.querySelector('.' + className + ' .el-table__body-wrapper tbody');
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
            const { from, to, newIndex, oldIndex, path } = obj;
            let selfData = path[8].className;
            let targetData = to.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className;
            endTable.value = targetData
            if (from === to) {
                // console.log('右边自己内部拖动', newIndex, oldIndex)
                // const currRow: any = data[selfData].splice(newIndex, 1)[0];
                // console.log(currRow);
                // data[selfData].splice(newIndex, 0, currRow)
            } else if (from !== to) {
                // const currRow: any = data[selfData].splice(oldIndex, 1)[0];
                const currRow: any = data[selfData][oldIndex]
                dialogVisible4.value = true
                // getData();
                // data[targetData].splice(newIndex, 0, currRow)
                console.log(currRow);

                // data[targetData].splice(newIndex, 1)
                // console.log(data[targetData]);

                // data[targetData].splice(newIndex, 0, currRow)
                // ElMessageBox.confirm('确定移动?')
                //     .then(() => {
                console.log(`从'${startTable.value}'表移动到了'${endTable.value}'表`)
                //         console.log(data[targetData]);

                //     }).catch(() => {
                //         data[startTable.value].splice(oldIndex, 0, currRow)
                //         data[targetData].splice(newIndex, 1)
                //     })

            }
        }
    });
};
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
    })
}
onMounted(() => {
    getData();
    getChild();
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