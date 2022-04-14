import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { createTheme, TextField, ThemeProvider } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { AtomInput } from "../utils/ui/input/AtomInput";
import MenuItem from "@mui/material/MenuItem";
import { blueGrey } from "@mui/material/colors";
import { toast } from "react-toastify";
import ToastMessage from "./Toasts";
import { AtomTextInput } from "../utils/ui/input/AtomTextInput";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const currencies = [
  {
    value: 'true',
    label: 'Agrotis 1',
  },
  {
    value: 'false',
    label: 'Agrotis 2',
  },
  {
    value: 'false',
    label: 'Agrotis 3',
  },
  {
    value: 'false',
    label: 'Agrotis 4',
  },
];

const Administrador = () => {
  const SCHEMA_ADM_INITIAL_VALUES = {
    name: "",
    propriedade: "",
    // dataInicial: "",
    // dataFinal: "",
    laboratorio: "",
    observacoes: "",
  };

  const [currency, setCurrency] = React.useState('EUR');

  // const handleChange = (event: any) => {
  //   setCurrency(event.target.value);
  // };

  const novoadm = async (values: any) => {
    // try {
    //   const resp = await CreateAdmin({ ...values });
    //   if (resp.error) {
    //     let errorStr = "";
    //     if (resp.error[0].message.includes("Email")) {
    //       errorStr = "E-mail já cadastrado.";
    //     }
    //     if (resp.error[0].message.includes("name")) {
    //       errorStr = "Nome já cadastrado.";
    //     }
    //     if (resp.error[0].message.includes("cpf")) {
    //       errorStr = "CPF já cadastrado.";
    //     }
    //     if (resp.error[0].message.includes("phone")) {
    //       errorStr = "Celular já cadastrado.";
    //     }
    //     toast.error(<ToastMessage title="Erro" msg={errorStr} />, {
    //       position: "bottom-center",
    //       autoClose: 50000,
    //       hideProgressBar: true,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
    //     throw new Error("error");
    //   } else {
    setEditting("");
    setadmform(SCHEMA_ADM_INITIAL_VALUES);
    toast.success(
      <ToastMessage
        title="Sucesso"
        msg={"O administrador foi cadastrado com sucesso."}
      />,
      {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  }

  const [age, setAge] = React.useState("");
  const theme = createTheme({
    palette: {
      primary: blueGrey,
    },
  });

  const SCHEMA_ADM = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório"),
    // dataInicial: Yup.string().required("Campo obrigatório"),
    // dataFinal: Yup.string().required("Campo obrigatório"),
    propriedade: Yup.boolean().required("Campo obrigatório"),
    laboratorio: Yup.string().required("Campo obrigatório"),
    observacoes: Yup.string().required("Campo obrigatório"),
  });
  const [admform, setadmform] = useState(SCHEMA_ADM_INITIAL_VALUES);
  const [isAdding, setAdding] = useState(true);
  const [valueFin, setValueFin] = useState<Date | null>(new Date());
  const [valueInit, setValueInit] = useState<Date | null>(new Date());
  const [isEditting, setEditting] = useState("");
  const rowEvents = {
    onClick: (e: any, row: any, rowIndex: any) => {
      console.log(row);
      setEditting(row.id);
      setadmform(
        {
          name: row.name,
          // dataFinal: row.dataFinal,
          // dataInicial: row.dataInicial,
          propriedade: row.propriedade,
          laboratorio: row.laboratorio,
          observacoes: row.observacoes
        });
    },
  };
  useEffect(() => {
    console.log(valueFin)
    console.log(valueInit)
  }, [SCHEMA_ADM_INITIAL_VALUES]);

  return (
    <>
      <br />
      <Card style={{ marginLeft: "40px", marginRight: "40px", zIndex: 1, backgroundColor: 'FFFF' }}>
        <Formik
          initialValues={admform}
          validationSchema={SCHEMA_ADM}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const newvalues = {
                ...values,
                isActive: values.propriedade === "true" ? true : false,
              };
              console.log("===>>>", newvalues);
              if (isAdding) {
                novoadm(newvalues);
              } else {
                //
              }
            } catch (e) {
              setSubmitting(false);
            }
          }}
        >
          {({
            errors,
            handleChange,
            submitForm,
            touched,
            isSubmitting,
            handleBlur,
            values,
          }) => (
            <>
              <Card className="row" style={{ padding: 20, marginLeft: '0px', marginRight: '0px', backgroundColor: '#097969' }}>
                <div className="col text-start d-flex align-items-center">
                  <h4
                    style={{ fontSize: 18, color: "white", paddingTop: 25 }}
                    className="text-uppercase"
                  >
                    Test Front End
                  </h4>
                </div>
                <div className="col text-end">
                  <div>
                    <Button
                      disabled={isSubmitting}
                      onClick={() => {
                        submitForm();
                      }}
                      style={{
                        // borderRadius: 5,
                        marginTop: -60,
                        backgroundColor: "green",
                        color: "white",
                        padding: "12px 0px",
                        width: "100px",
                      }}
                    >
                      <h5
                        style={{
                          margin: 0,
                          fontWeight: "bold",
                          fontSize: "16px",
                        }}
                      >
                        Salvar
                      </h5>
                    </Button>
                  </div>
                </div>
              </Card>
              <div className="row" style={{ padding: "30px", backgroundColor: 'FFF' }}>
                <div className="col d-flex flex-column text-start">
                  <AtomInput
                    icon={true}
                    label="Nome *"
                    placeholder="Nome *"
                    width="100%"
                    onChange={handleChange("name")}
                    value={values.name}
                    errors={errors.name}
                    touched={touched.name}
                    onBlur={handleBlur("name")}
                  />
                  <ThemeProvider theme={theme}>
                    <TextField
                      style={{ width: "100%", textAlign: "start" }}
                      variant="standard"
                      name="propriedade"
                      id="propriedade"
                      select
                      onBlur={handleBlur("propriedade")}
                      label="Propriedade *"
                      value={values.propriedade}
                      onChange={handleChange("propriedade")}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    {errors.propriedade && touched.propriedade && (
                      <p style={{ color: "red" }}>{errors.propriedade}</p>
                    )}
                    {(!errors.propriedade || !touched.propriedade) && (
                      <p style={{ color: "transparent" }}>_</p>
                    )}
                  </ThemeProvider>

                </div>
                <div className="col d-flex flex-column text-start">
                  <ThemeProvider theme={theme}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Data Inicial *"
                        value={valueInit}
                        onChange={(newValue) => {
                          setValueInit(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </ThemeProvider>
                  <ThemeProvider theme={theme}>
                    <TextField
                      style={{ width: "100%", marginTop: 35, textAlign: "start" }}
                      variant="standard"
                      name="laboratorio"
                      id="laboratorio"
                      select
                      onBlur={handleBlur("laboratorio")}
                      label="Laboratorio *"
                      value={values.laboratorio}
                      onChange={handleChange("laboratorio")}
                    >
                      <MenuItem key={1} value={"true"}>
                        Agro Skynet
                      </MenuItem>
                      <MenuItem key={2} value={"false"}>
                        Umbrella Agro
                      </MenuItem>
                      <MenuItem key={3} value={"false"}>
                        Osborn Agro
                      </MenuItem>
                      <MenuItem key={4} value={"false"}>
                        Skyrim Agro
                      </MenuItem>
                      <MenuItem key={4} value={"false"}>
                        Agro Brasil
                      </MenuItem>
                    </TextField>
                    {errors.laboratorio && touched.laboratorio && (
                      <p style={{ color: "red" }}>{errors.laboratorio}</p>
                    )}
                    {(!errors.laboratorio || !touched.laboratorio) && (
                      <p style={{ color: "transparent" }}>_</p>
                    )}
                  </ThemeProvider>
                </div>
                <div className="col d-flex flex-column text-start">
                  <ThemeProvider theme={theme}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Data Final *"
                        value={valueFin}
                        onChange={(newValue) => {
                          setValueFin(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </ThemeProvider>
                </div>
                <div className="d-flex flex-column">

                </div>
                <div className="d-flex flex-column text-start"> {/* col d-flex flex-column */}
                  <AtomTextInput
                    icon={false}
                    placeholder={"Observações *"}
                    label="Observações *"
                    width={"100%"}
                    rows={8}
                    onBlur={handleBlur("observacoes")}
                    value={values.observacoes}
                    onChange={handleChange("observacoes")}
                  />
                  {errors.observacoes && touched.observacoes && (
                    <p style={{ color: "red" }}>{errors.observacoes}</p>
                  )}
                  {(!errors.observacoes || !touched.observacoes) && (
                    <p style={{ color: "transparent" }}>_</p>
                  )}
                </div>

              </div>
            </>
          )}
        </Formik>
      </Card>
      <div  >
      </div>
    </>
  )
}

export default Administrador;
function alertToast(arg0: { name: any; dataFinal: any; dataInicial: any; propriedade: any; laboratorio: any; observacoes: any; }) {
  throw new Error("Function not implemented.");
}

