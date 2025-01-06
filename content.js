var base64ImageData = "data:image/png;base64,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";
var text;//선택된 텍스트가 담겨있는 변수

//데이터를 임시로 가지는 변수
var option_data = {
    base_selection_1 : ' ',
    base_selection_2 : ' ',
    option_1 : ' ', //사용자의 나이
    option_2 : ' ', //페르소나
    option_3 : ' ', //스타일
    option_4 : ' '  //분야
};

var popup_activate_state = false;//팝업의 중복활성화 방지

// 드래그 이벤트 수신 함수
function handleSelectionChange(event) {
    console.log('[[content.js]] 드래그 이벤트 핸들러 작동 시작');
    // 선택한 텍스트 가져오기
    const selectedText = window.getSelection().toString();
    text = selectedText;
    console.log('[[content.js]] 선택된 텍스트는: ' + selectedText);

    // 가져온 텍스트가 비어있지 않으면 백그라운드 스크립트로 메시지 보내기
    if (selectedText !== "" && popup_activate_state == false) {
        console.log('[[content.js]] 백그라운드 스크립트로 메시지를 보낼 수 있다.');
        chrome.runtime.sendMessage({
            action: "selectedText",
            data: selectedText
        });
    }
} document.addEventListener('mouseup', handleSelectionChange);


