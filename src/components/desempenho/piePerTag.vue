<script>

import axios from 'axios'
import { ref } from 'vue'
import Chart from 'chart.js/auto'

let info=ref('')
let infoArray=ref([])
let data = {
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};
let chart = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: {
    onClick: (e) => {
      const canvasPosition = getRelativePosition(e, chart);

      // Substitute the appropriate scale IDs
      const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
      const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
    }
  }
});

export default {
    data() {
      return {
        
        infoArray: infoArray,
        chart:chart,

      }
    },
    methods: {
      Refresh(){
          axios
          .get('http://localhost:8000/api/registros/')
          .then(response => {(info = JSON.stringify(response.data))
            this.infoArray=JSON.parse(info)

          })
      },
      getVal(item, path) {
      return path.split(".").reduce((res, prop) => res[prop], item);
    },

    },
    beforeMount(){
        this.Refresh()

        }
  
    
  }

</script>

<template>

<div>

    {{ chart }}
</div>



</template>

<style scoped>

</style>