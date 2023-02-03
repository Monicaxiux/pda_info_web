<template>
    <dv-border-box11 title="轧辊" class="box">
        <el-table class="table" ref="dragTable" :data="tableData" border>
            <!-- <el-table-column prop="slotPosition" label="槽号"></el-table-column> -->
            <el-table-column prop="rollId" label="辊号"></el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button size="small" @click="getQR(scope.row, 1)">二维码</el-button>
                </template>
            </el-table-column>
        </el-table>
    </dv-border-box11>
    <el-dialog v-model="dialogVisible" title="二维码" width="30%" :before-close="handleClose">
        <div id="printTest">
            <img :src="code" />
            <br>
            <span>轧辊号：{{ rollId }}</span>
        </div>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" v-print="'#printTest'">
                    打印
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import jrQrcode from "jr-qrcode";

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
    done()
}
const tableData = ref([{
    slotPosition: '1',
    rollId: '123',
}])
const code = ref('');
const rollId = ref('');
const getQR = (row: any, i: number) => {
    code.value = jrQrcode.getQrBase64(row.rollId);
    rollId.value = row.rollId;
    dialogVisible.value = true;
}
</script>
<style scoped>
img {
    display: block;
    width: 60%;
    margin: 0 auto;
}

span {
    display: block;
    text-align: center;
}

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