<template>
  <div>
    <!-- 打卡按钮 -->
    <v-btn @click="clockIn">打卡</v-btn>
      <v-main>
          <!-- 打卡记录 -->
          <v-data-table
            :headers="headers"
            :items="clockRecords"
            class="elevation-1"
          ></v-data-table>
        
      </v-main>
   
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      clockRecords: [], // 打卡记录
      headers: [
        { text: '打卡時間', value: 'time' }
      ]
    };
  },
  methods: {
    // 打卡方法
    clockIn() {
      const currentTime = new Date().toLocaleString();
      this.clockRecords.push({ time: currentTime }); // 将当前时间添加到打卡记录中
    },
  },
};
</script>

<style>

</style>
