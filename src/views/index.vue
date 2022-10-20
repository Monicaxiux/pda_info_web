<template>
    <div class="common-layout">
        <el-container>
            <el-aside :width="!isCollapse ? '240px' : '65px'">
                <div class="top">

                </div>
                <el-menu router :collapse="isCollapse" default-active="2" class="el-menu-vertical-demo">
                    <el-sub-menu index="1">
                        <template #title>
                            <i class="iconfont icon-caidan"></i>&nbsp;
                            <span>选项一</span>
                        </template>
                        <el-menu-item index="/grinder">
                            <i class="iconfont icon-caidan"></i>&nbsp;
                            <span>子选项一</span>
                        </el-menu-item>
                    </el-sub-menu>
                    <el-menu-item index="2">
                        <i class="iconfont icon-caidan"></i>&nbsp;
                        <span>选项二</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header class="head">
                    <div>
                        <!-- <i class="iconfont icon-zhedie"></i> -->
                    </div>
                    <div>
                        张三
                    </div>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const isCollapse = ref(true)
</script>
<style scoped>
.head {
    padding: 0;
    display: flex;
    justify-content: space-between;
    background-color: #ffffff70;
    border-bottom: 1px solid white;
}

.el-aside {
    transition: 1s;
}

.top {
    background-color: #ffffff70;
    height: 60px;
}

.head div {
    cursor: pointer;
    height: 100%;
    width: 50px;
    justify-content: center;
    display: flex;
    align-items: center;
    color: white;
}

.head div i {
    font-size: 25px;
}

:deep(.el-sub-menu) {
    /* border: 1px solid white; */
}

:deep(.el-menu) {
    background-color: #ffffff70;
    border: none;
}

:deep(.el-sub-menu__title) {
    color: white;
}

:deep(.el-menu-item) {
    /* border: 1px solid black; */
}

:deep(.el-menu-item.is-active) {
    color: #82bbff;
}

:deep(.el-table__empty-text) {
    color: white;
}

:deep(.el-menu-item) {
    color: white;
}
</style>