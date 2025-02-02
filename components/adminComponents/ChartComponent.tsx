"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Ilan, User } from "@prisma/client";

ChartJS.register(ArcElement, Tooltip, Legend);
interface ChartComponentInterface  {
  a: {
    Ilanlar: ({
        IlanTuru: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            IlanTipiId: string;
            IlanTuruIsmi: string;
        };
    } & Ilan)[];
} & User }

export const ChartComponent:React.FC<ChartComponentInterface>  = ({a}) => {
  let count = a.Ilanlar.map((d) =>d.IlanTuru).reduce((acc:any, child) => {
    const bra = (acc[child.IlanTuruIsmi] || 0) + 1;
    return bra;
  }, {}); 

  const ilantürüismi = a.Ilanlar.map((d) => d.IlanTuru.IlanTuruIsmi)
  let data= a.Ilanlar.map((c) =>  ({
      label:  c.IlanTuru.IlanTuruIsmi ,
      value: count,
      /* burda şöyle mi yapabiliriz acaba hedefimiz şu adamın ilanları içindeki ilan türlerinin toplamına göre bu kısmın yoğunluğu */
      color: `rgba(0, ${43*count*5}, 73, 1)`,
      cutout: "50%",
    })
   
   
 )
       
      
        const options: any = {
          plugins: {
            responsive: true,
          },
          cutout: data.map((item) => item.cutout),
        };
      
        const finalData = {
          labels: data.map((item) => item.label),
          datasets: [
            {
              data: data.map((item) => Math.round(item.value)),
              backgroundColor: data.map((item) => item.color),
              borderColor: data.map((item) => item.color),
              borderWidth: 1,
              dataVisibility: new Array(data.length).fill(true),
            },
          ],
        };
      
        return <Doughnut  data={finalData} options={options} />;
}

