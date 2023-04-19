<template>
    <div>
        <el-card v-if="!lstatus" class="box-card box_l">
            <h1>宁波宝兴5号磨辊间智能化调度系统</h1><br>
            <!-- 登录表单 -->
            <el-form ref="ruleFormRef" :rules="rules" :model="data" status-icon class="demo-ruleForm">
                <el-form-item label="" prop="username">
                    <el-input v-model="data.username" clearable placeholder="请输入IC工号" />
                </el-form-item>
                <el-form-item label="" prop="password">
                    <el-input v-model="data.password" type="password" show-password clearable @keyup.enter="logins"
                        placeholder="请输入密码" />
                </el-form-item>
            </el-form>
            <!-- 登录表单 -->
            <el-button type="primary" :loading="loding" class="button" @click="logins">登录</el-button>
            <br />
            <br />
            <!-- <span @click="chack(1)" v-if="!lstatus">去注册</span> -->
        </el-card>
        <el-card v-if="lstatus" class="box-card box_l">
            <h1>宁波宝兴5号磨辊间智能化调度系统</h1><br>
            <!-- 注册表单 -->
            <el-form ref="ruleFormRef" :rules="rules" :model="data" status-icon class="demo-ruleForm">
                <el-select style="width: 100%;" v-model="department" class="m-2" placeholder="请选择部门">
                    <el-option v-for="item in departmentList" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <br />
                <br />
                <el-select style="width: 100%;" v-model="team" class="m-2" placeholder="请选择班组">
                    <el-option v-for="item in teamList" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <br />
                <br />
                <el-form-item label="" prop="userName">
                    <el-input v-model="data.username" clearable placeholder="请输入姓名" />
                </el-form-item>
                <el-form-item label="" prop="phoneNumber">
                    <el-input v-model="data.username" clearable placeholder="请输入手机号" />
                </el-form-item>
                <el-form-item label="" prop="username">
                    <el-input v-model="data.username" clearable placeholder="请输入IC工号" />
                </el-form-item>
                <el-form-item label="" prop="password">
                    <el-input v-model="data.password" type="password" show-password clearable @keyup.enter="logins"
                        placeholder="请输入密码" />
                </el-form-item>
            </el-form>
            <!-- 注册表单 -->
            <el-button type="primary" :loading="loding" class="button" @click="logins">注册</el-button>
            <br />
            <br />
            <span @click="chack(2)" v-if="lstatus">去登录</span>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
//使用vue3语法糖setup
import { ref, onMounted, reactive, toRefs } from 'vue'//引入vue中各种方法
import { LoginUser, Alex } from '@/types'//引入参数规范类型
import { login } from '@/api';//引入api方法
import axios from 'axios'
import { useRouter } from "vue-router";//引入路由
import { piniaData } from '@/store';//引入pinia状态管理
import { ElLoading, ElMessage } from 'element-plus'
import { validateUser, validatePassWord } from '@/utils/regexp';//引入验规则证
//pinia状态管理
const store = piniaData();
//路由
const router = useRouter();
//登录、注册状态
const lstatus = ref(false);
//按钮加载效果
const loding = ref(false);
const department = ref();
const team = ref();
const departmentList = ref([
    {
        label: '这是',
        value: '这'
    }
]);
const teamList = ref([
    {
        label: '这是',
        value: '这'
    }
]);
//登陆表单数据
const data = reactive(new LoginUser);
//eilnfo格式参数
const alex = reactive(new Alex);
//表单验证
const ruleFormRef = ref();
//登陆表单验证
const rules = reactive({
    username: [{ validator: validateUser, trigger: 'blur' }],
    password: [{ validator: validatePassWord, trigger: 'blur' }],
});
const chack = (i: any) => {
    switch (i) {
        case 1:
            console.log('来了是注册');

            lstatus.value = true;
            console.log(lstatus.value);
            break;
        case 2:
            lstatus.value = false;
            break;
    }
}
//用户登陆
const logins = () => {
    // " ? " 是指前面是underlined或者null后面的代码就不走了,也就是表单验证不通过就不走了
    ruleFormRef.value?.validate((valid: any) => {
        let loadingInstance: any = null;
        valid ? (
            //开启按钮加载动画
            loding.value = true,
            //给eilnfo参数赋值
            alex.parameter = data,
            loadingInstance = ElLoading.service({
                background: 'rgba(0, 0, 0, 0.7)'
            }),
            // 调用登陆方法传入eilnfo对象
            // axios.get(`http://192.168.0.128:8065/api/web/UserLogin?username=${data.username}&password=${data.password}`).then((res: any) => {
            axios.get(`http://192.2.25.61/api/web/UserLogin?username=${data.username}&password=${data.password}`).then((res: any) => {
                const loadingInstance = ElLoading.service()
                var reg1 = new RegExp("/");
                var a1 = res.data.replace(reg1, "");
                let data = JSON.parse(a1)
                console.log(data);

                data.Code == 200 ? (
                    // 把userinfo存入pinia
                    store.userInfo = data.data,
                    ElMessage({
                        message: data.Message,
                        type: 'success',
                    }),
                    loadingInstance.close(),
                    //登陆成功跳转
                    router.replace({ path: "/grinder" })
                ) : (
                    ElMessage.error(data.Message),
                    loadingInstance.close(),
                    //登陆失败后重置表单
                    ruleFormRef.value?.resetFields()
                )
                //关闭按钮加载动画
                loding.value = false;
            })
        ) : (
            //表单验证未通过
            false
        )
    })
};
</script>
<style scoped>
.box_l {
    text-align: center;
    width: 550px;
    /* height: 320px; */
    border-radius: 15px;
    padding: 10px;
    color: white;
    background-color: #ffffff5e;
    margin: calc((100vh * 0.5) - 200px) auto;
}

span {
    cursor: pointer;
}

.button {
    width: 100%;
}
</style>
