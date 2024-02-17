# React-Swipe-Modal

🌀 A swipeable modal for the browser, just like on your smartphone.

![swipe down](https://media.tenor.com/o656qFKDzeUAAAAM/rick-astley-never-gonna-give-you-up.gif)
![different styöes](https://media.tenor.com/o656qFKDzeUAAAAM/rick-astley-never-gonna-give-you-up.gif)

## Features

- Swipe or tap to close
- Completely customizable appearance
- Different closing triggers and behaviours
- Display a react component inside the modal
- `onShow` and `onClose` hooks

## Installation

```
npm install react-swipe-modal
```

## Usage

```jsx
import { useRef } from 'react';
import SwipeModal, { SwipeModalRef } from 'react-swipe-modal';


const App = () => {
    const modalRef = useRef<SwipeModalPublicMethods>(null);

    const showModal = () => modalRef.current?.show(); // Call this function to show modal
    const hideModal = () => modalRef.current?.hide(); // Call this function to hide modal

    return (
        <SwipeModal ref={modalRef}>
            Put anything inside here!
        </SwipeModal>
    );
};
```

# Props

 Name                       | Type                      | Default value | Description       
----------------------------|---------------------------|---------------|---------------------
 `children`                 | ReactNode\ReactNode[]     | **required**  | The content to be rendered inside the modal.
 **Functionality**          |                           |               |
 `closeTrigger`             | 'swipe'\|'height'         | 'swipe'       | The trigger to close the modal.<br>`'swipe'` means that modal will close when modal was swiped down faster than `closeTriggerSpeed`.<br>`'height'` means that modal will close when height of modal is less than `closeTriggerPercentage`.
 `closeTriggerPercentage`   | number                    | 50            | The height percentage that triggers the modal to close when using the `closeTrigger` `'height'`.
 `closeTriggerSpeed`        | number                    | 500           | The swipe speed that triggers the modal to close when using the `closeTrigger` `'swipe'`.
 `disableSwipe`             | boolean                   | false         | Set to `true` if you don't want allow swiping.
 `swipeOnlyFromBar`         | boolean                   | false         | Set to `true` if you want to allow swiping only from the bar.
 **Styling**                |                           |               |
 `animationDuration`        | number                    | 300           | The duration of the modal's opening and closing animations, in milliseconds.
 `backdropOpacity`          | number                    | 0.3           | The opacity of the backdrop of the modal.
 `barColor`                 | string                    | 'dimgrey'     | The color of the bar at the top of the modal.
 `hideBar`                  | boolean                   | false         | Set to `true` to hide the bar at the top of the modal.
 `modalColor`               | string                    | 'black'       | The background color of the modal.
 **Additional Styling**     |                           |               |
 `backdropStyle`            | ViewStyle\|ViewStyle[]    |               | Additional styles to be applied to the backdrop.
 `barStyle`                 | ViewStyle\|ViewStyle[]    |               | Additional styles to be applied to the modal.
 `modalStyle`               | ViewStyle\|ViewStyle[]    |               | Additional styles to be applied to the modals.
 **Callbacks**              |                           |               |
 `onShow`                   | () => void                |               | A callback function that will be triggered when the modal is shown.
 `onHide`                   | () => void                |               | A callback function that will be triggered when the modal is hidden.

## Public Methods

Name                  | Description
----------------------|--------------
`show`                | Call this method to show the modal.
`hide`                | Call this method to hide the modal.

## Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome!

You can also find me on my [Homepage](https://manuelpickl.com/).

## License

Licensed under MIT