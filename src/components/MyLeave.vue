<template>
  <div>
    <h1>我要請假</h1>

    <!-- 類別下拉選單 -->
    <v-select
      v-model="category"
      :items="categoryOptions"
      label="類別"
    ></v-select>
 
    <!-- 開始時間選擇器 -->
    <v-dialog v-model="startDialog" max-width="290">
      <template v-slot:activator="{ on }">
        <v-text-field  ref="startDT" v-model="startDateTime" label="開始時間" readonly v-on="on"  ></v-text-field>
      </template>
      <v-date-picker v-model="startdate"></v-date-picker>
      <v-time-picker v-model="starttime"></v-time-picker>
      <v-btn color="primary" @click="saveStartDateTime">儲存</v-btn>
    </v-dialog>

    <!-- 結束時間選擇器 -->
    <v-dialog v-model="endDialog" max-width="290">
      <template v-slot:activator="{ on }">
        <v-text-field  ref="endDT" v-model="endDateTime" label="結束時間" readonly v-on="on"></v-text-field>
      </template>
      <v-date-picker v-model="enddate"></v-date-picker>
      <v-time-picker v-model="endtime"></v-time-picker>
      <v-btn color="primary" @click="saveEndDateTime">儲存</v-btn>
    </v-dialog>

    <!-- 代理人下拉選單 -->
    <v-select
      v-model="agent"
      :items="agentOptions"
      label="代理人"
    ></v-select>

    <!-- 備註輸入框 -->
    <v-text-field
      v-model="remarks"
      label="備註"
      multi-line
      rows="3"
    ></v-text-field>

    <!-- 確認送出按鈕 -->
    <v-btn color="primary" @click="submit">確認送出</v-btn>

    <!-- 清空按鈕 -->
    <v-btn color="error" @click="clear">清空</v-btn>
  </div>
</template>

<script>
export default {
  name: 'NewPage',
  data() {
    return {
      category: null,
      categoryOptions: [
        '類別1',
        '類別2',
        '類別3'
      ],
      startDialog: false,
      endDialog: false,
      agent: null,
      agentOptions: [
        '代理人1',
        '代理人2',
        '代理人3'
      ],
      remarks: ''
    };
  },
  methods: {
    submit() {
      // 處理提交邏輯
    },clear() {
  this.category = null;
  this.startdate = '';
  this.starttime = '';
  this.startdateTime = '';
  this.enddate = '';
  this.endtime = '';
  this.enddateTime = '';
  this.agent = null;
  this.remarks = '';
  this.$refs.startDT.clearableCallback();
  this.$refs.endDT.clearableCallback();
},
    saveStartDateTime() {
      // 將開始日期和時間組合成完整的日期時間字串
      this.startDateTime = `${this.startdate} ${this.starttime}`;
      // 關閉開始對話框
      this.startDialog = false;
    },
    saveEndDateTime() {
      // 將結束日期和時間組合成完整的日期時間字串
      this.endDateTime = `${this.enddate} ${this.endtime}`;
      // 關閉結束對話框
      this.endDialog = false;
    },
  }
};
</script>

<style>
/* 可以添加樣式 */
</style>
