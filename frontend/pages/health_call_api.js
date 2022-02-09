import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React,{useRef,useState} from 'react'
import {Doughnut} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart, ArcElement,Legend,Title,Tooltip} from 'chart.js'



export async function getServerSideProps(context){

 
    const res = await fetch(`http://${process.env.BACKENDHOST}:5000/health`)
    const data = await res.json()
    return{
      props:{resultat:data}
    }

  }

  export default function outputPage(props) {

    return (
        <div>
            <p>{props.resultat.response}</p>      
        </div>
    )
}
