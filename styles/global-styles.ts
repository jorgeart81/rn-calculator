import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
    position: 'relative',
  },

  calculartorContainer: {
    flex: 4,
    justifyContent: 'flex-end',
    // paddingBottom: 20,
  },

  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    fontWeight: '400',
    textAlign: 'right',
  },

  subResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },

  button: {
    alignItems: 'center',
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 8,
  },

  buttonText: {
    color: Colors.textPrimary,
    fontFamily: 'SpaceMono',
    fontSize: 26,
    fontWeight: '300',
    padding: 10,
  },
});
