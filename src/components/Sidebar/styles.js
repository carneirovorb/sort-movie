import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 150px;
  flex: 1;
  elevation: 4;
  background: #030b13;
  width: 320px;
  height: 800px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const ContainerGenres = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 10px;
  height: 200px;
`;

export const ToogleButton = styled.TouchableOpacity`
  margin: 5px;
  height: 38px;
  padding: 10px 20px;
  background-color: #030b13;
  border-radius: 3px;
  elevation: 6;
  border: 0.2px solid #4e5459;
  justify-content: center;
`;
export const TextButton = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 14px;
`;

export const TextTitle = styled.Text`
  color: #fff;
  font-size: 14px;
  margin: 10px 20px;
`;
