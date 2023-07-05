<template>
    <div>
         <div class="con admin" style="display: none;">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>头像</th>
                                <th>用户名</th>
                                <th>密码</th>
                                <th>昵称</th>
                                <th>性别</th>
                                <th>电话</th>
                                <th>添加时间</th>
                                <th>是否可用</th>
                                <th>删除</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><img src="@/assets/avatar.png" alt="" class="img-circle avatar"></td>
                                <td>admin</td>
                                <td>123456</td>
                                <td>chongc</td>
                                <td>男</td>
                                <td>12345678901</td>
                                <td>2022-4-5</td>
                                <td><input type="checkbox" value=""></td>
                                <td><img src="@/assets/del.png" alt=""></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><img src="@/assets/avatar.png" alt="" class="img-circle avatar"></td>
                                <td>admin</td>
                                <td>123456</td>
                                <td>chongc</td>
                                <td>男</td>
                                <td>12345678901</td>
                                <td>2022-4-5</td>
                                <td><input type="checkbox" value=""></td>
                                <td><img src="@/assets/del.png" alt=""></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><img src="@/assets/avatar.png" alt="" class="img-circle avatar"></td>
                                <td>admin</td>
                                <td>123456</td>
                                <td>chongc</td>
                                <td>男</td>
                                <td>12345678901</td>
                                <td>2022-4-5</td>
                                <td><input type="checkbox" value=""></td>
                                <td><img src="@/assets/del.png" alt=""></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="page">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                    </div>
                </div>
 
    </div>
</template>

<script>
export default {
    name: 'ManageView',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style>