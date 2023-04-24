
import { Chart as ChartJS, CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);
const options ={
    indexAxis:'y',
    elements:{
        bar:{
            borderWidth:2,
        },
    },
    responsive:true,
    plugins:{
        legend:{
            position:'right',
        },
        title:{
            display:true,
            text:'Availability ',
        },
    },
 };


const labels = ['Wedding ' ,'Real State' , 'Co-operate' , 'Wildlife','Personal']
const data = {
    labels,
    datasets:[
        {
        label:'Client Approached',
        data:[5,7,2,8,9],
        BorderColor:'rgb(111,99,132)',
        backgroundColor:'rgba(134,99,132,0.5)',
        },
        {
            label:'Events attended',
            data:[1,2,3,4,5],
            BorderColor:'rgb(255,99,132)',
            backgroundColor:'rgba(255,99,132,0.5)',
            },

    ]
}
function ChartHorizontal() {
  return (
    <>
      <Bar data={data} options={options}/>
    </>
  )
}

export default ChartHorizontal
