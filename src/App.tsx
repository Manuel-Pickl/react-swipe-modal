// App.tsx
import { useRef } from "react";
import SwipeModal, { SwipeModalRef } from "./components/SwipeModal/SwipeModal";

function App() {
    const swipeModalRef = useRef<SwipeModalRef>(null);
    
    return (
        <>
            <button onClick={() => swipeModalRef.current?.show()}
            >
                Open
            </button>

            <SwipeModal ref={swipeModalRef}>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </SwipeModal>
        </>
    );
}

export default App;