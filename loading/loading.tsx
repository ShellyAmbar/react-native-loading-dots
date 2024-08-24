import React, {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';
import ILoadingDotsProps from './interfaces';
import styles from './loading.styles';

const Loading = ({
  dotCount = 3,
  dotSize = 10,
  dotSpacing = 8,
  duration = 300,
  colors = ['#4dabf7', '#3bc9db', '#38d9a9', '#69db7c'],
  dotStyle,
}: ILoadingDotsProps) => {
  const animations = useRef(
    [...Array(dotCount)].map(() => new Animated.Value(0)),
  ).current;

  useEffect(() => {
    const animate = () => {
      animations.forEach((animation, index) => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(animation, {
              toValue: 1,
              duration,
              delay: index * duration,
              useNativeDriver: true,
            }),
            Animated.timing(animation, {
              toValue: 0,
              duration,

              useNativeDriver: true,
            }),
          ]),
        ).start();
      });
    };

    animate();
  }, [animations, duration]);

  return (
    <View
      style={[styles.container, {width: dotCount * (dotSize + dotSpacing)}]}>
      {animations.map((animation, index) => (
        <Animated.View
          key={index}
          style={[
            styles.dot,

            {
              width: dotSize,
              height: dotSize,
              marginHorizontal: dotSpacing / 2,
              opacity: animation,
              backgroundColor: colors[index] !== null ? colors[index] : 'black',
            },
            {...dotStyle},
          ]}
        />
      ))}
    </View>
  );
};

export default Loading;
