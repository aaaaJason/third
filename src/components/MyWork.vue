<template>
  <div>
    <vc-calendar :attributes="attrs" style="height: 100%; width: 100%;"></vc-calendar>
  </div>
</template>

<script>

export default {
  data() {
    return {
      selectedDate: null,
      attrs: [
    {
       key: 'v0Day',
       // 括號內傳遞日期可點亮指定日期，如new Date(2019, 6, 1)，也可傳遞多個日期：如dates: [ new Date(2018, 0, 1), new Date(2018, 0, 15) ]
       dates: [ new Date(2024, 3, 1), new Date(2024, 3, 15) ],
       highlight: 'red',
       // popover 點亮的日期上出現提示內容
       popover: {
           label: '特休',
       },
    },
    {
       // 括號內傳遞日期可點亮指定日期，如new Date(2019, 6, 1)，也可傳遞多個日期：如dates: [ new Date(2018, 0, 1), new Date(2018, 0, 15) ]
       dates: [ new Date(2024, 3, 12), new Date(2024, 3, 25) ],
       highlight: 'green',
       // popover 點亮的日期上出現提示內容
       popover: {
           label: '事假',
       },
    },
    {
       // 括號內傳遞日期可點亮指定日期，如new Date(2019, 6, 1)，也可傳遞多個日期：如dates: [ new Date(2018, 0, 1), new Date(2018, 0, 15) ]
       dates: [ new Date(2024, 3, 30), ],
       highlight: 'blue',
       // popover 點亮的日期上出現提示內容
       popover: {
           label: '公假',
       },
    }
],
    };
  },
  methods: {
    getEventColor(event) {
      return event.color;
    }
  }
};
</script>
