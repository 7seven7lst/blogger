import React, { Component } from 'react';
import FormData from 'form-data';
import axios from 'axios';
import Select from 'react-select';
import Editor from 'tui-editor';
import { toast } from 'react-toastify';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import ToastEditor from './toastEditor';
import ImageUpload from './ImageUploader';

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
    image: [],
    content: '',
    category: '',
  }

  handleSubmit = e => {
    console.log("this.state is >>>", this.state)
    e.preventDefault();
    let form = new FormData();
    const file = Array.from(this.state.image)[0];
    form.append('image', file);

    return fetch(`${API_HOST}/upload-image`, {
      method: 'POST',
      body: form
    })
    .then(res => res.json())
    .then(response =>{
      console.log('response >>>', response);
      let image_url = response.secure_url;
      //let arr = image_url.split("upload");
      //let new_image_url = `${arr[0]}upload/w_1111,h_819,c_scale${arr[1]}`;
      const newBlog = {
        title: this.state.title,
        image_url: image_url,
        content: this.state.content,
        category: this.state.category.value,
      };
      return axios.post(`${API_HOST}/blogs`, newBlog);
    })
    .then(response => {
      console.log("posting new Blog response is>>>", response);
      toast.info("🔔 blog successfully added");
    })
    .catch(err => {
      console.log("err posting new blog is >>>", err);
    });
  }

  updateContent = content => {
    this.setState({content: content});
  }

  updateImage = e => {
    const files = Array.from(e.target.files)
    this.setState({image: files});
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
            <FormGroup>
              <Label for="multi">Image</Label><br />
              <input type='file' id='multi' onChange={this.updateImage} multiple />
            </FormGroup>
            <FormGroup>
              <ToastEditor updateContent={this.updateContent} />
            </FormGroup>
            {/*<Button>Submit</Button>*/}
          </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PostBlog;