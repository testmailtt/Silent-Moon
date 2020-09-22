//@flow
import React from 'react';
import { ScrollView, View } from 'react-native';

import { Text } from 'components/Text';
import { ScreenLayoutScroll } from 'components/ScreenLayout';
import { FilterButton } from 'components/Button';
import { CardMusic, CardMeditate } from 'components/Card';

import styles from './styles';

type Props = {};

let cardCurrentIndex = 0;

const MeditateScreen = ({
  filters,
  filterActive,
  setActiveFilter,
  musicCard,
  cards,
  navigation,
  route,
  ...props
}: Props) => {
  const renderCards = (card, index) => {
    cardCurrentIndex = index % 4 === 0 ? 0 : cardCurrentIndex;
    const displayFlag = cardCurrentIndex % 1.5 === 0;

    cardCurrentIndex++;
    return (
      <CardMeditate
        key={card.title}
        card={card}
        isLong={displayFlag}
        style={[
          cardCurrentIndex - 1 !== 0 && displayFlag && styles.viewBalanceStyle,
        ]}
      />
    );
  };
  return (
    <ScreenLayoutScroll style={styles.scrollViewContainerStyle}>
      <Text
        size="sz28"
        weight="heavy"
        align="center"
        style={styles.headerTitleStyle}
      >
        Meditate
      </Text>
      <Text
        size="sz16"
        weight="light"
        color="gray"
        align="center"
        style={styles.headerSubTitleStyle}
      >
        we can learn how to recognize when our minds are doing their normal
        everyday acrobatics.
      </Text>
      <ScrollView horizontal style={styles.horizontalScrollViewContainerStyle}>
        {filters.map((item, index) => (
          <FilterButton
            title={item.title}
            icon={item.icon}
            isActive={index === filterActive}
            key={item.title}
            style={index !== filters.length - 1 && styles.filterSpaceStyle}
            onPress={() => setActiveFilter(index)}
          />
        ))}
      </ScrollView>

      <CardMusic card={musicCard} style={styles.cardMusicContainerStyle} />

      <View style={styles.cardMeditateContainerStyle}>
        {cards.map((item, index) => renderCards(item, index))}
      </View>
    </ScreenLayoutScroll>
  );
};

export default MeditateScreen;
