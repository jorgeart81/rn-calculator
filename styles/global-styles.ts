import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
    position: 'relative',
  },

  calculartorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },

  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    fontWeight: '400',
  },

  subResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300',
  },

  row: {
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },

  button: {
    height: 72,
    width: 72,
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },

  buttonText: {
    padding: 10,
    fontSize: 26,
    color: Colors.textPrimary,
    fontWeight: '300',
    fontFamily: 'SpaceMono',
  },
});
