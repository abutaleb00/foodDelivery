import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {featured} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {themeColors} from '../theme';
import * as Icon from 'react-native-feather';
import { useSelector } from 'react-redux';
import { selectResturant } from '../slices/resturantSlice';

export default function DeliveryScreen() {
  const resturent = useSelector(selectResturant)
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: resturent.lat,
          longitude: resturent.lng,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard">
        <Marker
          coordinate={{
            latitude: resturent.lat,
            longitude: resturent.lng,
          }}
          title={resturent.name}
          description={resturent.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      <View className="rounded-t3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arival
            </Text>
            <Text className="text-lg text-gray-700 font-extrabold">
              20-30 Minuties
            </Text>
            <Text className="text-lg text-gray-700 font-semibold">
              Your order is own it's way!
            </Text>
          </View>
          <Image
            className="w-24 h-24"
            source={require('../assets/images/bikeGuy2.gif')}
          />
        </View>
        <View
          style={{backgroundColor: themeColors.bgColor(0.8)}}
          className="p-2 flex-row justify-between items-center rounded-full my-5">
          <View
            className="p-1 rounded-full"
            style={{backgroundColor: 'rgba(255,255,255, 0.4)'}}>
            <Image
              className="h-16 w-16 rounded-full"
              source={require('../assets/images/deliveryGuy.png')}
            />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Raju Ahamed</Text>
            <Text className="font-semibold text-white">Your Rider</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.Phone
                strokeWidth={1}
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              className="bg-white p-2 rounded-full">
              <Icon.X strokeWidth={5} fill="red" stroke="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
