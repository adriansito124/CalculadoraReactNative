import React from "react";
import { View, StyleSheet } from "react-native";

export default ({ children }) => ( 
  //<div class="d-flex flex-row mb-3">
  <View style={styles.hori}>
  {
  /* <div class="p-2">Flex item 1</div>
     <div class="p-2">Flex item 2</div>
     <div class="p-2">Flex item 3</div> 
  */  
  }
    {children} 
  </View>
  //</div>
);

const styles = StyleSheet.create({
    hori: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
      },
})
  
