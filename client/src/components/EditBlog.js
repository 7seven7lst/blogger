import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import Select from 'react-select';
import { toast } from 'react-toastify';
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

class EditBlog extends Component {
  state = {
    title: '',
    image_url: '',
    content: '',
    category: '',
  }

  componentDidMount() {
    const { match } = this.props;
    const id = parseInt(match.params.id);
    return axios.get(`${API_HOST}/blogs/${id}`)
    .then(result => {
      let blog = result.data;
      console.log("blog is >>>", blog)
      this.setState({
        title: blog.title,
        image_url: blog.image_url,
        content: blog.content,
        category: { label: blog.category, value: blog.category}
      });
    })
    .catch(err => {
      console.log("err is >>>", err);
    })
  }

  handleSubmit = e => {
    const { match } = this.props;
    const id = parseInt(match.params.id);
    e.preventDefault();
    const updatedBlog = {
      title: this.state.title,
      image_url: this.state.image_url,
      content: this.state.content,
      category: this.state.category.value,
    };

    return axios.put(`${API_HOST}/blogs/${id}`, updatedBlog)
    .then(response => {
      console.log("posting new Blog response is>>>", response);
      toast.info("🔔 blog successfully added");
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
              <Label for="exampleTitle">Image Url</Label>
              <Input
                type="text"
                name="imageurl"
                id="exampleImageUrl"
                placeholder="Please enter blog image url"
                value={this.state.image_url}
                onChange={e => this.setState({ image_url: e.target.value})}
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
                value={this.state.content}
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

export default withRouter(EditBlog);