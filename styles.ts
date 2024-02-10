import {StyleSheet} from 'react-native';

export const colors = {
  red: 'red',
  catalinaBlue: '#153075',
  cyanCobaltBlue: '#2b4ba0',
  brightYellow: '#f9b024',
  sunglow: '#ffc83a',
  chineseSilver: '#c5cdd2',
  brightGray: '#e7ecf0',
  ghostWhite: '#f8f9fb',
  white: '#fff',
  darkGunmetal: '#1b262e',
};

export const styles = StyleSheet.create({
  h1_bold: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.darkGunmetal,
  },
  h1_semi_bold: {
    fontSize: 30,
    fontWeight: '600',
    color: colors.darkGunmetal,
  },
  h1_medium: {
    fontSize: 30,
    fontWeight: '500',
    color: colors.darkGunmetal,
  },
  h1_regular: {
    fontSize: 30,
    fontWeight: '400',
    color: colors.darkGunmetal,
  },
  h2_bold: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.darkGunmetal,
  },
  h2_semi_bold: {
    fontSize: 26,
    fontWeight: '600',
    color: colors.darkGunmetal,
  },
  h2_medium: {
    fontSize: 26,
    fontWeight: '500',
    color: colors.darkGunmetal,
  },
  h2_regular: {
    fontSize: 26,
    fontWeight: '400',
    color: colors.darkGunmetal,
  },
  h3_bold: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkGunmetal,
  },
  h3_semi_bold: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.darkGunmetal,
  },
  h3_medium: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.darkGunmetal,
  },
  h3_regular: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.darkGunmetal,
  },
  h4_bold: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darkGunmetal,
  },
  h4_semi_bold: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.darkGunmetal,
  },
  h4_medium: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.darkGunmetal,
  },
  h4_regular: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.darkGunmetal,
  },
  b1_semi_bold: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.darkGunmetal,
  },
  b1_medium: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.darkGunmetal,
  },
  b1_regular: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.darkGunmetal,
  },
  b2_semi_bold: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.darkGunmetal,
  },
  b2_medium: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.darkGunmetal,
  },
  b2_regular: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.darkGunmetal,
  },
  label_medium: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.darkGunmetal,
  },
  label_regular: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.darkGunmetal,
  },
  button1: {
    fontSize: 14,
    borderRadius: 20,
    borderColor: colors.catalinaBlue,
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 25,
  },
  button2: {
    fontSize: 12,
    borderRadius: 20,
    backgroundColor: colors.catalinaBlue,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 25,
  },
  roundedButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.ghostWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  promoCard: {
    backgroundColor: colors.brightYellow,
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    width: 200,
  },
  productCard: {
    backgroundColor: colors.ghostWhite,
    borderRadius: 10,
    padding: 20,
    width: 170,
  },
  cards: {
    justifyContent: 'space-between',
  },
  cardThumbnail: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  productImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    backgroundColor: colors.ghostWhite,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.brightGray,
    margin: 5,
  },
  indicatorActive: {
    backgroundColor: colors.sunglow,
  },
  wishlistButtonRight: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  wishlistButtonLeft: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
  },
  zeroPadding: {
    padding: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 20,
  },
  homeHeader: {
    backgroundColor: colors.cyanCobaltBlue,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  columnContainer: {
    flexDirection: 'column',
  },
  textPrimary: {
    color: colors.catalinaBlue,
    alignSelf: 'center',
  },
  textSecondary: {
    color: colors.ghostWhite,
    alignSelf: 'center',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  textRounded: {
    borderRadius: 15,
    backgroundColor: colors.catalinaBlue,
    color: colors.ghostWhite,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  quantityControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 80,
  },
  badge: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: colors.brightYellow,
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  itemDetails: {
    flex: 1,
  },
  summary: {
    padding: 16,
    backgroundColor: colors.ghostWhite,
    borderRadius: 30,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 6,
  },
  cartHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  marginHorizontal: {
    marginHorizontal: 24,
  },
  searchBar: {
    backgroundColor: colors.catalinaBlue,
    marginVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
