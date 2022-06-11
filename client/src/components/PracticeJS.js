import React, {useState} from "react";
import {Addition,Subtraction,Multiplication,Exponentiation,Division,Modulus} from "../functions/ArithmeticJS";
import {
  ToUpperCase,
  ToLowerCase,
  Length,
  Slice,
  Substring,
  Replace,
  Trim,
  PadStart,
  PadEnd,
  CharAt,
  Split,
  Concat
} from "../functions/MethodsStringsJS";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'

import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
  export default function Javascript(){
    // Values for the arithmetic operations
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const handleChangeNum1 = (event) => {
        setNum1(event.target.value);
    }
    const handleChangeNum2 = (event) => {
        setNum2(event.target.value);
    }
    // Values for the methods operations
    const [string1, setString1] = useState('');
    const [string2, setString2] = useState('');
    const [string3, setString3] = useState('');
    const handleChangeString1 = (event) => {
        setString1(event.target.value);
    }
    const handleChangeString2 = (event) => {
        setString2(event.target.value);
    }
    const handleChangeString3 = (event) => {
      setString3(event.target.value);
  }
    return (
        //Aricmetical JS begin
        <div  style={{overflowX: 'hidden', overflowY: 'auto', backgroundColor: 'white'}}>
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      style={{textAlign: 'center'}}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={handleChangeNum1} id="outlined-basic" label="Value1" variant="outlined" />
      <TextField onChange={handleChangeNum2} id="outlined-basic" label="Value2" variant="outlined" />
    </Box>
            {/*Aricmetical JS end */}

           <Grid container>
           <Grid item>
              <Card style={{margin: '3vh'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    <h3>Addition:</h3>
                    {Addition(num1, num2)}
                </Typography>
                </CardContent>
              </Card>

           </Grid>
           <Grid item>
              <Card style={{margin: '3vh'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    <h3>Subtraction:</h3>
                    {Subtraction(num1, num2)}
                </Typography>
                </CardContent>
              </Card>

           </Grid>
           <Grid item>
             <Card style={{margin: '3vh'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    <h3>Division:</h3>
                    {Division(num1, num2)}
                </Typography>
                </CardContent>
                </Card>
           </Grid>
           <Grid item>
             <Card style={{margin: '3vh'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    <h3>Multiplication:</h3>
                    {Multiplication(num1, num2)}
                </Typography>
                </CardContent>
                </Card>
           </Grid>
           <Grid item>
             <Card style={{margin: '3vh'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    <h3>Exponentiation:</h3>
                    {Exponentiation (num1, num2)}
                </Typography>
                </CardContent>
                </Card>
           </Grid>
           <Grid item>
              <Card style={{margin: '3vh'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    <h3>Modulus :</h3>
                    {Modulus (num1, num2)}
                </Typography>
                </CardContent>
                </Card>
           </Grid>
              </Grid>
            {/*Aricmetical JS end */}
             {/*Methods JS starts */}
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      style={{textAlign: 'center'}}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={handleChangeString1} id="outlined-basic" label="String" variant="outlined" />
      <TextField onChange={handleChangeString2} id="outlined-basic" label="String/Num" variant="outlined" />
      <TextField onChange={handleChangeString3} id="outlined-basic" label="String/Num" variant="outlined" />
    </Box>
           
           
           <Grid container>
           <Grid item>
              <Card style={{margin: '3vh'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    <h3>Length:</h3>
                    {Length(string1)}
                    <h5>STRING</h5>
                </Typography>
                </CardContent>
              </Card>

           </Grid>
           <Grid item>
              <Card style={{margin: '3vh'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    <h3>Slice:</h3>
                    {Slice(string1,string2, string3)}
                    <h5>STRING | NUM | NUM</h5>
                </Typography>
                </CardContent>
              </Card>

           </Grid>
           <Grid item>
             <Card style={{margin: '3vh'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    <h3>Substring:</h3>
                    {Substring(string1,string2, string3)}
                    <h5>STRING | NUM | NUM</h5>
                </Typography>
                </CardContent>
                </Card>
           </Grid>
           <Grid item>
             <Card style={{margin: '3vh'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    <h3>Replace:</h3>
                    {Replace(string1,string2, string3)}
                    <h5>STRING | STRING | STRING</h5>
                </Typography>
                </CardContent>
                </Card>
           </Grid>
           <Grid item>
             <Card style={{margin: '3vh'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    <h3>ToLowerCase:</h3>
                    {ToLowerCase (string1)}
                    <h5>STRING</h5>
                </Typography>
                </CardContent>
                </Card>
           </Grid>
           <Grid item>
              <Card style={{margin: '3vh'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    <h3>ToUpperCase :</h3>
                    {ToUpperCase(string1)}
                    <h5>STRING</h5>
                </Typography>
                </CardContent>
                </Card>
           </Grid>
           <Grid item>
              <Card style={{margin: '3vh'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    <h3>Trim :</h3>
                    {Trim(string1)}
                    <h5>STRING</h5>
                </Typography>
                </CardContent>
                </Card>
                
           </Grid>
           <Grid item>
              <Card style={{margin: '3vh'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    <h3>PadStart :</h3>
                    {PadStart(string1,string2,string3)}
                    <h5>STRING | NUM | STRING</h5>
                </Typography>
                </CardContent>
                </Card>
                
           </Grid>
           <Grid item>
              <Card style={{margin: '3vh'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    <h3>PadEnd :</h3>
                    {PadEnd(string1,string2,string3)}
                    <h5>STRING | NUM | STRING</h5>
                </Typography>
                </CardContent>
                </Card>
                
           </Grid>
           <Grid item>
              <Card style={{margin: '3vh'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    <h3>CharAt :</h3>
                    {CharAt(string1)}
                    <h5>STRING | NUM</h5>
                </Typography>
                </CardContent>
                </Card>
                
           </Grid>
           <Grid item>
              <Card style={{margin: '3vh'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    <h3>Split :</h3>
                    {Split(string1,string2)}
                    <h5>STRING | STRING</h5>
                </Typography>
                </CardContent>
                </Card>
                
           </Grid>
           <Grid item>
              <Card style={{margin: '3vh'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    <h3>Concat :</h3>
                    {Concat(string1,string2)}
                    <h5>STRING | STRING</h5>
                </Typography>
                </CardContent>
                </Card>
                
           </Grid>
              </Grid>
            {/*Methods JS end */}
          

          

          
        </div>
    );
}