// App.tsx
import { useRef } from "react";
import SwipeModal, { SwipeModalRef } from "./components/SwipeModal/SwipeModal.types";

function App() {
    const swipeModalRef = useRef<SwipeModalRef>(null);
    
    return (
        <>
            <button 
                onClick={() => swipeModalRef.current?.show()}
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "transparent",
                }}
            >
                Click anywhere to open modal
            </button>

            <SwipeModal ref={swipeModalRef}>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </SwipeModal>
        </>
    );
}

export default App;