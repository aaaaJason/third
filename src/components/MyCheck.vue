<template>
  <div>
    <h1>補打卡</h1>
  
    <v-radio-group v-model="clockType">
      <v-radio
        label="上班補卡"
        value="onDuty"
        color="primary"
      >
        <template v-slot:label>
          <v-icon>mdi-clock-in</v-icon>
          上班補卡
        </template>
      </v-radio>

      <v-radio
        label="下班補卡"
        value="offDuty"
        color="primary"
      >
        <template v-slot:label>
          <v-icon>mdi-clock-out</v-icon>
          下班補卡
        </template>
      </v-radio>
    </v-radio-group>

    <!-- 日期 -->
    <v-dialog v-model="dateDialog" max-width="290">
      <template v-slot:activator="{ on }">
        <v-text-field ref="date" v-model="date" label="日期" readonly v-on="on"></v-text-field>
      </template>
      <v-date-picker v-model="date" no-title scrollable></v-date-picker>
    </v-dialog>

    <!-- 時間 -->
    <v-dialog v-model="timeDialog" max-width="290">
      <template v-slot:activator="{ on }">
        <v-text-field  ref="time" v-model="time" label="時間" readonly v-on="on"></v-text-field>
      </template>
      <v-time-picker v-model="time"></v-time-picker>
    </v-dialog>

    <!-- 原因 -->
    <v-text-field v-model="reason" label="原因"></v-text-field>

    <!-- 送出按鈕 -->
    <v-btn color="primary" @click="submit">送出</v-btn>

    <!-- 清除按鈕 -->
    <v-btn color="error" @click="clear">清除</v-btn>
  </div>
</template>

<script>
export default {
  name: 'MakeUpClock',
  data() {
    return {
      onDuty: false,
      offDuty: false,
      dateDialog: false,
      timeDialog: false,
      clockType: 'onDuty', // 存儲選擇的打卡類型
      date: new Date().toISOString().substr(0, 10),
      time: new Date().toISOString().substr(11, 5),
      reason: ''
    };
  },
  methods: {
    submit() {
      // 處理提交邏輯
    },
    clear() {
      this.date = new Date().toISOString().substr(0, 10);
      this.time = new Date().toISOString().substr(11, 5);
      this.reason = '';
      this.$refs.date.clearableCallback();
      this.$refs.time.clearableCallback();
    }
  }
};
</script>

<style>
/* 可以添加樣式 */
</style>
