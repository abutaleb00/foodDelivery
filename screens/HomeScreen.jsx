import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';
import * as Icon from 'react-native-feather';
import React from 'react';
import {themeColors} from '../theme';
import Categories from '../components/categories';
import FeaturedRow from '../components/FeaturedRow';
import { featured } from '../constants';

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* Search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2 mt-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height={25} width={25} stroke="gray" />
          <TextInput placeholder="Reasturents" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-l-2 pl-2 border-gray-300">
            <Icon.MapPin height={20} width={20} stroke="gray" />
            <Text className="text-gray-600">New York, NYC</Text>
          </View>
        </View>
        <View
          style={{backgroundColor: themeColors.bgColor(1)}}
          className="p-3 rounded-full">
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>
      {/* Main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}>
        {/* Category */}
        <Categories />
        {/* Features */}
        <View className="mt-5">
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                resturents={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
