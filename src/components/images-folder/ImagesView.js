import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui';


class ImagesView extends Component {
    render() {

        let imageListView;
        const { images } = this.props;

        if (images) {
            imageListView = (
                <GridList cols={3}>
                    {images.map(img => (
                        <GridTile>
                            <img src={img.largeImageURL} />
                        </GridTile>
                    ))}
                </GridList>
            )
        } else {
            imageListView = (
                <h1>No Results</h1>
            )
        }

        return (
            <div>
                {imageListView}
            </div>
        )
    }
}

ImagesView.propTypes = {
    images: PropTypes.array.isRequired
}



export default ImagesView;
