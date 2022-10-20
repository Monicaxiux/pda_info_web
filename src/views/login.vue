<template>
    <div>
        <el-card class="box-card box_l">
            <h1>宁波宝兴5号磨辊间智能化调度系统</h1><br>
            <!-- 登录表单 -->
            <el-form ref="ruleFormRef" :rules="rules" :model="data" status-icon class="demo-ruleForm">
                <el-form-item label="" prop="loginName">
                    <el-input v-model="data.loginName" clearable placeholder="请输入IC工号" />
                </el-form-item>
                <el-form-item label="" prop="password">
                    <el-input v-model="data.password" type="password" show-password clearable @keyup.enter="logins"
                        placeholder="请输入密码" />
                </el-form-item>
            </el-form>
            <!-- 登录表单 -->
            <el-button type="primary" :loading="loding" class="button" @click="logins">登录</el-button>
        </el-card>
    </div>
</template>

<script lang="ts" setup>//使用vue3语法糖setup
import { ref, onMounted, reactive, toRefs } from 'vue'//引入vue中各种方法
import { LoginUser, Alex } from '@/types'//引入参数规范类型
import { login } from '@/api';//引入api方法
import { useRouter } from "vue-router";//引入路由
import { piniaData } from '@/store';//引入pinia状态管理
import { ElLoading } from 'element-plus'
import { validateUser, validatePassWord } from '@/utils/regexp';//引入验规则证
//pinia状态管理
const store = piniaData();
//路由
const router = useRouter();
//按钮加载效果
const loding = ref(false);
//登陆表单数据
const data = reactive(new LoginUser);
//eilnfo格式参数
const alex = reactive(new Alex);
//表单验证
const ruleFormRef = ref();
//登陆表单验证
const rules = reactive({
    loginName: [{ validator: validateUser, trigger: 'blur' }],
    password: [{ validator: validatePassWord, trigger: 'blur' }],
});
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
            setTimeout(() => {
                loadingInstance.close()
                //登陆成功跳转至我的考试界面
                router.replace({ path: "/grinder" })
            }, 1300)
            //调用登陆方法传入eilnfo对象
            // login(alex).then((res: any) => {
            //     const loadingInstance = ElLoading.service()
            //     res.sys.status != -1 ? (
            //         //把userinfo存入pinia
            //         store.userInfo = res.userInfo,
            //         setTimeout(() => {
            //             loadingInstance.close()
            //             //登陆成功跳转至我的考试界面
            //             router.replace({ path: "/myPractice" })
            //         }, 1300)

            //     ) : (
            //         //登陆失败后重置表单
            //         ruleFormRef.value?.resetFields()
            //     )
            //     //关闭按钮加载动画
            //     loding.value = false;
            // })
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
    height: 300px;
    border-radius: 15px;
    padding: 10px;
    color: white;
    background-color: #ffffff5e;
    margin: calc((100vh * 0.5) - 200px) auto;
}

.button {
    width: 100%;
}
</style>
