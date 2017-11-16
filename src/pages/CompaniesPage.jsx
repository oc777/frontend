import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Text from '../elements/Text';
import Modal from '../components/Modal';
import PageTitle from '../elements/PageTitle';
import List from '../components/List';
import SubmitButton from '../components/SubmitButton';


class CompaniesPage extends Component {
  constructor(props) {
    super(props);
    this.url = 'https://jsonplaceholder.typicode.com/users'; // TODO: change to the actual url
    this.state = { requestFailed: false };
  }

  componentDidMount() {
    fetch(this.url)
      .then((response) => {
        if (!response.ok) {
          throw Error('Request failed');
        }
        return response.json();
      })
      .then((json) => {
        this.setState({ data: json });
      }, () => {
        this.setState({ requestFailed: true });
      });
  }

  render() {
    if (this.state.requestFailed) {
      return (
        <Modal>
          <PageTitle>Companies</PageTitle>
          <Text>Bla bla bla</Text>
          <Link to="/register">
            <SubmitButton>Create New Company</SubmitButton>
          </Link>
          <p>Failed!</p>
        </Modal>
      );
    }
    if (!this.state.data) {
      return (
        <Modal>
          <PageTitle>Companies</PageTitle>
          <Text>Bla bla bla</Text>
          <Link to="/register">
            <SubmitButton>Create New Company</SubmitButton>
          </Link>
          <p>Loading...</p>
        </Modal>
      );
    }
    return (
      <Modal>
        <PageTitle>Companies</PageTitle>
        <Text>Bla bla bla</Text>
        <Link to="/register">
          <SubmitButton>Create New Company</SubmitButton>
        </Link>
        <List list={this.state.data} />
      </Modal>
    );
  }
}

export default CompaniesPage;