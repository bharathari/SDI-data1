import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import {
  Box,
  Button,
  FormLabel,
  Input,
  styled,
} from "@mui/joy";
import { FieldValues, useForm } from 'react-hook-form';

export default function TabsBasic3() {
  const [formD, updateData] = React.useState({
    mainInfo: {
      title: '',
      startDate: '',
      endDate: '',
    },
    impact: {
      deaths: {
        deathMale: 10,
        deathFemale: 10,
      },
      missing: {
        missingMale: 10,
        missingFemale: 10,
      }
    }
  });

  const { register, handleSubmit,watch } = useForm({
    defaultValues:{
      mainInfo: {
        title: '',
        startDate: '',
        endDate: '',
      },
      impact: {
        deaths: {
          deathMale: 10,
          deathFemale: 10,
        },
        missing: {
          missingMale: 10,
          missingFemale: 10,
        }
      }
    }
  });
  const [horizontalValue, setHorizontalValue] = React.useState(0);
  const [verticalValue, setVerticalValue] = React.useState(0);
  const [submit, updateSubmit] = React.useState(false);
  const [saveNext, updateSave] = React.useState(true);

  const handleNext = () => {
    if (verticalValue <= 5 && horizontalValue === 1) {
      setVerticalValue((prev) => prev + 1);
      if (verticalValue === 5) {
        setHorizontalValue((prev) => prev + 1);
        setVerticalValue(0);
      }
    } else if (verticalValue <= 3 && horizontalValue === 2) {
      setVerticalValue((prev) => prev + 1);
      if (verticalValue === 3) {
        setVerticalValue(0);
        setHorizontalValue(0);
      } else if (verticalValue === 2) {
        updateSubmit(true);
        updateSave(false);
      }
    } else if (horizontalValue < 2) {
      setHorizontalValue((prev) => prev + 1);
    }
  };

  const CustomTab = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2), // Add space between each row
    "& .MuiFormLabel-root": {
      marginRight: theme.spacing(2), // Space between label and input
      minWidth: "150px", // Ensure labels have the same width for alignment
    },
    "& .MuiInput-root": {
      flexGrow: 1, // Ensure input takes up the remaining space
    },
  }));

  const onSubmit = (formData: FieldValues) => {
    updateData((prevData) => ({
      ...prevData,
      mainInfo: {
        ...prevData.mainInfo,
        title: formData.title,
        startDate: formData.startDate,
        endDate: formData.endDate,
      }
    }));    
    console.log(formD);
    
  };
  return (
    <>
      <Box sx={{ width: "55%" }}>
        <Box>
          National Academy Of Sciences Of Tajikistan
        </Box>
        <Tabs
          aria-label="Basic tabs"
          value={horizontalValue}
          sx={{ backgroundColor: "white" }}
        >
          <TabList
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <Tab disableIndicator color="success" variant="plain">
              Glacier Data
            </Tab>
          </TabList>
          <TabPanel
            value={0}
            sx={{
              backgroundColor: "white",
              width: "60%",
              alignSelf: "center",
            }}
          >
            <form onSubmit={handleSubmit((data)=>{onSubmit(data);console.log(data);
            })}>
              <CustomTab>
                <FormLabel htmlFor="location">Location</FormLabel>
                <Box sx={{ display: 'flex' }}>
                  <Input sx={{ mr: 4 }}
                    type="string"
                    {...register("mainInfo.title")}
                    placeholder="Latitude"
                  />
                  <Input
                    type="string"
                    id="custom-date-of-identification"
                    placeholder="Longitude"

                  />
                </Box>
              </CustomTab>

              <CustomTab>
                <FormLabel htmlFor="custom-date-of-identification">
                  Date Of Identification
                </FormLabel>
                <Input
                  type="string"
                  {...register("mainInfo.startDate")}
                  placeholder="Type in here…"
                />
              </CustomTab>
              <CustomTab>
                <FormLabel htmlFor="custom-risk-assesment">
                  Risk Assesment
                </FormLabel>
                <Input
                  {...register("mainInfo.endDate")}
                  placeholder="Type in here…"
                />
              </CustomTab>
              <Button type="submit">click</Button>
            </form>
          </TabPanel>
          <TabPanel
            value={0}
            sx={{
              backgroundColor: "white",
              width: "60%",
              alignSelf: "center",
            }}
          >
            <form onSubmit={handleSubmit((data)=>{onSubmit(data);console.log(data);
            })}>
              <CustomTab>
                <FormLabel htmlFor="location">Location</FormLabel>
                <Box sx={{ display: 'flex' }}>
                  <Input sx={{ mr: 4 }}
                    type="string"
                    {...register("impact.deaths.deathMale")}
                    placeholder="Latitude"
                  />

                </Box>
              </CustomTab>

              <CustomTab>
                <FormLabel htmlFor="custom-date-of-identification">
                  Date Of Identification
                </FormLabel>
                <Input
                  type="string"
                  {...register("impact.deaths.deathFemale")}
                  placeholder="Type in here…"
                />
              </CustomTab>
              <CustomTab>
                <FormLabel htmlFor="custom-risk-assesment">
                  Risk Assesment
                </FormLabel>
                <Input
                  {...register("impact.missing.missingMale")}
                  placeholder="Type in here…"
                />
              </CustomTab>
              <Button type="submit">click</Button>
            </form>
          </TabPanel>
        </Tabs>
      </Box>
      {submit && (
        <Button
          variant="outlined"
          color="success"
          onClick={() => {
            updateSave(true);
            updateSubmit(false);
          }}
        >
          Submit
        </Button>
      )}
      {saveNext && (
        <Button variant="outlined" color="success" onClick={handleNext}>
          Save&Next
        </Button>
      )}
    </>
  );
}
