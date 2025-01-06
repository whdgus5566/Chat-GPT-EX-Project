//백그라운드 스크립트로부터 메시지 수신
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // 선택한 텍스트를 받았을 때 처리
    if (message.action === "selectedText") {
        const selectedText = message.data;

        console.log('[[popup.js]] 메시지 수신 완료 -> ' + message.data);
        document.getElementById('selectedTextDisplay').innerText = selectedText;
    }
});


// 팝업이 열릴 때 초기화
document.addEventListener('DOMContentLoaded', function() {
    const selectedTextElement = document.getElementById('selectedTextDisplay');
    
    // 팝업에 표시될 텍스트가 없는 경우 안내 메시지 표시
    if (!selectedTextElement.innerText) {
        selectedTextElement.innerText = "선택한 텍스트가 없습니다.";
    }
});