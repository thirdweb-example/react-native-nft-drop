import {
  useContract,
  useNFT,
  Web3Button,
} from '@thirdweb-dev/react-native';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Drop = () => {
  const { contract } = useContract(
    '0xf92F6351022CA458EA5d0FA8854A014B50aE6264',
    'edition-drop',
  );
  const { data: nfts } = useNFT(contract, 0);

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.view}>
        <Image
          source={{ uri: nfts?.metadata?.image || '' }}
          style={{ width: 200, height: 200 }}
        />

        <Web3Button
          contractAddress="0xf92F6351022CA458EA5d0FA8854A014B50aE6264"
          onSuccess={() => {
            Alert.alert('claimed!');
          }}
          action={contract => contract.erc1155.claim(0, 1)}>
          Claim
        </Web3Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default Drop;
