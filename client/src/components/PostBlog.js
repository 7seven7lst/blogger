import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import API_HOST from '../config';
const categories = [
  {
    value: "Insurance",
    label: "Insurance",
  },
  {
    value: "Finance",
    label: "Finance",
  },
  {
    value: "Mortgage",
    label: "Mortgage",
  },
  {
    value: "Loan",
    label: "Loan",
  },
  {
    value: "Investment",
    label: "Investment",
  },
  {
    value: "Learning",
    label: "Learning",
  },
];

class PostBlog extends Component {
  state = {
    title: '',
    content: '',
    category: '',
  }

  handleSubmit = e => {
    e.preventDefault();
    const newBlog = {
      title: this.state.title,
      content: this.state.content,
      category: this.state.category.value,
    };
    console.log("new Blog is>>>", newBlog);

    return axios.post(`${API_HOST}/blogs`, newBlog)
    .then(response => {
      console.log("posting new Blog response is>>>", response);
    })
    .catch(err => {
      console.log("err posting new blog is >>>", err);
    });
  }
  render() {
    return (
      <Container fluid className="mt-3">
        <Row>
          <Col xs={12}>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="exampleTitle">Title</Label>
              <Input
                type="text"
                name="title"
                id="exampleTitle"
                placeholder="Please enter blog title"
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value})}
               />
            </FormGroup>
            <FormGroup>
              <Label for="exampleContent">Content</Label>
              <Input
                style={{height: 400}}
                type="textarea"
                name="password"
                id="exampleContent"
                placeholder="Please enter blog content"
                value={this.state.conent}
                onChange={e => this.setState({ content: e.target.value})}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Category</Label>
              <Select
                name="select"
                id="exampleSelect"
                value={this.state.category}
                onChange={selectedOption => this.setState({category: selectedOption})}
                options={categories}
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PostBlog;