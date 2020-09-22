//@flow
import React from 'react';
import { Image, View, ScrollView, TouchableOpacity } from 'react-native';

import { BackButton, LikeButton, DownloadButton } from 'components/Button';
import { Text } from 'components/Text';
import ScreenLayout from 'components/ScreenLayout';

import { PlayerCard } from 'components/PlayerCard';

import styles from './styles';

type Props = {};

const renderPlayersCard = (playerCollections) => {
  return (
    <>
      {playerCollections.map((item, index) => (
        <>
          <PlayerCard
            key={item.title}
            title={item.title}
            length={item.length}
          />
          {index !== playerCollections.length - 1 && (
            <View style={styles.playerDividerStyle} />
          )}
        </>
      ))}
    </>
  );
};

const CourseScreen = ({
  card,
  activeTab,
  setActiveTab,
  navigation,
  ...props
}: Props) => {
  return (
    <ScreenLayout>
      <Image
        source={card.cover}
        style={styles.imageCoverStyle}
        resizeMode="cover"
      />

      <View style={styles.buttonsContainerStyle}>
        <BackButton navigation={navigation} />
        <View style={{ flexDirection: 'row' }}>
          <LikeButton style={styles.likeButtonStyle} />
          <DownloadButton />
        </View>
      </View>

      <View style={styles.screenLayoutContainerStyle}>
        <View style={styles.headerContainerStyle}>
          <Text size="sz34" weight="heavy" style={styles.headerTitleStyle}>
            {card.title}
          </Text>
          <Text
            size="sz14"
            weight="medium"
            color="gray"
            transform="uppercase"
            style={styles.headerTypeStyle}
          >
            {card.type}
          </Text>
          <Text size="sz16" weight="light" color="gray">
            {card.description}
          </Text>
        </View>

        <View style={styles.infoWrapperStyle}>
          <View
            style={[styles.infoContainerStyle, styles.spaceBetweenInfoStyle]}
          >
            <Image
              source={require('assets/images/Icons/Like.png')}
              style={styles.iconStyle}
              resizeMode="contain"
            />
            <Text size="sz14" weight="medium" color="gray">
              {card.favoritesCount} Favorites
            </Text>
          </View>
          <View style={styles.infoContainerStyle}>
            <Image
              source={require('assets/images/Icons/Listening.png')}
              style={styles.iconStyle}
              resizeMode="contain"
            />
            <Text size="sz14" weight="medium" color="gray">
              {card.listeningCount} Listening
            </Text>
          </View>
        </View>

        <View style={styles.assistantContainerStyle}>
          <Text size="sz20" weight="heavy">
            Pick an Assistant
          </Text>
        </View>

        <View>
          <View style={styles.tabHeaderContainerStyle}>
            <TouchableOpacity
              style={[
                activeTab === 0 && styles.tabHeaderButtonActiveStyle,
                styles.tabHeaderSpaceStyle,
              ]}
              onPress={() => setActiveTab(0)}
            >
              <Text
                size="sz16"
                weight="medium"
                color={activeTab === 0 ? 'accent' : 'gray'}
                transform="uppercase"
                style={activeTab === 0 && styles.tabHeaderTitleActiveStyle}
              >
                male voice
              </Text>
              {activeTab === 0 && (
                <View style={styles.tabHeaderBorderBottomStyle} />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={activeTab === 1 && styles.tabHeaderButtonActiveStyle}
              onPress={() => setActiveTab(1)}
            >
              <Text
                size="sz16"
                weight="medium"
                color={activeTab === 1 ? 'accent' : 'gray'}
                transform="uppercase"
                style={activeTab === 1 && styles.tabHeaderTitleActiveStyle}
              >
                female voice
              </Text>
              {activeTab === 1 && (
                <View style={styles.tabHeaderBorderBottomStyle} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.dividerStyle} />

          <ScrollView style={styles.tabScrollViewContainerStyle}>
            {renderPlayersCard(
              card[activeTab === 0 ? 'maleVoice' : 'femaleVoice']
            )}
          </ScrollView>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default CourseScreen;
