// SwipeModal.types.ts
import * as React from 'react';
// @ts-ignore
import SwipeModal from './SwipeModal';

export interface SwipeModalProps {
  children?: React.ReactNode;
  
  // styling
  /**
   * The duration of the modal's opening and closing animation in milliseconds.
   * 
   * The default is `300`.
   */
  animationDuration?: number;
  /**
   * The opacity of the modal's backdrop.
   * 
   * The default is `0.3`.
   */
  backdropOpacity?: number;
  /**
   * The color of the bar at the top of the modal.
   * 
   * The default is `'dimgrey'`.
   */
  barColor?: string;
  /**
   * The border radious of the modal.
   * 
   * The default is `'1.2rem'`.
   */
  borderRadius?: string;
  /**
   * Set to `true` to hide the bar at the top of the modal.
   * 
   * The default is `false`.
   */
  hideBar?: boolean;
  /**
   * The maximum width of the modal.
   * 
   * The default is `'100vw'`.
   */
  maxWidth?: string;
  /**
   * The background color of the modal.
   * 
   * The default is `'hsl(0, 0%, 10%)'`.
   */
  modalColor?: string;
  
  // functionality
  /**
   * The trigger to close the modal.
   * - `'swipe'` means that modal will close when modal was swiped down faster than `closeTriggerSpeed`.
   * - `'height'` means that modal will close when height of modal is less than `closeTriggerPercentage`.
   *
   * The default is `'swipe'`.
   */
  closeTrigger?: 'swipe'|'height';
  /**
   * The height in percent that triggers the modal to close when using the `closeTrigger` `'height'`.
   * 
   * The default is `50`.
   */
  closeTriggerPercentage?: number;
  /**
   * The swipe speed in px/s that triggers the modal to close when using the `closeTrigger` `'swipe'`.
   * 
   * The default is `500`.
   */
  closeTriggerSpeed?: number;
  /**
   * Set to `true` if you don't want to allow swiping.
   * 
   * The default is `false`.
   */
  disableSwipe?: boolean;
  /**
   * Set to `true` if you want to allow swiping only from the bar.
   * 
   * The default is `false`.
   */
  swipeOnlyFromBar?: boolean;

  // additonal styling
  /**
   * Additional styles to be applied to the backdrop.
   */
  backdropStyle?: React.CSSProperties;
  /**
   * Additional styles to be applied to the bar.
   */
  barStyle?: React.CSSProperties;
  /**
   * Additional styles to be applied to the modal.
   */
  modalStyle?: React.CSSProperties;
  
  // callbacks
  /**
   * A callback function that will be triggered when the modal is shown.
   */
  onShow?: () => void;
  /**
   * A callback function that will be triggered when the modal is closed.
   */
  onClose?: () => void;
}

export interface SwipeModalRef {
  /**
   * Shows the modal.
   */
  show: () => void;
  /**
   * Closes the modal.
   */
  close: () => void;
}

export default SwipeModal;
