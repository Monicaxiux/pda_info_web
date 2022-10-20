// 验证IC工号
export const validateUser = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入IC工号！'))
    } else {
        callback();
    }
}
// 验证密码
export const validatePassWord = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入密码！'))
    } else {
        callback();
    }
}