//background로부터 메시지를 받아 팝업을 실행하는 코드
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "openPopup" && popup_activate_state == false) {
        popup_activate_state = true;//팝업이 실행되었으므로 true전환
        Create_Bubble_Func(lastDragX, lastDragX);
    }
});

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.action === "popup_load") {
//         console.log("[content.js] 팝업_2가 로드된 후 보낸 메시지가 성공적으로 도착함.");
//     }
// });

var popup = document.createElement('div');
var iframe = document.createElement("iframe");
var icon = document.createElement('button');
var iframe_2 = document.createElement("iframe");//2번째 창을 담는 iframe
var iframe_3 = document.createElement("iframe");//3번째 창을 담는 iframe. 설정창이다.
var closeButton = document.createElement('div');

//팝업을 생성하는 함수
function Create_Bubble_Func(){
    popup.id = 'popup';
    popup.style.position = 'absolute';
    popup.style.top = lastDragY + 'px';
    console.log('윈도우 스크롤 위치:' + window.scrollY + '텍스트 드래그 위치: '+lastDragY);
    popup.style.left = lastDragX + 'px';
    popup.style.outline = 'none';
    popup.style.borderStyle = 'none';
    popup.classList.add('no-border');
    popup.style.zIndex = '9997';
    document.body.appendChild(popup);
    //프레임 생성
    
    var popupUrl = chrome.runtime.getURL('popup_2.html');//팝업 url 직접 지정
    iframe.src = popupUrl;
    iframe.id = 'popframe';
    iframe.style.pointerEvents = 'auto';
    iframe.style.width = '545px';
    iframe.style.height = '0px';
    iframe.style.allowTransparency = 'true';
    iframe.style.boxSizing = 'content-box';
    iframe.style.outline = 'none';
    iframe.style.border = 'none';
    iframe.style.position = 'absolute';
    iframe.style.filter ='Alpha(Opacity=65)';
    iframe.style.opacity = '0';
    iframe.style.overflowY = 'hidden';
    iframe.style.visibility = 'hidden';
    iframe.allowTransparency = 'true';
    iframe.style.transition = 'opacity 0.3s ease-in-out';
    iframe.style.colorScheme = 'light';
    iframe.style.zIndex = '9998';
    popup.append(iframe);


    closeButton.id = 'Base_Area_Control';
    closeButton.style.position = 'absolute';
    closeButton.style.width = '24px';
    closeButton.style.height = '24px';
    closeButton.style.opacity = '0';
    closeButton.style.left = '510px';
    closeButton.style.top = '5px';
    closeButton.style.zIndex = '9999';
    closeButton.style.transition = 'opacity 0.3s ease-in-out';
    closeButton.style.cursor = 'pointer';
    closeButton.innerHTML = `
        <svg class="ic_close_24px" viewBox="5 5 24 24" style="width: 100%; height: 100%;">
            <path id="ic_close_24px" style="fill: rgba(0,0,0,0.749);" d="M 21.96801567077637 6.694954872131348 L 20.25909423828125 5 L 13.48400783538818 11.71971702575684 L 6.708921432495117 5 L 5 6.694954872131348 L 11.77508640289307 13.4146728515625 L 5 20.13438987731934 L 6.708921432495117 21.829345703125 L 13.48400783538818 15.10962677001953 L 20.25909423828125 21.829345703125 L 21.96801567077637 20.13438987731934 L 15.1929292678833 13.4146728515625 L 21.96801567077637 6.694954872131348 Z"></path>
        </svg>
    `;
    

    icon.id = 'iconB';
    icon.style.width = '48px';
    icon.style.height = '48px';
    icon.style.backgroundImage = "url('" + base64ImageData + "')";
    icon.style.zIndex = '9998';
    icon.style.backgroundSize = 'cover'; 
    icon.style.backgroundPosition = 'center';
    icon.style.opacity = '0';
    icon.style.transition = 'opacity 0.3s ease-in-out';
    popup.append(icon);
    setTimeout(() => {
        icon.style.opacity = '1';
    }, 30);
    //아이콘 생성
    
    closeButton.addEventListener('click', function() {
        var popup = document.getElementById('popup');
        popup.replaceChildren();
        document.body.removeChild(popup);
    });

    // 버튼이 클릭되었다.
    document.getElementById('iconB').onclick = function() {
        console.log("버튼이 클릭되었다.");
        //버튼이 클릭되면 곧바로 텍스트를 전송한다.
        chrome.runtime.sendMessage({action: "get_data_to popup_2_recive", data: text});
        chrome.runtime.sendMessage({action: "click_Button_event", data: text});

        icon.style.opacity = '0';
        icon.remove();
        popup.appendChild(closeButton);
        iframe.style.visibility = 'visible';
        setTimeout(() => {
            iframe.style.opacity = '1';
            closeButton.style.opacity = '1';
        }, 30);
    };
}

// 외부 영역을 클릭했을 때 팝업을 닫는 함수
document.addEventListener('click', function(event) {
    // 팝업 영역 내부를 클릭한 경우는 무시
    if (event.target.closest('#popup') || event.target.closest('#iconB')) return;

    console.log("지정된 위치 외에 클릭을 하여 삭제가 이루어졌다.");
    popup_activate_state = false;//팝업이 삭제되었으므로 false
    var popup = document.getElementById('popup');
    // 팝업 외부를 클릭한 경우 팝업 요소 삭제
    //popup.parentElement.removeChild(popup);
    popup.replaceChildren();
    document.removeChild(popup);
});

var lastDragX = 0;
var lastDragY = 0;
//드래그된 텍스트의 위치를 출력하는 함수
document.addEventListener('mouseup', function(event) {
    // 선택된 텍스트 가져오기
    let selectedText = window.getSelection().toString();
    if (selectedText.length > 0) {
        let range = window.getSelection().getRangeAt(0);
        let rect = range.getBoundingClientRect();

        // 선택된 텍스트의 위치 출력
        console.log(`드래그된 텍스트: "${selectedText}"`);
        console.log(`텍스트 시작 위치: (${rect.left}, ${rect.top})`);
        console.log(`텍스트 끝 위치: (${rect.right}, ${rect.bottom})`);

        lastDragX = (rect.left + rect.right)/2 - 24 - window.scrollX;
        lastDragY = rect.bottom + window.scrollY + 5;
    }
});


//화면을 스크롤해도 위치 유지하는 함수
// window.addEventListener('scroll', function() {
//     console.log("화면이 스크롤되었다. : " + window.scrollY);
//     popup.style.left = lastDragX + 'px';
//     popup.style.top = (lastcontrolY + window.scrollY) + 'px';
//     if(lastcontrolY < window.scrollY){//페이지를 내린경우
//         popup.style.top = (popup.style.top - (window.scrollY - lastcontrolY)) + 'px';//화면 기준 팝업의 y위치
//     }else {
//         //popup.style.top = popup.style.top - (lastcontrolY - window.scrollY);
//     }
// });

//유동적으로 팝업 크기 변경하는 함수
// const textBox = document.querySelector('popframe').contentWindow.document.getElementById('text_box_m');
// const pop = document.getElementById('popframe');
// const updateRectHeight = () => {
//     const spanHeight = textBox.offsetHeight;
    
//     pop.style.height = (361+spanHeight) + 'px';
// };
// const observer = new MutationObserver(updateRectHeight);
// observer.observe(textBox, { attributes: true, childList: true, subtree: true });
// // span 요소의 텍스트가 변경될 때마다 높이 업데이트
// textBox.addEventListener('input', updateRectHeight);
// updateRectHeight();

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if(request.type === 'reset_iframe'){
//         console.log("popup_2로부터 iframe의 길이를 변경하라는 메시지를 받음." + message.data);
//     }
// });

// window.addEventListener('message', function(e){
//     console.log("popup_2로부터 메시지를 받았다.");
// });

//popup_2의 사이즈 조정명령 수신 함수(h만)
window.addEventListener('message', function(e){
    if(e.data.message_type == 'resize_height'){
        console.log("popup_2로부터 리사이즈 메시지를 받았다.");
        iframe.style.height = e.data.data + 'px';
        iframe_h_tmp = iframe.style.height;
    } else if(e.data.message_type == 'selected_option'){
        console.log("popup_2로부터 선택한 옵션 메시지를 받았다. : " + e.data.data);
        iframe_page_toggle(e.data.data);
    }
});

//2번째 iframe에 대한 사이즈 조정. 두 iframe은 독립되어야 데이터 유지 가능
window.addEventListener('message', function(e){
    if(e.data.message_type == 'resize_height_2'){
        console.log("popup_3로부터 리사이즈 메시지를 받았다.");
        iframe_2.style.height = e.data.data + 'px';
    } 
});


//이전 높이 임시 저장
var iframe_h_tmp;
//팝업 화면을 전환하는 함수
function iframe_page_toggle(selected_option){

    //1번째 아이디어
    // //팝업 페이지 교체
    // document.getElementById('popframe').src = chrome.runtime.getURL('popup_3.html');//2번째 팝업으로 교체

    //2번째 아이디어
    //1.1번째 iframe은 height 0으로 세팅
    iframe_h_tmp = iframe.style.height;
    iframe.style.height = '0px';
    //2. 2번째 iframe 생성
    Create_Bubble_Func_2();

    //3. 3번째 popup이 받아야 할 메시지와 데이터를 전파함. (1번째 데이터: 선택한 텍스트, 2번째 데이터: 선택한 옵션)
    setTimeout(() => chrome.runtime.sendMessage({action: "to_popup_3_option_data", seleted_text: text, data: selected_option}), 200);//html이 로딩되는 것을 0.5초간 기다린다.(순서 뒤바뀜 방지)
    
}


//popup_3의 페이지 전환 메시지 수신 함수. 뒤로가기 동작
window.addEventListener('message', function(e){
    if(e.data.message_type == 'return_page'){
       //popup_3에서 뒤로가기 버튼을 누른 동작
       //1.2번째 iframe삭제
       iframe_2.remove();
       //2.1번째 iframe높이 복귀
       iframe.style.height = iframe_h_tmp;
    } 
});


//팝업 4의 저장, 취소 버튼 클릭 이벤트 메세지 수신
window.addEventListener('message', function(e){
    if(e.data.message_type == 'option_save'){
        closeButton.style.left = '510px';
        iframe_3.style.height = '0px';
        //2.1번째 iframe높이 복귀
        iframe.style.height = iframe_h_tmp;
        setTimeout(() => iframe_3.remove(), 200);
        chrome.runtime.sendMessage({action:'refresh'});
    }
    if(e.data.message_type == 'option_cencle'){
        closeButton.style.left = '510px';
        console.log('[content] 취소 버튼이 클릭되었다는 메시지를 받았다.');
        iframe_3.remove();
        //2.1번째 iframe높이 복귀
        iframe.style.height = iframe_h_tmp;
    }
});


//2번째 iframe을 만드는 함수(채팅창)
function Create_Bubble_Func_2(){
    var popupUrl_2 = chrome.runtime.getURL('popup_3.html');//팝업 url 직접 지정
    iframe_2.src = popupUrl_2;
    iframe_2.id = 'popframe_2';
    iframe_2.style.pointerEvents = 'auto';
    iframe_2.style.width = '545px';
    iframe_2.style.height = '0px';
    iframe_2.style.allowTransparency = 'true';
    iframe_2.style.boxSizing = 'content-box';
    iframe_2.style.outline = 'none';
    iframe_2.style.border = 'none';
    iframe_2.style.position = 'absolute';
    iframe_2.style.overflowY = 'hidden';
    iframe_2.allowTransparency = 'true';
    iframe_2.style.transition = 'opacity 0.3s ease-in-out';
    iframe_2.style.colorScheme = 'light';
    iframe_2.style.zIndex = '9998';
    popup.append(iframe_2);
}

//3번째 iframe을 만드는 함수(설정창)
function Create_Bubble_Func_3(){
    var popupUrl_3 = chrome.runtime.getURL('popup_4.html');//팝업 url 직접 지정
    iframe_3.src = popupUrl_3;
    iframe_3.id = 'popframe_3';
    iframe_3.style.pointerEvents = 'auto';
    iframe_3.style.width = '497.461px';
    iframe_3.style.height = '608.524px';
    iframe_3.style.allowTransparency = 'true';
    iframe_3.style.boxSizing = 'content-box';
    iframe_3.style.outline = 'none';
    iframe_3.style.border = 'none';
    iframe_3.style.position = 'absolute';
    iframe_3.style.overflowY = 'hidden';
    iframe_3.allowTransparency = 'true';
    iframe_3.style.transition = 'opacity 0.3s ease-in-out';
    iframe_3.style.colorScheme = 'light';
    iframe_3.style.zIndex = '9998';
    popup.append(iframe_3);
}

//popup_2에서 설정 아이콘을 클릭함
window.addEventListener('message', function(e){
    if(e.data.message_type == 'call_setting_page'){
        console.log('[content] 설정 버튼 클릭으로 content 작동');

        closeButton.style.left = '470px';

        iframe_h_tmp = iframe.style.height;
        iframe.style.height = '0px';

        //2. 3번째 iframe 생성
        Create_Bubble_Func_3();

        //3. 4번째 popup이 받아야 할 메시지와 데이터를 전파함.
        setTimeout(() => chrome.runtime.sendMessage({action: "to_popup_4_option_data"}), 200);//html이 로딩되는 것을 0.5초간 기다린다.(순서 뒤바뀜 방지)
    } 
});


//데이터를 스토리지로부터 가져오는 함수
function get_option_data(){
    chrome.storage.sync.get(['base_selection_1'], function(result) {
        option_data.base_selection_1 = result;
    });
    chrome.storage.sync.get(['base_selection_2'], function(result) {
        option_data.base_selection_2 = result;
    });
    chrome.storage.sync.get(['option_1'], function(result) {
        option_data.option_1 = result;
    });
    chrome.storage.sync.get(['option_2'], function(result) {
        option_data.option_2 = result;
    });
    chrome.storage.sync.get(['option_3'], function(result) {
        option_data.option_3 = result;
    });
    chrome.storage.sync.get(['option_4'], function(result) {
        option_data.option_4 = result;
    });
}