// App.tsx
import { useRef } from "react";
import SwipeModal, { SwipeModalRef } from "./components/SwipeModal/SwipeModal";

function App() {
    const inProduction = import.meta.env.VITE_IN_PRODUCTION === "true";
    const swipeModalRef = useRef<SwipeModalRef>(null);
    
    return (
        <>
            {inProduction ? (
                <SwipeModal />
            ) : (
                <>
                    <button onClick={() => swipeModalRef.current?.show()}
                    >
                        Open
                    </button>

                    <SwipeModal ref={swipeModalRef}>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </SwipeModal>
                </>
            )}
        </>
    );
}

export default App;