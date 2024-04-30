<template>
  <div>
    <h1 style="color:#000000;">您好，{{ userName }}</h1>
    <div>
      <img src="../assets/sun.svg" alt="your_image" style="width: 100px; height: 100px;">
    </div>
    <!--<input v-model="cidInput" placeholder="请输入 cid 值" />
    <button @click="delBtn">刪除</button>
    <button @click="upBtn">更新</button>
    <button @click=" insertBtn">点击获取用户信息</button>-->
    <p>現在時間：{{ currentTime }}</p>
    <v-data-table
    :headers="headers"
    :items="employees"
    hide-default-footer
    class="elevation-1"
  ></v-data-table>
  </div>
</template>

<script>
import { getUserInfo } from '@/axios/api'
import { insertData } from '@/axios/api'
import { delData } from '@/axios/api'
import { upData } from '@/axios/api'
export default {
  data() {
    return {
      user: '',
      userInfo: {},
      cidInput: '',
      userName: 'XXX', // 替換成你的用戶名
      currentTime: '', // 初始化當前時間
      employees:[],
      headers: [
          { text: '特休',value: 'specia',},
          { text: '出勤異常', value: 'abnormal' },
          { text: '病假', value: 'sick' },
          { text: '事假', value: 'personal' },
        ],
    };
  },
  mounted() {
    // 在組件掛載後，開始更新時間
    this.updateTime();
    this.getUser();
    
  },
  methods: {
    updateTime() {
      // 更新時間的方法
      setInterval(() => {
        this.currentTime = new Date().toLocaleString();
      }, 1000); // 每秒更新一次
    },
    async getUser() {
  try {
    let res = await getUserInfo({ cid: 1 });
    console.log(res, '/api', '获取的用户信息');
    this.userInfo = res.data; 
    console.log('emp', this.userInfo[0]);
    this.employees.push({
      specia: this.userInfo[0].specia,
      abnormal: this.userInfo[0].abnormal,
      sick: this.userInfo[0].sick,
      personal: this.userInfo[0].personal,
        });
    
  } catch (error) {
    console.error('获取用户信息失败:', error);
  }
    },
    async insertBtn() {
  try {
    let res = await insertData(
      { cid: 3, 
        specia: 2, 
        abnormal: 3, 
        sick: 4, 
        personal: 5 }
      );
    console.log(res, '/api', '获取的用户信息');
    
  } catch (error) {
    console.error('获取用户信息失败:', error);
  }
    },
    async delBtn() {
      try {
    let res = await delData({cid: this.cidInput });
    console.log(res, '/api', '获取的用户信息');
  } catch (error) {
    console.error('获取用户信息失败:', error);
  }
    },
    async upBtn() {
  try {
    let res = await upData(
      { cid: 3, 
        specia: 99, 
        abnormal: 39, 
        sick: 49, 
        personal: 59 }
      );
    console.log(res, '/api', '获取的用户信息');
    
  } catch (error) {
    console.error('获取用户信息失败:', error);
  }
    },
  }
};
</script>

<style>
/* 在這裡添加自定義樣式 */
</style>
