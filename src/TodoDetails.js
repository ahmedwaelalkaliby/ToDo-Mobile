import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

const TodoDetails = () => {
  const { navigate, goBack } = useNavigation();
  const { params } = useRoute();

  useEffect(() => {
    console.log(params);
  }, [params]);

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{params.id}</Text>
        <Text>{params.title}</Text>
        <Text>{params.description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default TodoDetails;
