import React, { Component } from 'react';
import { TextField } from 'material-ui';
import axios from 'axios';
import ImagesView from '../images-folder/ImagesView';

class Search extends Component {

    state = {
        searchText: 'cars',
        apiURL: 'https://pixabay.com/api/',
        apiKey: 'paste your key here',
        images: []
    }

    onTextChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            axios.get(`${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo`)
                .then(res => this.setState({ images: res.data.hits }))
                .catch(err => console.log(err));
        });
    };

    render() {
        console.log(this.state.images);
        return (
            <div style={{ textAlign: "center" }}>
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search Images"
                />
                <br></br>
                {this.state.images.length > 0 ? (
                    <ImagesView images={this.state.images} />
                ) : null}
            </div>
        )
    }
}

export default Search
