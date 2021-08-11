import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import axios from "axios";
import { useRouter } from "next/router";

function SignupForm() {
  console.log("뭐가 문제야 세이 썸띵");
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const router = useRouter();

  const { name, email, phone, password } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  function submit() {
    axios
      .post("http://118.67.132.188:8080/users", {
        name: name,
        email: email,
        phone: phone,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          router.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setInputs({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center"></Header>
        <Form size="massive">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="User Full Name"
              name="name"
              onChange={onChange}
              value={name}
            />
            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              placeholder="E-mail address"
              name="email"
              onChange={onChange}
              value={email}
            />
            <Form.Input
              floated="left"
              fluid
              icon="phone"
              iconPosition="left"
              placeholder="Phone number"
              name="phone"
              onChange={onChange}
              value={phone}
            />
            <Button floated="right" color="black">
              Authentication
            </Button>
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              onChange={onChange}
              value={password}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password Assert"
              type="password"
            />
            <Button color="black" fluid size="large" onClick={submit}>
              Sign Up
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have aa account? <a href="/login">Log in</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

export default SignupForm;
