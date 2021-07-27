// Sized Sidedrawer
import React from "react";
import { Row, Col, Div, Input, Button, Icon, Text } from "atomize";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { FcBiotech } from "react-icons/fc";
import { authServices } from "../_services";
import { loginSuccess, loginFail } from "../_redux/actions";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }

  render() {
    const { showPassword } = this.state;
    return (
      <>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={({ email, password }) => {
            authServices.login(email, password)
              .then((res) => {
                console.log(res);
                this.props.success(res)
                window.location.href = "/";
              })
              .catch(err => {
                this.props.fail(err.message)
              })
          }}
          validationSchema={LoginSchema}
        >
          {({ values, isValid, dirty, errors }) => {
            return (
              <Div
                textColor="black900"
                minH="80vh"
                w="100vw"
                d="flex"
                flexDir="column"
                justify="center"
                align="center"
                p={{ x: "1rem", y: "4rem" }}
              >
                <FcBiotech size={70} color="#382683" />
                <Text
                  textSize="display1"
                  textWeight="500">Citata <span style={{ color: '#e91e63' }}>Api's</span> Bridge</Text>
                <Form className="form-login">
                  <Row p="0.25rem">
                    <Col size="12">
                      <Field name="email">
                        {({ field, form: { touch, error }, meta }) => (
                          <Input
                            placeholder="Email / Username"
                            name="email"
                            p={{ x: "2.5rem" }}
                            {...field}
                            prefix={
                              <Icon
                                name="UserSolid"
                                size="16px"
                                color="mainblack100"
                                cursor="pointer"
                                pos="absolute"
                                top="50%"
                                left="0.75rem"
                                transform="translateY(-50%)"
                              />
                            }
                          />
                        )}
                      </Field>
                      <small>{errors.email}</small>
                    </Col>
                  </Row>
                  <Row p="0.25rem">
                    <Col size="12">
                      <Field name="password">
                        {({ field, form: { touch, error }, meta }) => (
                          <Input
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            p={{ x: "2.5rem" }}
                            {...field}
                            prefix={
                              <Icon
                                name="Lock"
                                size="16px"
                                color="mainblack100"
                                cursor="pointer"
                                pos="absolute"
                                top="50%"
                                left="0.75rem"
                                transform="translateY(-50%)"
                              />
                            }
                            suffix={
                              <Button
                                pos="absolute"
                                onClick={() => this.setState({ showPassword: !showPassword })}
                                bg="transparent"
                                w="3rem"
                                top="0"
                                right="0"
                                rounded={{ r: "md" }}
                              >
                                <Icon
                                  name={showPassword ? "EyeSolid" : "Eye"}
                                  color={showPassword ? "mainred100" : "maingray400"}
                                  size="16px"
                                />
                              </Button>
                            }
                          />
                        )}
                      </Field>
                      <small>{errors.password}</small>
                    </Col>
                  </Row>
                  <Row p="0.25rem">
                    <Col size="12" justify="flex-end" d="flex">
                      <Button
                        type="submit"
                        suffix={
                          <Icon
                            name="LongRight"
                            size="21px"
                            color="mainblack100"
                            m={{ l: "1rem" }}
                          />
                        }
                        bg="mainyellow100"
                        hoverBg="mainred100"
                        textColor="mainblack100"
                        hoverTextColor="white"
                        disabled={errors | !isValid}
                      >
                        Login
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Div>
            )
          }}
        </Formik>
      </>
    );
  }
}

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  success: (user) => dispatch(loginSuccess(user)),
  fail: (message) => dispatch(loginFail(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);