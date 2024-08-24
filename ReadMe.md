- A react native custom component of a animated loading dots, with a dinamic customization of the view and the dots, in typescript.

- It comes with a built-in TypeScript typings and is compatible with all popular JavaScript frameworks. You can use it directly or leverage well-maintained wrapper packages that allow for a more native integration with your frameworks of choice.

# Example:

![](./assets/videos/1.gif)
![](./assets/videos/2.gif)
![](./assets/videos/3.gif)

## How to use:

```
import Loading from 'react-native-loading-dots';

    <Loading
        dotCount={4}
        dotSize={50}
        dotSpacing={8}
        duration={300}
        dotStyle={{borderRadius: 5}}
      />
```

# Props -

| Name       | Type      | Default |
| ---------- | --------- | ------- |
| dotCount   | number    |
| dotSize    | number    |
| dotSpacing | number    |
| duration   | number    |
| colors?    | string[]  |
| dotStyle?  | ViewStyle |
