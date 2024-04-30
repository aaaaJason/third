<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="clockRecords"
      class="elevation-1"
      item-key=""
    >
      <template v-slot:item="{ item }">
        <td style="white-space: pre-line;">{{ item.time }}</td>
        <td>
          <v-btn @click="viewRecord(item)">查看詳細</v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: '時間', value: 'time',sortable: false },
        { text: '操作', value: 'actions', sortable: false },
      ],
      clockRecords:[
        {time: "20240302"},
       
      ],
    };
  },
  methods: {
    clockIn() {
      const currentTime = new Date().toLocaleString();
      this.clockRecords.push({ time: currentTime });
    },
    viewRecord(record) {
      console.log('查看詳細', record);
      // 在這裡執行查看詳細的相關操作
    },
  },
};
</script>

<style>
/* 可以添加自定義的樣式 */
</style>
