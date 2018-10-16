import React from "react";
import {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

// imageSize is used to statically size <Image/> instances
const windowDims = Dimensions.get("window"),
  itemSize = windowDims.width / 2 - 20;

const styles = StyleSheet.create({
  image: {
    width: itemSize,
    height: itemSize
  }
});

class TouchableImage extends React.Component {
  placeholder = require("./images/placeholder.png");

  onPress = () => {
    var props = this.props,
      onPress = props.onPress;

    onPress && onPress(props.index, props.data);
  };

  render() {
    var props = this.props,
      data = props.data,
      animate = props.animate,
      source;

    // For when we actually have data
    if (data) {
      source = {
        uri: animate
          ? data.images.downsized.url
          : data.images.original_still.url,
        width: itemSize,
        height: itemSize
      };
    }

    return (
      <TouchableOpacity style={props.style} onPress={this.onPress}>
        <Image
          style={styles.image}
          source={source}
          defaultSource={this.placeholder}
        />
      </TouchableOpacity>
    );
  }
}

export default TouchableImage;
