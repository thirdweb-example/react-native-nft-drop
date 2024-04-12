> [!Important]  
> This repository is referencing the `mumbai` chain.
> 
> `Mumbai` [is deprecated since 08/04/2024](https://blog.thirdweb.com/deprecation-of-mumbai-testnet/), meaning the code in this repository will no longer work out of the box.
>
> You can still use this repository, however you will have to switch any references to `mumbai` to another chain.

# Getting started with React Native and thirdweb

This repository is associated with a [guide on thirdweb blog](https://blog.thirdweb.com/getting-started-with-react-native-and-thirdweb).

## Walkthrough

In `App.tsx` we have set up our `ThirdwebProvider` component to use Polygon Mumbai network. If you wish to change the network, this is the right place:

```tsx
const App = () => {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      supportedWallets={[metamaskWallet(), coinbaseWallet()]}>
      <AppInner />
    </ThirdwebProvider>
  );
};
```

You can also update the wallets you wish to use with your React Native app (currently `metamaskWallet()`, `coinbaseWallet()`, `rainbowWallet()` and `trustWallet()` are supported).

The main logic lies in the `Drop.tsx` where we use `Web3Button` to claim the Edition drop:

```tsx
<Web3Button
  contractAddress="0xf92F6351022CA458EA5d0FA8854A014B50aE6264"
  onSuccess={() => {
    Alert.alert('claimed!');
  }}
  action={contract => contract.erc1155.claim(0, 1)}>
  Claim
</Web3Button>
```

## Running the app

You need to first set up React Native for your machine. You can follow the [official guide](https://reactnative.dev/docs/environment-setup). We recommend using a physical device because simulators/emulators do not support wallets properly.

Run the following command to run the app:

```bash
# android
yarn android

# ios
yarn ios
```
