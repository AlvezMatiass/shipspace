import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { ActivityIndicator, View } from "react-native";
import TabNavigator from "./tabs";
import AuthNavigator from "./auth";
import { selectPlaces } from "../db";
import { setUser } from "../store/auth/auth.slice";

function RootNavigator() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    (async () => {
      try {
        const userdata = await selectPlaces();
        if (userdata[0]) {
          const user = userdata[0];
          dispatch(setUser(user));
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user?.localId ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default RootNavigator;
