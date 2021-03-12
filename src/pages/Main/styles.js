import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {Animated} from 'react-native';

export const ShadowCover = styled(LinearGradient)`
  height: 350px;
`;

export const Container = styled.View`
  flex: 1;
  background: #000;
`;

export const Content = styled.ScrollView`
  flex: 1;
  elevation: 3;
`;

export const Details = styled.View`
  flex: 1;
  background-color: #030b13;
  align-items: center;
`;

export const CoverHeader = styled.ImageBackground`
  flex: 1;

  position: absolute;
  height: 100%;
  top: -150px;
  left: 0;
  right: 0;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  width: 300px;
  height: 80px;
  text-align: center;
  font-weight: bold;
  margin-top: -30px;
  text-align-vertical: bottom;
`;

export const Info = styled.Text`
  font-size: 14px;
  color: #a0a3a6;
  text-align: center;
  margin-top: 7px;
  margin-bottom: 5px;
`;

export const PrimaryButton = styled.TouchableOpacity`
  background: #dcc044;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const ButtonPrimaryText = styled.Text`
  font-size: 16px;
  color: #030b13;
  text-align: center;
  font-weight: bold;
`;

export const DetailsContainer = styled.View`
  flex: 1;
  margin-top: 10px;
`;

export const DescriptionTitle = styled.Text`
  font-size: 16px;
  color: #eee;
  text-align: left;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 30px;
  padding: 0 30px;
`;

export const SinopseText = styled.Text`
  font-size: 16px;
  color: #ddd;
  letter-spacing: 0.4px;
  text-align: justify;
  padding: 0 30px;
`;

export const SinopseContainer = styled.View`
  padding: 0 30px;
`;

export const ElencoContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {paddingLeft: 10, paddingRight: 20},
  showsHorizontalScrollIndicator: true,
})``;

export const CardActor = styled.View`
  margin-left: 15px;
  border-radius: 3px;
  margin-bottom: 20px;
  width: 82px;
`;

export const PicActor = styled.Image`
  height: 90px;
  resize-mode: cover;
  border-radius: 3px;
`;
export const NameActor = styled.Text`
  font-weight: bold;
  font-size: 12px;
  margin: 5px 6px;
  color: #fff;
`;

export const AnimatedShadow = styled(Animated.View)`
  flex: 1;
  position: absolute;
  elevation: 10;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150px;
`;

export const ShadowBottom = styled(LinearGradient)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const DetailsButton = styled.TouchableOpacity`
  width: 200px;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const DetailButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const FilterButton = styled.TouchableOpacity`
  width: 101px;
  height: 38px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #030b13;
  position: absolute;
  top: 40px;
  right: 30px;
  border-radius: 3px;
  elevation: 6;
  border: 0.2px solid #4e5459;
`;

export const FilterButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-left: 10px;
`;
