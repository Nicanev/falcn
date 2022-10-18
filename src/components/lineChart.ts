import { defineComponent, h } from "vue";
import type { PropType } from "vue";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from "chart.js";
import type {Plugin} from "chart.js";
ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
  )
  ChartJS.defaults.color = "#C94C48";
  
  export default defineComponent({
    name: 'LineChart',
    components: {
      Line
    },
    props: {
      chartId: {
        type: String,
        default: 'line-chart'
      },
      width: {
        type: Number,
        default: 700
      },
      height: {
        type: Number,
        default: 400
      },
      cssClasses: {
        default: '',
        type: String
      },
      styles: {
        type: Object as PropType<Partial<CSSStyleDeclaration>>,
        default: () => {}
      },
      plugins: {
        type: Array as PropType<Plugin<'line'>[]>,
        default: () => []
      }
    },
    setup(props) {
      const chartData = {
        labels: ['0s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s'],
        datasets: [
          {
            label: 'Время отклика',
            backgroundColor: '#36F4F0',
            tension: 0.1,
            fill: false,
            borderColor: '#36F4F0',
            data: [0, 30, 34, 40, 39, 50, 40, 35, 28, 40]
          }
        ]
      }
  
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false
      }
  
      return () =>
        h(Line, {
          chartData,
          chartOptions,
          chartId: props.chartId,
          width: props.width,
          height: props.height,
          cssClasses: props.cssClasses,
          styles: props.styles,
          plugins: props.plugins
        })
    }
  })