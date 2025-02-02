"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';

import React from 'react'
import { Ilan } from '@prisma/client';

import {format} from 'date-fns'
export const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
    ssr: false,
    });
const BarChart = ({ilanlar} : {ilanlar: Ilan[]}) => {


  /*tek tek aylar olması gerekiyor */
  /* o aydaki toplam ilan sayısı  */

  const toplamİlan= ilanlar.map((d) => ((format(new Date(d.createdAt), 'MMMM') ) )   )  //january january


  const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const toplamIlan = ilanlar.map((d) => format(new Date(d.createdAt), 'MMMM'));

const ilanSayilari = toplamIlan.reduce((acc:any, ay) => {
  acc[ay] = (acc[ay] || 0) + 1; 
  return acc;
}, {});

const sonuc = labels.map((ay) => ({
  month: ay,
  count: ilanSayilari[ay] || 0,
}));





/* toplamilanda gezsin eğer labeldaki herhangi biriyle aynı oluyosa ona 1 eklesin onu bi sayı yapsın */

const data = {
  labels: sonuc.map((d) => d.month),
  datasets: [
    {
      label: 'İlan Sayısı',
      data: sonuc.map((d) => d.count),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
    return (
    <div className='w-full h-full p-[20px]'>
      <h1 className='text-white'>Tarihlere Göre Siteye Koyulan İlan Grafiği</h1>
      <Bar data={data} />
    </div>
  );
};
export default BarChart;