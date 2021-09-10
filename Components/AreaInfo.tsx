import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// @ts-ignore
import spinner from "../assets/Images/Spinner.gif";

interface Props {
  closeBtnAct: Function;
  locationInfo: {
    imgURL: {
      url: string;
    }[];
    name: string;
    country: string;
    city: string;
    disc: string;
  };
}

const AreaInfo: React.FC<Props> = ({ closeBtnAct, locationInfo }) => {
  const [currentImg, setCurrentImg] = useState(0);

  function imgChangeBtn() {
    return (
      <View style={styles.imgChangeWrapper}>
        {locationInfo.imgURL.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={
                currentImg === index
                  ? styles.selectedImgChangeBtn
                  : styles.imgChangeBtn
              }
              onPress={(e) => setCurrentImg(index)}
            ></TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#f1f2f3",
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <Image
          style={styles.locImage}
          source={{
            uri: `${locationInfo.imgURL[currentImg].url}`,
          }}
          loadingIndicatorSource={spinner}
        />
        {imgChangeBtn()}
      </View>
      <View style={locMetaStyles.locMeta}>
        <Text style={locMetaStyles.locName}>{locationInfo.name}</Text>
        <Text style={locMetaStyles.smText}>
          <Text style={locMetaStyles.boldText}>Country:</Text>{" "}
          {locationInfo.country}
        </Text>
        <Text style={locMetaStyles.smText}>
          <Text style={locMetaStyles.boldText}>City:</Text> {locationInfo.city}
        </Text>
        <View style={locMetaStyles.textAreaView}>
          <ScrollView>
            <Text style={locMetaStyles.disc}>{locationInfo.disc}</Text>
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity style={styles.closeBtn} onPress={(e) => closeBtnAct()}>
        <Text style={styles.closeBtnIcon}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    position: "absolute",
    bottom: 35,
    width: "95%",
    backgroundColor: "#34495e",
    borderRadius: 10,
    zIndex: 1,
  },
  locImage: {
    height: "100%",
    width: 150,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  closeBtn: {
    position: "absolute",
    top: 5,
    right: 10,
  },
  closeBtnIcon: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  imgChangeWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 15,
  },
  imgChangeBtn: {
    height: 8,
    width: 8,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginHorizontal: 5,
  },
  selectedImgChangeBtn: {
    height: 8,
    width: 8,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: "#81ecec",
  },
});

const locMetaStyles = StyleSheet.create({
  locMeta: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 18,
  },
  locName: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  smText: {
    color: "#fff",
  },
  boldText: {
    fontWeight: "bold",
  },
  textAreaView: {
    marginVertical: 10,
    height: 80,
  },
  disc: {
    color: "#fff",
  },
});

export default AreaInfo;
