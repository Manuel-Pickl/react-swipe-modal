// App.tsx
import { useRef } from "react";
import { SwipeModalRef } from "./components/SwipeModal/SwipeModal.types";
import SwipeModal from "./components/SwipeModal/SwipeModal";

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