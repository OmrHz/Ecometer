import React, { useState, useEffect } from "react";
import { Paper, Grid, Typography, Stack } from "@mui/material";
import Drop from "./Drop";

const circleStyle = {
  width: "26px",
  height: "26px",
  borderRadius: "50%",
  backgroundColor: "#003049",
};

const textTitre = {
  fontFamily: "Eudoxus , sans-serif",
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "24px",
};

const textValue = {
  fontFamily: "Eudoxus , sans-serif",
  fontWeight: "700",
  fontSize: "20px",
};
const subTextStyle = {
  fontFamily: "Inter , sans-serif",
  fontWeight: "400",
  fontSize: "16px",
};
const TransportCard = () => {
  const [isDropVisible, setIsDropVisible] = useState(false);
  const [post1, setPost1] = useState({});
  const [post2, setPost2] = useState({});
  const [post3, setPost3] = useState({});
  const [post4, setPost4] = useState({});
  const [post5, setPost5] = useState({});
  const [deplacementList, setDeplacementList] = useState([
    {
      label: "Transport de marchandise amont",
      dialogueOptions: [{ label: "Transport de marchandises", value: 1 }],
      selectedOptions: [],
    },
    {
      label: "Transport de marchandise aval",
      dialogueOptions: [{ label: "Transport de marchandises", value: 2 }],
      selectedOptions: [],
    },
    {
      label: "Déplacements domicile-travail",
      dialogueOptions: [{ label: "Transport de personnes", value: 3 }],
      selectedOptions: [],
    },
    {
      label: "Déplacements des visiteurs et des clients",
      dialogueOptions: [{ label: "Transport de personnes", value: 4 }],
      selectedOptions: [],
    },
    {
      label: "Déplacements professionnels",
      dialogueOptions: [{ label: "Transport de personnes", value: 5 }],
      selectedOptions: [],
    },
  ]);
  const toggleDrop = () => {
    setIsDropVisible(!isDropVisible);
    console.log(isDropVisible);
  };
  const Data = JSON.parse(localStorage.getItem("ClientBilan"));
  const calculateScopeEmissions = () => {
    Data.emissionPosts.map((element) => {
      switch (element.index) {
        case 3.1:
          setPost1({
            total: element.emissions,
            co2a: element.emissions - element.CO2 - element.CH4 - element.N2O,
            cob: element.CO2,
            ch4: element.CH4,
            n2o: element.N2O,
          });
          break;
        case 3.2:
          setPost2({
            total: element.emissions,
            co2a: element.emissions - element.CO2 - element.CH4 - element.N2O,
            cob: element.CO2,
            ch4: element.CH4,
            n2o: element.N2O,
          });

          break;
        case 3.3:
          setPost3({
            total: element.emissions,
            co2a: element.emissions - element.CO2 - element.CH4 - element.N2O,
            cob: element.CO2,
            ch4: element.CH4,
            n2o: element.N2O,
          });
          break;
        case 3.4:
          setPost4({
            total: element.emissions,
            co2a: element.emissions - element.CO2 - element.CH4 - element.N2O,
            cob: element.CO2,
            ch4: element.CH4,
            n2o: element.N2O,
          });
          break;
        case 3.5:
          setPost5({
            total: element.emissions,
            co2a: element.emissions - element.CO2 - element.CH4 - element.N2O,
            cob: element.CO2,
            ch4: element.CH4,
            n2o: element.N2O,
          });
          break;
        default:
          break;
      }
    });
  };

  useEffect(() => {
    calculateScopeEmissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Paper
      elevation={3}
      sx={{
        paddingTop: "25px",
        paddingBottom: "25px",
        paddingLeft: "30px",
        paddingRight: "30px",
        borderRadius: "15px",
        background: "#D9D9D9",
      }}
    >
      <Grid container justifyContent="space-between">
        <Grid item md={6} xs={12}>
          <Grid container>
            <Grid item md={1} xs={2}>
              <div style={circleStyle}></div>
            </Grid>
            <Grid item md={11} xs={10}>
              <Typography style={textTitre}>
                Total Emissions indirectes (Transport)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} xs={12}>
          <Grid container direction={"row-reverse"}>
            <Grid item md={1} xs={2}>
              <Drop onClick={toggleDrop} />
            </Grid>

            <Grid item md={11} xs={10}>
              <Grid justifyContent={"start"} alignContent={"start"}>
                <Typography
                  style={textValue}
                  sx={{
                    textAlign: "right",
                    marginRight: { md: "20px", xs: "10px" },
                  }}
                >
                  {(
                    (post1.total +
                      post2.total +
                      post3.total +
                      post4.total +
                      post5.total) /
                    100
                  ).toFixed(2)}{" "}
                  tCO2e
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        {isDropVisible && (
          <Stack direction="column" spacing={1} marginTop={{ md: "25px" }}>
            {deplacementList.map((item, index) => (
              <React.Fragment key={index}>
                <Typography style={subTextStyle}>{item.label}</Typography>
                <Grid container>
                  <Grid item md={1.8} xs={12}>
                    <Grid container spacing={1}>
                      <Grid item md={12}>
                        <Typography
                          sx={{
                            fontFamily: "Inter ,sans-serif",
                            fontWeight: "400",
                            fontSize: "14px",
                          }}
                        >
                          {" "}
                          CO2a
                        </Typography>
                      </Grid>
                      <Grid item md={12}>
                        <Typography
                          sx={{
                            fontFamily: "Inter ,sans-serif",
                            fontWeight: "700",
                            fontSize: "16px",
                          }}
                        >
                          {item.dialogueOptions[0].value === 1
                            ? (post1.co2a / 100).toFixed(2)
                            : item.dialogueOptions[0].value === 2
                            ? (post2.co2a / 100).toFixed(2)
                            : item.dialogueOptions[0].value === 3
                            ? (post3.co2a / 100).toFixed(2)
                            : item.dialogueOptions[0].value === 4
                            ? (post4.co2a / 100).toFixed(2)
                            : item.dialogueOptions[0].value === 5
                            ? (post5.co2a / 100).toFixed(2)
                            : ""}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={1.8} xs={12}>
                    <Grid container spacing={1}>
                      <Grid item md={12}>
                        <Typography
                          sx={{
                            fontFamily: "Inter ,sans-serif",
                            fontWeight: "400",
                            fontSize: "14px",
                          }}
                        >
                          {" "}
                          CH4
                        </Typography>
                      </Grid>
                      <Grid item md={12}>
                        <Typography
                          sx={{
                            fontFamily: "Inter ,sans-serif",
                            fontWeight: "700",
                            fontSize: "16px",
                          }}
                        >
                          {item.dialogueOptions[0].value === 1
                            ? (post1.ch4 / 100).toFixed(2)
                            : item.dialogueOptions[0].value === 2
                            ? (post2.ch4 / 100).toFixed(2)
                            : item.dialogueOptions[0].value === 3
                            ? (post3.ch4 / 100).toFixed(2)
                            : item.dialogueOptions[0].value === 4
                            ? (post4.ch4 / 100).toFixed(2)
                            : item.dialogueOptions[0].value === 5
                            ? (post5.ch4 / 100).toFixed(2)
                            : ""}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={1.8} xs={12}>
                    <Grid container spacing={1}>
                      <Grid item md={12}>
                        <Typography
                          sx={{
                            fontFamily: "Inter ,sans-serif",
                            fontWeight: "400",
                            fontSize: "14px",
                          }}
                        >
                          {" "}
                          N2O
                        </Typography>
                      </Grid>
                      <Grid item md={12}>
                        <Typography
                          sx={{
                            fontFamily: "Inter ,sans-serif",
                            fontWeight: "700",
                            fontSize: "16px",
                          }}
                        >
                          {item.dialogueOptions[0].value === 1
                            ? (post1.n2o / 100).toFixed(2)
                            : item.dialogueOptions[0].value === 2
                            ? (post2.n2o / 100).toFixed(2)
                            : item.dialogueOptions[0].value === 3
                            ? (post3.n2o / 100).toFixed(2)
                            : item.dialogueOptions[0].value === 4
                            ? (post4.n2o / 100).toFixed(2)
                            : item.dialogueOptions[0].value === 5
                            ? (post5.n2o / 100).toFixed(2)
                            : ""}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={1.8} xs={12}>
                    <Grid container spacing={1}>
                      <Grid item md={12}>
                        <Typography
                          sx={{
                            fontFamily: "Inter ,sans-serif",
                            fontWeight: "400",
                            fontSize: "14px",
                          }}
                        >
                          {" "}
                          CO2b
                        </Typography>
                      </Grid>
                      <Grid item md={12}>
                        <Typography
                          sx={{
                            fontFamily: "Inter ,sans-serif",
                            fontWeight: "700",
                            fontSize: "16px",
                          }}
                        >
                          {item.dialogueOptions[0].value === 1
                            ? (post1.cob / 100).toFixed(2)
                            : item.dialogueOptions[0].value === 2
                            ? (post2.cob / 100).toFixed(2)
                            : item.dialogueOptions[0].value === 3
                            ? (post3.cob / 100).toFixed(2)
                            : item.dialogueOptions[0].value === 4
                            ? (post4.cob / 100).toFixed(2)
                            : item.dialogueOptions[0].value === 5
                            ? (post5.cob / 100).toFixed(2)
                            : ""}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </React.Fragment>
            ))}
          </Stack>
        )}
      </Grid>
    </Paper>
  );
};

export default TransportCard;
