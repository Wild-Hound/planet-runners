import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import Areas from "./Components/Areas";
import landMarks from "./landmarks.json";

MapboxGL.setAccessToken(
  "pk.eyJ1IjoieWFzaW40MDQiLCJhIjoiY2t0YmpjZTdnMDM5ODJvdGRwNHZncWt0ayJ9.orayVUNQxr7W6AQkR6toZw"
);

export default function App() {
  const [locationsData, setlocationsData] = useState(
    landMarks.data.allLandmarks
  );
  const [lonLatList, setLonLatList] = useState([[103.9897593, 1.3602082]]);
  const [locationNames, setLocationNames] = useState<string[]>([]);
  const [currentLoc, setCurrentLoc] = useState(0);

  useEffect(() => {
    // @ts-ignore
    const allCoordinates = [];
    const allLocationNames: string[] = [];

    locationsData.forEach((data) => {
      const tempCoord = [data.location.longitude, data.location.latitude];
      allCoordinates.push(tempCoord);
      allLocationNames.push(data.name);
    });

    // @ts-ignore
    setLonLatList(allCoordinates);
    setLocationNames([...allLocationNames]);
  }, [locationsData]);

  function areaBtnPress(index: number) {
    setCurrentLoc(index);
  }

  function pointSelected() {
    console.log("Point Selected");
  }

  function setAllPoints() {
    const allPoints = lonLatList.map((location, index) => {
      return (
        <MapboxGL.PointAnnotation
          id={`${index}`}
          coordinate={location}
          onSelected={pointSelected}
        />
      );
    });
    return allPoints;
  }

  return (
    <SafeAreaView style={styles.page}>
      <Areas onAreaPress={areaBtnPress} locationNames={locationNames} />
      <View style={styles.container}>
        <MapboxGL.MapView zoomEnabled={true} style={styles.map}>
          <MapboxGL.Camera
            centerCoordinate={lonLatList[currentLoc]}
            zoomLevel={16}
          />
          {setAllPoints()}
        </MapboxGL.MapView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "relative",
  },
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "tomato",
  },
  map: {
    flex: 1,
  },
});
