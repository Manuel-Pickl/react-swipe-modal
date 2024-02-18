// SwipeModal.d.ts
import * as React from 'react';

export interface SwipeModalProps {
  children?: React.ReactNode;

  // functionality
  /**
   * The trigger to close the modal. Default is `'swipe'`.
   * - `'swipe'` means that modal will close when modal was swiped down faster than `closeTriggerSpeed`.
   * - `'height'` means that modal will close when height of modal is less than `closeTriggerPercentage`.
   */
  closeTrigger?: 'swipe'|'height';
  closeTriggerPercentage?: number;
  closeTriggerSpeed?: number;
  disableSwipe?: boolean;
  swipeOnlyFromBar?: boolean;
  
  // styling
  animationDuration?: number;
  backdropOpacity?: number;
  barColor?: string;
  borderRadius?: string;
  hideBar?: boolean;
  maxWidth?: string;
  modalColor?: string;
  
  // additonal styling
  backdropStyle?: React.CSSProperties;
  barStyle?: React.CSSProperties; 
  modalStyle?: React.CSSProperties;
  
  // callbacks
  onShow?: () => void;
  onClose?: () => void;
}

export interface SwipeModalRef {
  show: () => void;
  close: () => void;
}

declare const SwipeModal: React.ForwardRefExoticComponent<SwipeModalProps & React.RefAttributes<SwipeModalRef>>;

export default SwipeModal;
