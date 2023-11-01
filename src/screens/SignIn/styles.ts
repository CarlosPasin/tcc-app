import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50
  },
  title: {
    color: theme.colors.blue,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },
  subtitle: {
    color: theme.colors.blue,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64,
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  },
  containerTexts: {
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    marginBottom: 20,
  },
  button: {
      width: '100%',
      height: 56,
      backgroundColor: theme.colors.blue,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center'
  },
  buttonTitle: {
    flex: 1,
    color: theme.colors.w,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: 'center',
  },
});