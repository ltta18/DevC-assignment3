import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  topView: {
    flex: 1 / 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerView: {
    flex: 4 / 7,
    width: '95%',
    marginLeft: '2.5%',
    justifyContent: 'center', 
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    borderRightColor: 'black',
    borderRightWidth: 1,
  },
  bottomView: {
    flex: 2 / 7,
    alignItems: 'center',
  },
  name: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  viewImage: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '40%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 32,
    fontWeight: '300',
  },
  button: {
    backgroundColor: '#4d88bf',
    marginVertical: 10,
    width: '50%',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton:{
      fontSize: 32,
      color: 'white',
      fontWeight: '500',
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
  },
  nameText: {
    fontSize: 32,
  },
  vsText: {
    fontSize: 20,
  }
});

export default styles;