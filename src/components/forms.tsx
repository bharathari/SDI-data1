import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  FormLabel,
  Grid,
  Input,
  Option,
  Select,
  accordionDetailsClasses,
  accordionSummaryClasses,
  styled,
} from "@mui/joy";
const Deaths = [
  { label: "Death Males", placeholder: "Type in here…" },
  { label: "Death Females", placeholder: "Type in here…" },
  { label: "Death Child", placeholder: "Type in here…" },
  { label: "Death Adults", placeholder: "Type in here…" },
  { label: "Death Elderly", placeholder: "Type in here…" },
  { label: "Death Disabale People", placeholder: "Type in here…" },
  { label: "Death Pregnancy & Lactating", placeholder: "Type in here…" },
  { label: "Total Deaths", placeholder: "Type in here…" },
];
const Missings = [
  { label: "Missing Males", placeholder: "Type in here…" },
  { label: "Missing Females", placeholder: "Type in here…" },
  { label: "Missing Child", placeholder: "Type in here…" },
  { label: "Missing Adults", placeholder: "Type in here…" },
  { label: "Missing Elderly", placeholder: "Type in here…" },
  { label: "Missing Disabale People", placeholder: "Type in here…" },
  { label: "Missing Pregnancy & Lactating", placeholder: "Type in here…" },
  { label: "Total Missing", placeholder: "Type in here…" },
];
const Injured = [
  { label: "Injured Males", placeholder: "Type in here…" },
  { label: "Injured Females", placeholder: "Type in here…" },
  { label: "Injured Child", placeholder: "Type in here…" },
  { label: "Injured Adults", placeholder: "Type in here…" },
  { label: "Injured Elderly", placeholder: "Type in here…" },
  { label: "Injured Disabale People", placeholder: "Type in here…" },
  { label: "Injured Pregnancy & Lactating", placeholder: "Type in here…" },
  { label: "Total Injured", placeholder: "Type in here…" },
];
const Affected = [
  { label: "Affected Males", placeholder: "Type in here…" },
  { label: "Affected Females", placeholder: "Type in here…" },
  { label: "Affected Child", placeholder: "Type in here…" },
  { label: "Affected Adults", placeholder: "Type in here…" },
  { label: "Affected Elderly", placeholder: "Type in here…" },
  { label: "Affected Disabale People", placeholder: "Type in here…" },
  { label: "Affected Pregnancy & Lactating", placeholder: "Type in here…" },
  { label: "Total Affected", placeholder: "Type in here…" },
];
const Relocated = [
  { label: "Relocated Males", placeholder: "Type in here…" },
  { label: "Relocated Females", placeholder: "Type in here…" },
  { label: "Relocated Child", placeholder: "Type in here…" },
  { label: "Relocated Adults", placeholder: "Type in here…" },
  { label: "Relocated Elderly", placeholder: "Type in here…" },
  { label: "Relocated Disabale People", placeholder: "Type in here…" },
  { label: "Relocated Pregnancy & Lactating", placeholder: "Type in here…" },
  { label: "Total Relocated", placeholder: "Type in here…" },
];
const Evacuated = [
  { label: "Evacuated Males", placeholder: "Type in here…" },
  { label: "Evacuated Females", placeholder: "Type in here…" },
  { label: "Evacuated Child", placeholder: "Type in here…" },
  { label: "Evacuated Adults", placeholder: "Type in here…" },
  { label: "Evacuated Elderly", placeholder: "Type in here…" },
  { label: "Evacuated Disabale People", placeholder: "Type in here…" },
  { label: "Evacuated Pregnancy & Lactating", placeholder: "Type in here…" },
  { label: "Total Evacuated", placeholder: "Type in here…" },
];
const DamagedLossBuildings = [
  { label: "Medium Damaged House", placeholder: "Type in here…" },
  { label: "Heavily Damaged House", placeholder: "Type in here…" },
  { label: "Total", placeholder: "Type in here…" },
];
const OtherBuildings = [
  { label: "Affected Education Facilities", placeholder: "Type in here…" },
  { label: "Affected Health Facilities", placeholder: "Type in here…" },
  { label: "Damaged Public Buildings", placeholder: "Type in here…" },
];
const Infrastructure = [
  { label: "Damage Bridge or Tunnel", placeholder: "Type in here…" },
  { label: "Damage Water Supply", placeholder: "Type in here…" },
  {
    label: "Damage Power And transmission Lines",
    placeholder: "Type in here…",
  },
  { label: "Damage Telecommunication", placeholder: "Type in here…" },
  { label: "Damage Airport", placeholder: "Type in here…" },
  { label: "Damage Road", placeholder: "Type in here…" },
  { label: "Damage Industrial Facilities", placeholder: "Type in here…" },
  { label: "Other", placeholder: "Type in here…" },
];
export default function TabsBasic() {
  const [horizontalValue, setHorizontalValue] = React.useState(0);
  const [verticalValue, setVerticalValue] = React.useState(0);
  const [incidentInfo, UpdateInfo] = React.useState(false);
  const [accord, Updateaccord] = React.useState(true);
  const [submit,updateSubmit]=React.useState(false);
  const [saveNext,updateSave]=React.useState(true);
  const handleNext = () => {
    if (verticalValue <= 5 && horizontalValue === 1) {
      setVerticalValue((prev) => prev + 1);
      if (verticalValue === 5) {
        setHorizontalValue((prev) => prev + 1);
        setVerticalValue(0);
      }
    } 
    else if (verticalValue <= 3 && horizontalValue === 2) {
      setVerticalValue((prev) => prev + 1);
      if(verticalValue===3){
        setVerticalValue(0);
        setHorizontalValue(0);
      }
      else if(verticalValue===2){
        updateSubmit(true);
        updateSave(false);
      }
    }
    else if (horizontalValue < 2) {
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

  return (
    <>
      {accord && (
        <AccordionGroup
          variant="outlined"
          transition="0.2s"
          color="success"
          sx={{
            maxWidth: 400,
            borderRadius: "lg",
            mt: "2em",
            [`& .${accordionSummaryClasses.button}:hover`]: {
              bgcolor: "transparent",
            },
            [`& .${accordionDetailsClasses.content}`]: {
              boxShadow: (theme) => `inset 0 1px ${theme.vars.palette.divider}`,
              [`&.${accordionDetailsClasses.expanded}`]: {
                paddingBlock: "0.75rem",
              },
            },
          }}
        >
          <Accordion defaultExpanded>
            <AccordionSummary color="success">
              Committee of Emergency Situation(CoES)
            </AccordionSummary>
            <AccordionDetails variant="plain">
              <Button
                variant="plain"
                color="neutral"
                onClick={() => {
                  UpdateInfo(true);
                  Updateaccord(false);
                }}
              >
                {" "}
                Incident Information
              </Button>
              <Button variant="plain" color="neutral">
                Emergency Alerts
              </Button>
              <Button variant="plain" color="neutral">
                Stockpile Location
              </Button>
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      )}

      {incidentInfo && (
        <>
          <Box sx={{ width: "55%" }}>
            <Box>
              Committee of Emergency Situation(CoES)/Incident Information
            </Box>
              <Tabs aria-label="Basic tabs" value={horizontalValue}  sx={{backgroundColor:'white'}}>
                <TabList sx={{ display: "flex", justifyContent: "center",backgroundColor:'white' }}>
                  <Tab disableIndicator color="success" variant="plain">
                    Main Info
                  </Tab>
                  <Tab disableIndicator color="success" variant="plain">
                    Impact Of People
                  </Tab>
                  <Tab disableIndicator color="success" variant="plain">
                    Infrastructure Impact
                  </Tab>
                </TabList>
                <TabPanel value={0} sx={{backgroundColor:'white' ,width:'60%',alignSelf:'center'}}>
                  <CustomTab>
                    <FormLabel htmlFor="custom-input-title">Title</FormLabel>
                    <Input
                      id="custom-input-title"
                      placeholder="Type in here…"
                      
                    />
                  </CustomTab>
                  <CustomTab>
                    <FormLabel htmlFor="custom-input-start-date">
                      Start Date
                    </FormLabel>
                    <Input
                      type="date"
                      id="custom-input-start-date"
                      placeholder="Type in here…"
                    />
                  </CustomTab>
                  <CustomTab>
                    <FormLabel htmlFor="custom-input-end-date">
                      End Date
                    </FormLabel>
                    <Input
                      type="date"
                      id="custom-input-end-date"
                      placeholder="Type in here…"
                    />
                  </CustomTab>
                  <CustomTab>
                    <FormLabel htmlFor="custom-input-duration">
                      Duration
                    </FormLabel>
                    <Input
                      type="number"
                      id="custom-input-duration"
                      placeholder="Type in here…"
                    />
                  </CustomTab>
                  <CustomTab>
                    <FormLabel htmlFor="custom-input-hazard-type">
                      Type Of Hazard
                    </FormLabel>
                    <Select
                      placeholder="Hazard Drop Down"
                      name="foo"
                      required
                    >
                      <Option value="hazard1">hazard1</Option>
                      <Option value="hazard2">hazard2</Option>
                      <Option value="hazard3">hazard3</Option>
                      <Option value="hazard4">hazard4</Option>
                    </Select>
                  </CustomTab>
                  <CustomTab>
                    <FormLabel htmlFor="custom-input-location">
                      Location
                    </FormLabel>
                    <Input
                      id="custom-input-location"
                      placeholder="Type in here…"
                    />
                  </CustomTab>
                  <CustomTab>
                    <FormLabel htmlFor="custom-input-region">Region</FormLabel>
                    <Input
                      id="custom-input-region"
                      placeholder="Type in here…"
                    />
                  </CustomTab>
                  <CustomTab>
                    <FormLabel htmlFor="custom-input-hazard-level">
                      Hazard Level
                    </FormLabel>
                    <Input
                      type="number"
                      id="custom-input-hazard-level"
                      placeholder="Type in here…"
                    />
                  </CustomTab>
                  <CustomTab>
                    <FormLabel htmlFor="custom-input-economic-loss">
                      Economic Loss (TJS)
                    </FormLabel>
                    <Input
                      type="number"
                      id="custom-input-economic-loss"
                      placeholder="Type in here…"
                    />
                  </CustomTab>
                </TabPanel>
                <TabPanel value={1} sx={{backgroundColor:'white'}}>
                  <Tabs
                    aria-label="Vertical tabs"
                    orientation="vertical"
                    value={verticalValue}
                    sx={{backgroundColor:'white'}}
                  >
                    <TabList>
                      <Tab disableIndicator color="success" variant="plain">
                        Deaths
                      </Tab>
                      <Tab disableIndicator color="success" variant="plain">
                        Missing
                      </Tab>
                      <Tab disableIndicator color="success" variant="plain">
                        Injured
                      </Tab>
                      <Tab disableIndicator color="success" variant="plain">
                        Effected
                      </Tab>
                      <Tab disableIndicator color="success" variant="plain">
                        Relocated
                      </Tab>
                      <Tab disableIndicator color="success" variant="plain">
                        Evacuated
                      </Tab>
                    </TabList>
                    <TabPanel value={0} sx={{backgroundColor:'white'}}>
                      {Deaths.map((field, index) => (
                        <CustomTab key={index}>
                          <FormLabel sx={{width:'15em'}} htmlFor={`custom-input-title-${index}`}>
                            {field.label}
                          </FormLabel>
                          <Input
                            type="number"
                            id={`custom-input-title-${index}`}
                            placeholder={field.placeholder}
                          />
                        </CustomTab>
                      ))}
                    </TabPanel>
                    <TabPanel value={1} sx={{backgroundColor:'white'}}>
                      {Missings.map((field, index) => (
                        <CustomTab key={index}>
                          <FormLabel sx={{width:'15em'}} htmlFor={`custom-input-title-${index}`}>
                            {field.label}
                          </FormLabel>
                          <Input
                            type="number"
                            id={`custom-input-title-${index}`}
                            placeholder={field.placeholder}
                          />
                        </CustomTab>
                      ))}
                    </TabPanel>
                    <TabPanel value={2} sx={{backgroundColor:'white'}}>
                      {Injured.map((field, index) => (
                        <CustomTab key={index}>
                          <FormLabel sx={{width:'15em'}} htmlFor={`custom-input-title-${index}`}>
                            {field.label}
                          </FormLabel>
                          <Input
                            type="number"
                            id={`custom-input-title-${index}`}
                            placeholder={field.placeholder}
                          />
                        </CustomTab>
                      ))}
                    </TabPanel>
                    <TabPanel value={3} sx={{backgroundColor:'white'}}>
                      {Affected.map((field, index) => (
                        <CustomTab key={index}>
                          <FormLabel sx={{width:'15em'}} htmlFor={`custom-input-title-${index}`}>
                            {field.label}
                          </FormLabel>
                          <Input
                            type="number"
                            id={`custom-input-title-${index}`}
                            placeholder={field.placeholder}
                          />
                        </CustomTab>
                      ))}
                    </TabPanel>
                    <TabPanel value={4} sx={{backgroundColor:'white'}}>
                      {Relocated.map((field, index) => (
                        <CustomTab key={index}>
                          <FormLabel sx={{width:'15em'}} htmlFor={`custom-input-title-${index}`}>
                            {field.label}
                          </FormLabel>
                          <Input
                            type="number"
                            id={`custom-input-title-${index}`}
                            placeholder={field.placeholder}
                          />
                        </CustomTab>
                      ))}
                    </TabPanel>
                    <TabPanel value={5} sx={{backgroundColor:'white'}}>
                      {Evacuated.map((field, index) => (
                        <CustomTab key={index}>
                          <FormLabel sx={{width:'15em'}} htmlFor={`custom-input-title-${index}`}>
                            {field.label}
                          </FormLabel>
                          <Input
                            type="number"
                            id={`custom-input-title-${index}`}
                            placeholder={field.placeholder}
                          />
                        </CustomTab>
                      ))}
                    </TabPanel>
                  </Tabs>
                </TabPanel>
                <TabPanel value={2} sx={{backgroundColor:'white'}}>
                  <Tabs
                    aria-label="Vertical tabs"
                    orientation="vertical"
                    value={verticalValue}
                    sx={{ minWidth: 300,backgroundColor:'white'}}
                  >
                    <TabList>
                      <Tab disableIndicator color="success" variant="plain">
                        Damaged Loss Buildings
                      </Tab>
                      <Tab disableIndicator color="success" variant="plain">
                        Other Buildings
                      </Tab>
                      <Tab disableIndicator color="success" variant="plain">
                        Infrasctructure
                      </Tab>
                      <Tab disableIndicator color="success" variant="plain">
                        Agriculture Damages in Crops
                      </Tab>
                    </TabList>
                    <TabPanel value={0} sx={{backgroundColor:'white'}}>
                      {DamagedLossBuildings.map((field, index) => (
                        <CustomTab key={index}>
                          <FormLabel sx={{width:'15em'}} htmlFor={`custom-input-title-${index}`}>
                            {field.label}
                          </FormLabel>
                          <Input
                            type="number"
                            id={`custom-input-title-${index}`}
                            placeholder={field.placeholder}
                          />
                        </CustomTab>
                      ))}
                    </TabPanel>
                    <TabPanel value={1} sx={{backgroundColor:'white'}}>
                      {OtherBuildings.map((field, index) => (
                        <CustomTab key={index}>
                          <FormLabel sx={{width:'15em'}} htmlFor={`custom-input-title-${index}`}>
                            {field.label}
                          </FormLabel>
                          <Input
                            type="numeric"
                            id={`custom-input-title-${index}`}
                            placeholder={field.placeholder}
                          />
                        </CustomTab>
                      ))}
                    </TabPanel>
                    <TabPanel value={2} sx={{backgroundColor:'white'}}>
                      {Infrastructure.map((field, index) => (
                        <CustomTab key={index}>
                          <FormLabel sx={{width:'15em'}} htmlFor={`custom-input-title-${index}`}>
                            {field.label}
                          </FormLabel>
                          <Checkbox label="if yes" />
                        </CustomTab>
                      ))}
                    </TabPanel>
                    <TabPanel value={3} sx={{backgroundColor:'white'}}>
                      <CustomTab>
                        <FormLabel>Affected agriculture land (in ha)</FormLabel>
                        <Input type="number" placeholder="Enter the number"/>
                      </CustomTab>
                      </TabPanel>
                  </Tabs>
                </TabPanel>
              </Tabs>
            
          </Box>
          {(submit && <Button variant="outlined" color='success' onClick={()=>{updateSave(true);updateSubmit(false);}}>Submit</Button>)}
          {(saveNext && <Button variant="outlined" color='success' onClick={handleNext}>Save&Next</Button>)}
        </>

        
      )}
    </>
  );
}
