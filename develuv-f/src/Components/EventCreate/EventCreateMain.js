import React from "react";
import './EventCreateMain.scss'
const EventCreateMain = ({ eventArticle, setEventArticle,onChange }) => {

    return (
        <div id="createMain">
            <div className="onoffTitle">
                이벤트가 온라인 인가요, 오프라인 인가요?
            </div>
            <div className="onoffArea">
                <button className={`onoffBox ${eventArticle.onoff && 'onoffClick'}`} onClick={() => { setEventArticle({ ...eventArticle, onoff: 1 }) }} >
                    <div className="onlineImg"></div>
                    <div className="onoffText">온라인 이벤트</div>
                </button>
                <button className={`onoffBox ${!eventArticle.onoff && 'onoffClick'}`} onClick={() => { setEventArticle({ ...eventArticle, onoff: 0 }) }} >
                    <div className="offlineImg"></div>
                    <div className="onoffText">오프라인 이벤트</div>
                </button>
            </div>
            <div className="eventType">
                <div className="typeTitle">
                    이벤트 유형
                </div>
                <div className="radioBox">
                    <div className="radioButton">
                        <input type='radio' name='type' className="type" onClick={() => { setEventArticle({ ...eventArticle, type: "세미나" }) }} />
                    </div>
                    <div className="radioTextBox">
                        <div className="radioTextTitle">
                            컨퍼런스 · 세미나
                        </div>
                        <div className="radioTextSub">
                            다목적 용도의 행사 입니다.
                        </div>
                    </div>
                </div>
                <div className="radioBox">
                    <div className="radioButton">
                        <input type='radio' name='type' className="type" onClick={() => { setEventArticle({ ...eventArticle, type: "클래스" }) }} />
                    </div>
                    <div className="radioTextBox">
                        <div className="radioTextTitle">
                            클래스
                        </div>
                        <div className="radioTextSub">
                            교육용 목적의 행사를 열고 싶다면 선택하세요.
                        </div>
                    </div>
                </div>
                <div className="radioBox">
                    <div className="radioButton" >
                        <input type='radio' name='type' className="type" onClick={() => { setEventArticle({ ...eventArticle, type: "모임" }) }} />
                    </div>
                    <div className="radioTextBox">
                        <div className="radioTextTitle">
                            모임
                        </div>
                        <div className="radioTextSub">
                            자신만의 경험을 남들과 공유하고 싶다면 선택해 주세요.
                        </div>
                    </div>
                </div>
            </div>
               
            <div className="eventMax">
                <div className="createTitle">이벤트 최대 인원</div>
                <input name="ticket" className="createInput" placeholder="이벤트 최대인원" value={eventArticle.ticket} onChange={onChange} />
            </div>

            <div className="eventAddress" style = {{display : `${eventArticle.onoff ? 'inline' : 'none'}`}}>
                <div className="createTitle">이벤트 주소</div>
                <input name="address" className="createInput" placeholder="이벤트 주소" value={eventArticle.address} onChange={onChange} />
            </div>
        </div >
    )
}

export default EventCreateMain


// {isSelected ? // 시작 시간을 선택해야 종료 시간 선택 가능
// <div><SDatePicker



// minTime={startTime}
// maxTime={setHours(setMinutes(new Date(), getMinutes(startTime)), getHours(startTime)+2)} // 시작 시간부터 2시간
// excludeTimes={[
//     // 시작 시간 제외
//     startTime,
//     // 5:00 선택 기준 최대 7:00까지 예외처리
//     setHours(setMinutes(new Date(), 0), 18),
//     setHours(setMinutes(new Date(), 30), 18),
//     setHours(setMinutes(new Date(), 0), 19)
// ]}

// /></div>

// : null 
// }