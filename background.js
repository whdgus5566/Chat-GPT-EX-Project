// 크롬에서 오른쪽 메뉴 등록에 필요한 정보
chrome.contextMenus.create({
    id: "myContextMenu",
    title: "확장 프로그램 실행하기",
    contexts: ["selection"]
});


// 설치가 완료되었다는 기본 로그
chrome.runtime.onInstalled.addListener(function() {
    console.log('[[background.js]] Extension installed');
});


//드래그한 텍스트를 받는 함수
let selectedTextData = "";
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "selectedText" && message.data.length < 1000) {
        console.log('[[background.js]] 메시지 수신 완료 -> ' + message.data);
        selectedTextData = message.data;
        openPopup();//드래그한 텍스트를 받으면 곧바로 팝업을 실행한다.
    }
});


//오른쪽 버튼 메뉴를 선택했을 때 실행되는 이벤트
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "myContextMenu") {
        console.log('[[background.js]] 메뉴가 선택되어 이벤트 함수가 실행되었다.');
        // 메시지 송신
        openPopup();
        
    }
});


//마우스 클릭좌표 설정
let lastDragX = 0;
let lastDragY = 0;
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'sendPosition') {
        lastDragX = message.x;
        lastDragY = message.y;
    }
});


// 팝업 창을 호출하는 함수
function openPopup(){
    const left = lastDragX;
    // 드래그한 텍스트 아래에 위치하도록 조정
    const top = lastDragY + 10;
    console.log('[[background.js]] openpopup함수가 실행되었다.');    

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "openPopup" }, function(response) {
            console.log("[background.js] 팝업 창을 호출함");
        });
    });
}

//버튼 아이콘 클릭시 호출
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "click_Button_event") {
        sendMessageToChatGPT(selectedTextData);
    }
});


//ChatGPT로 메시지 보내는 함수
// function sendMessageToChatGPT(message) {
//     // ChatGPT API를 호출하는 데 사용할 URL
//     console.log("chat gpt 통신을 위한 함수가 작동하였다.");
//     console.log("현재 시점에서 prompt는: [" + message + "] 이다.")
//     const apiUrl = 'https://api.openai.com/v1/chat/completions';

//     // ChatGPT API를 호출하기 위한 요청 설정
//     const request = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer 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'
//         },
//         body: JSON.stringify({
//             model: 'gpt-3.5-turbo-0125', // 사용할 ChatGPT 모델
//             message: [{ role: 'user', content: "test message" }], // 사용자의 메시지를 프롬프트로 사용
//             max_tokens: 50 // 응답에 포함할 토큰의 최대 수
//         })
//     };

//     // ChatGPT API 호출
//     fetch(apiUrl, request)
//     .then(response => response.json())
//     .then(data => {
//         // 응답 데이터 확인
//         console.log('ChatGPT Response:', data);

//         // data.choices가 정의되어 있는지 확인
//         if (data.choices && data.choices.length > 0) {
//             // 응답에서 텍스트 출력
//             console.log('ChatGPT: ' + data.choices[0].text);
//         } else {
//             // 예상대로 형식화되지 않은 경우 에러 메시지 출력
//             console.error('Invalid response format from ChatGPT:', data);
//         }
//     })
//     .catch(error => {
//         console.error('Error sending message to ChatGPT:', error);
//     });
// }





























