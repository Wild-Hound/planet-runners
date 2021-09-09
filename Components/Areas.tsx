import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// @ts-ignore
import icon from "../assets/Images/location.png";

interface Props {
  onAreaPress: Function;
  locationNames: string[];
}

const Areas: React.FC<Props> = ({ onAreaPress, locationNames }) => {
  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {locationNames.map((location, index) => {
          return (
            <TouchableOpacity
              style={styles.itemWrapper}
              onPress={(e) => onAreaPress(index)}
            >
              <Image source={icon} style={styles.icon} />
              <Text style={styles.areaName}>{location}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "95%",
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor: "#34495e",
    borderRadius: 10,
    position: "absolute",
    top: 25,
    zIndex: 1,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: "#000",
  },
  scrollView: {
    flexDirection: "row",
  },
  itemWrapper: {
    alignItems: "center",
    height: "100%",
    width: 80,
    padding: 8,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#dfe4ea",
  },
  icon: {
    width: 25,
    height: 25,
  },
  areaName: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default Areas;
