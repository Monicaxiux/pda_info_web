<template>
    <el-steps :active="active" finish-status="success">
        <button @click="activeL(0)" class="pos">{{ activeList[0].show ? '启用' : '禁用' }}</button>
        <el-step />
        <button @click="activeL(1)" class="pos">{{ activeList[1].show ? '启用' : '禁用' }}</button>
        <el-step />
        <button @click="activeL(2)" class="pos">{{ activeList[2].show ? '启用' : '禁用' }}</button>
        <el-step />
        <button @click="activeL(3)" class="pos">{{ activeList[3].show ? '启用' : '禁用' }}</button>
        <el-step />
        <button @click="activeL(4)" class="pos">{{ activeList[4].show ? '启用' : '禁用' }}</button>
        <el-step />
        <button @click="activeL(5)" class="pos">{{ activeList[5].show ? '启用' : '禁用' }}</button>
        <el-step />
    </el-steps>
    <br><br>
    <el-button style="margin-top: 12px" @click="next">Next step</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

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

const next = () => {
    // if (activeList[])
    // if (active.value++ > 5) active.value = 0
    if (active.value++ > 5) active.value = 1

    if (activeList.value[active.value - 1].show) {
        active.value + 2
    }

    console.log(active.value);


}
const activeL = (i: any) => {
    activeList.value[i].show = !activeList.value[i].show
}
const qwe = (e: any) => {
    console.log(e);

}
</script>
<style>
.pos {
    position: relative;
    top: 40px;
    left: 35px;
}
</style>
