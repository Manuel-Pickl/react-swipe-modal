// App.tsx
import "./App.scss";
import { useEffect, useRef, useState } from "react";
import { SwipeModalRef } from "./components/SwipeModal/SwipeModal.types";
import SwipeModal from "./components/SwipeModal/SwipeModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function App() {
    const swipeModalRef = useRef<SwipeModalRef>(null);
    const [stylingVisible, setStylingVisible] = useState<boolean>(false);
    const [functionalityVisible, setFunctionalityVisible] = useState<boolean>(false);

    // styling
    const [animationDuration, setAnimationDuration] = useState<number>(350);
    const [backdropOpacity, setBackdropOpacity] = useState<number>(0.3);
    const [barColor, setBarcolor] = useState<string>("#696969");
    const [borderRadius, setBorderRadius] = useState<string>("1.3rem");
    const [hideBar, setHideBar] = useState<boolean>(false);
    const [maxWidth, setMaxWidth] = useState<string>("100vw");
    const [modalColor, setModalColor] = useState<string>("#1a1a1a");
    
    // functionality
    const [closeTrigger, setCloseTrigger] = useState<'swipe'|'height'>('swipe')
    const [closeTriggerPercentage, setCloseTriggerPercentage] = useState<number>(50);
    const [closeTriggerSpeed, setCloseTriggerSpeed] = useState<number>(500);
    const [disableSwipe, setDisableSwipe] = useState<boolean>(false);
    const [swipeOnlyFromBar, setSwipeOnlyFromBar] = useState<boolean>(false);

    useEffect(() => {
        const backdrop: HTMLElement | null = document.querySelector(".backdrop");
        if (!backdrop) {
            return;
        }

        backdrop.style.opacity = backdropOpacity.toString();
    }, [backdropOpacity]);

    return (
        <div className="app">
            <h1>React-Swipe-Modal<br/>Demo</h1>
            <div className="info">
                <FontAwesomeIcon icon={faCircleInfo} />{" "}
                Use device mode under DevTools to simulate mobile device interface.
            </div>

            <div className="options">
                <div className="options-group">
                    <div className="header" onClick={() => setStylingVisible(!stylingVisible)}>
                        <FontAwesomeIcon
                            style={{ transform: stylingVisible ? "" : "rotateX(180deg)" }}
                            icon={faChevronUp}
                        />

                        <h2>Styling</h2>
                    </div>

                    <div className="options" style={{ maxHeight: stylingVisible ? "16rem" : "0" }}>
                        <label>animationDuration</label>
                        <div className="input">
                            <label>0</label>
                            <input type="range" min={0} max={2000} value={animationDuration} onChange={(e) => setAnimationDuration(e.target.valueAsNumber)} />
                            <label>2000</label>
                        </div>

                        <label>backdropOpacity</label>
                        <div className="input">
                            <label>0</label>
                            <input type="range" min={0} max={100} value={backdropOpacity * 100} onChange={(e) => setBackdropOpacity(e.target.valueAsNumber / 100)} />
                            <label>1</label>
                        </div>

                        <label>barColor</label>
                        <div className="input">
                            <input type="color" value={barColor} onChange={(e) => setBarcolor(e.target.value)} />
                        </div>

                        <label>borderRadius</label>
                        <div className="input">
                            <input type="text" value={borderRadius} onChange={(e) => setBorderRadius(e.target.value)} />
                        </div>

                        <label>hideBar</label>
                        <div className="input">
                            <input type="checkbox" checked={hideBar} onChange={(e) => setHideBar(e.target.checked)} />
                        </div>

                        <label>maxWidth</label>
                        <div className="input">
                            <input type="text" value={maxWidth} onChange={(e) => setMaxWidth(e.target.value)} />
                        </div>

                        <label>modalColor</label>
                        <div className="input">
                            <input type="color" value={modalColor} onChange={(e) => setModalColor(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className="options-group">
                    <div className="header" onClick={() => setFunctionalityVisible(!functionalityVisible)}>
                        <FontAwesomeIcon
                            style={{ transform: functionalityVisible ? "" : "rotateX(180deg)" }}
                            icon={faChevronUp}
                        />

                        <h2>Functionality</h2>
                    </div>

                    <div className="options" style={{ maxHeight: functionalityVisible ? "16rem" : "0" }}>
                        <label>closeTrigger</label>
                        <div className="input">
                            <select value={closeTrigger} onChange={(e) => setCloseTrigger(e.target.value as 'swipe' | 'height')}>
                                <option value="swipe">Swipe</option>
                                <option value="height">Height</option>
                            </select>
                        </div>

                        <label>closeTriggerPercentage</label>
                        <div className="input">
                            <label>0</label>
                            <input type="range" min={0} max={100} value={closeTriggerPercentage} onChange={(e) => setCloseTriggerPercentage(e.target.valueAsNumber)} />
                            <label>100</label>
                        </div>

                        <label>closeTriggerSpeed</label>
                        <div className="input">
                            <label>0</label>
                            <input type="range" min={0} max={2000} value={closeTriggerSpeed} onChange={(e) => setCloseTriggerSpeed(e.target.valueAsNumber)} />
                            <label>2000</label>
                        </div>

                        <label>disableSwipe</label>
                        <div className="input">
                            <input type="checkbox" checked={disableSwipe} onChange={(e) => setDisableSwipe(e.target.checked)} />
                        </div>

                        <label>swipeOnlyFromBar</label>
                        <div className="input">
                            <input type="checkbox" checked={swipeOnlyFromBar} onChange={(e) => setSwipeOnlyFromBar(e.target.checked)} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="test-window">
                <button onClick={() => swipeModalRef.current?.show()}>
                    Open
                </button>

                <SwipeModal
                    ref={swipeModalRef}

                    // styling
                    animationDuration={animationDuration}
                    backdropOpacity={backdropOpacity}
                    barColor={barColor}
                    borderRadius={borderRadius}
                    hideBar={hideBar}
                    maxWidth={maxWidth}
                    modalColor={modalColor}

                    // functionality
                    closeTrigger={closeTrigger}
                    closeTriggerPercentage={closeTriggerPercentage}
                    closeTriggerSpeed={closeTriggerSpeed}
                    disableSwipe={disableSwipe}
                    swipeOnlyFromBar={swipeOnlyFromBar}

                    backdropStyle={{ position: "absolute", height: "100%", width: "100%"}}
                    modalStyle={{ position: "absolute", maxHeight: "60%" }}
                >
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </SwipeModal>
            </div>
        </div>
    );
}

export default App;