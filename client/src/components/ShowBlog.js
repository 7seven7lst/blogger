import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Select from 'react-select';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, CardColumns, Card, CardHeader, CardBody, CardText } from 'reactstrap';

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

class ShowBlog extends Component {
  state = {
    title: '',
    category: '',
    content: '',
    blogs: []
  }
  startSearch = e => {
    e.preventDefault();
    const query = {
      current_page: 1,
      category: this.state.category ? this.state.category.value : null,
      title_keyword: this.state.title || null,
      content_keyword: this.state.content || null,
    }
    return axios.get(`${API_HOST}/blogs`, {params: query})
    .then(results => {
      console.log("results is >>>", results);
      let blogs = results.data.docs;
      let page = results.data.pages;
      this.setState({blogs: blogs});
    })
    .catch(err => {
      console.log("err is >>>", err);
    })
  }

  render() {
    return (
      <Container fluid className="mt-3">
        <Row>
          <Col xs={12}>
            <Form onSubmit={this.startSearch}>
            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleTitle">Search Title</Label>
                  <Input
                    type="text"
                    name="title"
                    id="exampleTitle"
                    placeholder="Please enter blog title"
                    value={this.state.title}
                    onChange={e => this.setState({ title: e.target.value})}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleContent">Search Content</Label>
                  <Input
                    type="text"
                    name="content"
                    id="exampleContent"
                    placeholder="Please enter blog content"
                    value={this.state.content}
                    onChange={e => this.setState({ content: e.target.value})}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
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
              </Col>
            </Row>
              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12}>
            <CardColumns>
            {_.map(this.state.blogs, blog =>(
              <Card key={blog.id}>
                <CardHeader>{blog.title}</CardHeader>
                <CardBody>
                  <CardText>
                    {blog.content}
                  </CardText>
                </CardBody>
              </Card>
            ))}
            </CardColumns>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ShowBlog;