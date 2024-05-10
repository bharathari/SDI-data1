import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { Link, useLocation } from "react-router-dom";
import { Table, TableBody, TableCell, TableRow  } from "@mui/material";
import { Button, Tab, TabList,TabPanel,Tabs, styled } from "@mui/joy";
import { Sheet } from "@mui/joy";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CardGroup() {
  const value = useLocation();
  const data = value.state;
  
  console.log(data);
  const CustomTab = styled(Tab)({
    fontWeight: 'bold',
    '&.Mui-selected': {
      color: '#458844ba',
      borderBottom: '2px solid #458844ba',
      background: 'none',
    },
  });
  const temp1=data.member;
  delete data.member;
  const keys = Object.keys(data);
  console.log(temp1);

  return (
    <>
      <Button
      variant="outlined"
        sx={{
          border:'none',
          alignSelf: "flex-start",
          position: "fixed",
          left: "0em",
          color: "white",
          zIndex: "100",
          "&:hover": {
            color: "#a2bc69",
            cursor: "pointer",
          },
        }}
      >
        <Link to={"/"}>
          <ArrowBackIcon />
        </Link>
      </Button>
      <Sheet sx={{height:'100vh',width:'100vw',justifyContent:'center',alignContent:'center'}}>
      <Tabs
        // variant="soft"
        
        // aria-label="Placement indicator tabs"
        defaultValue="Data"
        sx={{

          alignItems:'center'
          
        }}
      >
        <TabList sx={{alignSelf:'center'}}>
          <CustomTab value="Data">
           Data
          </CustomTab>
          <CustomTab  value="Members">
            Members
          </CustomTab>
        </TabList>
        <TabPanel value="Data" sx={{height: 400,width:'45%',maxHeight: 400,overflowY:'scroll'}}>
        
          <Card variant="outlined">
            <CardContent>
              <Table>
                <TableBody>
                  {keys.map((key) => (
                    <TableRow key={key}>
                      <TableCell component="th" scope="row">
                        <b>{key}</b>
                      </TableCell>
                      <TableCell>{data[key]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          </TabPanel>
        <TabPanel value="Members" sx={{height: 400,width:'45%',maxHeight: 400,overflowY:'scroll'}}>
        
        <Card variant="outlined">
          <CardContent>
            <Table>
              <TableBody>
                {temp1.map((element:string,index:number) => (
                  <TableRow key={element}>
                    <TableCell component="th" scope="row">
                      <b>Member{index+1}</b>
                    </TableCell>
                    <TableCell>{element}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
     
   
      </TabPanel>
      </Tabs>
      </Sheet>
    </>
  );
}
