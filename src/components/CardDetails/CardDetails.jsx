import React from 'react'
import {Card, CardHeader, CardContent, Typography} from "@material-ui/core";
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
import useTransactions from '../../useTransactions';

import useStyles from './styles';


Chart.register(ArcElement);

const CardDetails = ({title,subheader}) => {

    const classes = useStyles();
    const {total, chartData} = useTransactions(title);

    // console.log(chartData);

  return (
    <Card className={title==="Income" ? classes.income : classes.expense}>
        <CardHeader title={title} subheader={subheader}/>
        <CardContent>
            <Typography variant='h5'>R{total}</Typography>
            <Doughnut data={chartData}/>
        </CardContent>
    </Card>
  );
}

export default CardDetails