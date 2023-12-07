import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import {featured} from '../constants';
import {themeColors} from '../theme';
import * as Icon from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';

export default function CartScreen() {
  const navigation = useNavigation();
  const resturents = featured.restaurants[0];
  return (
    <View className="bg-white flex-1">
      {/* Back ButtonK */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{backgroundColor: themeColors.bgColor(1)}}
          className="absolute z-10 rounded-full shadow p-1 top-5 left-2">
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="font-bold text-center text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{resturents.name}</Text>
        </View>
      </View>
      {/* delivery time */}
      <View
        style={{backgroundColor: themeColors.bgColor(0.2)}}
        className="flex-row px-4 items-center">
        <Image
          source={require('../assets/images/bikeGuy.png')}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4">Delivery in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text style={{color: themeColors.text}} className="font-bold">
            Change
          </Text>
        </TouchableOpacity>
      </View>
      {/* Dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 5}}
        className="bg-white pt-5">
        {resturents.dishes.map((dish, index) => {
          return (
            <View
              key={index}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl shadow-md mx-3 mb-3">
              <Text style={{color: themeColors.text}} className="font-bold">
                2 *
              </Text>
              <Image className="w-14 h-14 rounded-full" source={dish.image} />
              <Text className="flex-1 font-bold text-gray-70">{dish.name}</Text>
              <Text className="font-semibold text-base">${dish.price}</Text>
              <TouchableOpacity
                style={{backgroundColor: themeColors.bgColor(1)}}
                className="p-1 rounded-full">
                <Icon.Minus
                  strokeWidth={2}
                  width={20}
                  height={20}
                  stroke="white"
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* Total */}
      <View
        style={{backgroundColor: themeColors.bgColor(0.2)}}
        className="p-6 px-8 rounded-t-3xl space-y-4">
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">$20</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">$2</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold" font-extrabold>
            $22
          </Text>
        </View>
        <View>
          <TouchableOpacity
          onPress={()=> navigation.navigate("OrderPreparing")}
            style={{backgroundColor: themeColors.bgColor(1)}}
            className="p-3 rounded-full">
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
