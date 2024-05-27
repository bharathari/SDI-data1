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
  Option,
  Select,
  Stack,
  styled,
} from "@mui/joy";
import { useForm } from 'react-hook-form';
import { Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';

interface GeologyFormInputs {
  hazardZone: {
    locationLatitude: number | null;
    locationLongitude: number | null;
    dateOfIdentification: string;
    riskAssessment: string;
    mitigationMeasures: string;
  };
}


const geoDefaultValues: GeologyFormInputs = {
  hazardZone: {
    locationLatitude: null,
    locationLongitude: null,
    dateOfIdentification: '',
    riskAssessment: '',
    mitigationMeasures: ''
  }
};

// Define validation schema using Yup
const validationSchema: Yup.ObjectSchema<GeologyFormInputs> = Yup.object().shape({
  hazardZone: Yup.object().shape({
    locationLatitude: Yup.number().nullable().required("Latitude is required"),
    locationLongitude: Yup.number().nullable().required("Longitude is required"),
    dateOfIdentification: Yup.string().required("Date of Identification is required"),
    riskAssessment: Yup.string().required("Risk Assessment is required"),
    mitigationMeasures: Yup.string().required("Mitigation Measures are required")
  })
});



export default function TabsBasic2() {
  const [horizontalValue, setHorizontalValue] = React.useState<number>(0);
  const [submit, updateSubmit] = React.useState(true);

  const { register, handleSubmit, formState: { errors } } = useForm<GeologyFormInputs>({
    defaultValues: geoDefaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: GeologyFormInputs) => {
    console.log(data);
    updateSubmit(true);
  };

  const CustomTabs = styled(Tab)({
    fontWeight: 'bold',
    '&.Mui-selected': {
      color: '#458844ba',
    },
  });

  const CustomTab = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    "& .MuiFormLabel-root": {
      marginRight: theme.spacing(2),
      minWidth: "150px",
    },
    "& .MuiInput-root": {
      flexGrow: 1,
    },
  }));

  return (
    <>
      <Box sx={{ width: "55%" }}>
        <Typography sx={{ fontWeight: '700', mb: '1%', ml: '38%', mt: '2%' }}>
          Main Department Of Geology
        </Typography>
        <Tabs
          aria-label="Basic tabs"
          value={horizontalValue}
          sx={{ backgroundColor: "white" }}
          onChange={(event, newValue) => {
            if (typeof newValue === 'number') {
              setHorizontalValue(newValue);
            }
          }}
        >
          <TabList
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <CustomTabs disableIndicator color="success" variant="plain">
              Hazard Zone
            </CustomTabs>
          </TabList>
          <TabPanel
            value={0}
            sx={{
              backgroundColor: "white",
              width: "60%",
              alignSelf: "center",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack>
                <CustomTab>
                  <FormLabel htmlFor="location">Location</FormLabel>
                  <Box sx={{ display: 'flex' }}>
                    <Input
                      sx={{ mr: 4 }}
                      
                      placeholder="Latitude"
                      {...register('hazardZone.locationLatitude')}
                    />
                    {errors.hazardZone?.locationLatitude && (
                      <Typography color="error" sx={{ ml: 2 }}>
                        {errors.hazardZone.locationLatitude.message}
                      </Typography>
                    )}
                    <Input
                     
                      placeholder="Longitude"
                      {...register('hazardZone.locationLongitude')}
                    />
                    {errors.hazardZone?.locationLongitude && (
                      <Typography color="error" sx={{ ml: 2 }}>
                        {errors.hazardZone.locationLongitude.message}
                      </Typography>
                    )}
                  </Box>
                </CustomTab>
                {/* <CustomTab>
                <FormLabel htmlFor="custom-type-of-Hazard">
                  Type Of Hazard
                </FormLabel>
                <Select
                  placeholder="Type of Hazard"
                  {...register('hazardZone.typeOfHazard')}
                  required
                >
                  <Option value="Hazard1">Hazard1</Option>
                  <Option value="Hazard2">Hazard2</Option>
                  <Option value="Hazard3">Hazard3</Option>
                  <Option value="Hazard4">Hazard4</Option>
                </Select>
              </CustomTab> */}
                <CustomTab>
                  <FormLabel htmlFor="custom-date-of-identification">
                    Date Of Identification
                  </FormLabel>
                  <Input
                    type="date"
                    {...register('hazardZone.dateOfIdentification')}
                  />
                  {errors.hazardZone?.dateOfIdentification && (
                    <Typography color="error">
                      {errors.hazardZone.dateOfIdentification.message}
                    </Typography>
                  )}
                </CustomTab>
                <CustomTab>
                  <FormLabel htmlFor="custom-risk-assessment">
                    Risk Assessment
                  </FormLabel>
                  <Input
                    placeholder="Type in here…"
                    {...register('hazardZone.riskAssessment')}
                  />
                  {errors.hazardZone?.riskAssessment && (
                    <Typography color="error">
                      {errors.hazardZone.riskAssessment.message}
                    </Typography>
                  )}
                </CustomTab>
                <CustomTab>
                  <FormLabel htmlFor="custom-mitigation-measures">
                    Mitigation Measures
                  </FormLabel>
                  <Input
                    placeholder="Type in here…"
                    {...register('hazardZone.mitigationMeasures')}
                  />
                  {errors.hazardZone?.mitigationMeasures && (
                    <Typography color="error">
                      {errors.hazardZone.mitigationMeasures.message}
                    </Typography>
                  )}
                </CustomTab>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  {submit && (
                    <Button variant="outlined" color="success" type="submit">
                      Submit
                    </Button>
                  )}
                </Box>
              </Stack>
            </form>
          </TabPanel>
        </Tabs>
      </Box>
    </>
  );
}