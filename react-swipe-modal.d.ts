// react-swipe-modal.d.ts
import * as React from 'react';

export interface SwipeModalProps {
  children?: React.ReactNode;
  closeTrigger?: 'swipe' | 'height';
  closeTriggerPercentage?: number;
  closeTriggerSpeed?: number;
  disableSwipe?: boolean;
  swipeOnlyFromBar?: boolean;
  animationDuration?: number;
  backdropOpacity?: number;
  barColor?: string;
  hideBar?: boolean;
  modalColor?: string;
  backdropStyle?: React.CSSProperties;
  barStyle?: React.CSSProperties;
  modalStyle?: React.CSSProperties;
  onShow?: () => void;
  onClose?: () => void;
}

export interface SwipeModalRef {
  show: () => void;
  close: () => void;
}

declare const SwipeModal: React.ForwardRefExoticComponent<SwipeModalProps & React.RefAttributes<SwipeModalRef>>;

export default SwipeModal;
