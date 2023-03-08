<template>
    <div class="common-layout">
        <el-container>
            <el-aside :width="!isCollapse ? '240px' : '65px'">
                <div class="top">
                    <img
                        src="data:image/webp;base64,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" />
                </div>
                <el-menu router :collapse="isCollapse" default-active="2" class="el-menu-vertical-demo">
                    <el-menu-item index="/overview">
                        <i class="iconfont icon-caidan"></i>&nbsp;
                        <span>AGV生产排程</span>
                    </el-menu-item>
                    <el-sub-menu index="1">
                        <template #title>
                            <i class="iconfont icon-caidan"></i>&nbsp;
                            <span>磨削生产排程</span>
                        </template>
                        <el-menu-item index="/grinder">
                            <i class="iconfont icon-caidan"></i>&nbsp;
                            <span>13#14#磨床区</span>
                        </el-menu-item>
                        <el-menu-item index="/grinders">
                            <i class="iconfont icon-caidan"></i>&nbsp;
                            <span>15#16#磨床区</span>
                        </el-menu-item>
                        <el-menu-item index="/grinderz">
                            <i class="iconfont icon-caidan"></i>&nbsp;
                            <span>17#18#磨床区</span>
                        </el-menu-item>
                    </el-sub-menu>
                    <el-menu-item index="/rollqr">
                        <i class="iconfont icon-caidan"></i>&nbsp;
                        <span>轧辊二维码</span>
                    </el-menu-item>
                    <el-menu-item index="/aRollerFrame">
                        <i class="iconfont icon-caidan"></i>&nbsp;
                        <span>A区辊架</span>
                    </el-menu-item>
                    <el-menu-item index="/AgvAutoInfo">
                        <i class="iconfont icon-caidan"></i>&nbsp;
                        <span>AGV半自动任务查询</span>
                    </el-menu-item>
                    <el-menu-item index="/GrindAutoInfo">
                        <i class="iconfont icon-caidan"></i>&nbsp;
                        <span>机器人半自动任务查询</span>
                    </el-menu-item>
                    <el-menu-item index="/outScheduling">
                        <i class="iconfont icon-caidan"></i>&nbsp;
                        <span>出库排程</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header class="head">
                    <!-- <div class="x">
                        <i @click="isCollapse = !isCollapse" class="iconfont icon-zhedie"></i>

                    </div> -->
                    <h2>宁波宝新5号磨辊间智能排程系统</h2>


                    <div class="x2">
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
const isCollapse = ref(false)
</script>
<style scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.head {
    padding: 0;
    display: flex;
    color: white;
    justify-content: space-between;
    background-color: #3c53875e;
    border-bottom: 1px solid #a2bcf4;
}

.el-aside {
    transition: 1s;
}

.top {
    text-align: center;
    line-height: 60px;
    color: white;
    /* background-color: #ffffff70; */
    background-color: #3c53875e;
    height: 60px;
}

.x {
    height: 100%;
    width: 200px;
    padding: 0 20px;
    background-color: white;
}

.x2 {
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
    /* background-color: #ffffff70; */
    background-color: #3c53875e;
    border: none;
}

:deep(.el-sub-menu__title) {
    color: white;
}

:deep(.el-sub-menu__title:hover) {
    color: black;
}

:deep(.el-menu-item) {
    /* border: 1px solid black; */
}

:deep(.el-menu-item.is-active) {
    color: #82bbff;
}

:deep(.el-menu-item:hover) {
    color: black;
}

:deep(.el-table__empty-text) {
    color: white;
}

:deep(.el-menu-item) {
    color: white;
}

.el-main {
    height: 98vh;
    overflow: hidden;
}
</style>