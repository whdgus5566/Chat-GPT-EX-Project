var texts = ["a","b","c","d","e"];//텍스트 지정 배열
var ntexts = ["a","b"];//기본 선택지 지정 배열

//데이터를 임시로 가지는 변수
var option_data = {
    base_selection_1 : ' ',//기본 선택지 1
    base_selection_2 : ' ',//기본 선택지 2
    option_1 : ' ', //사용자의 나이
    option_2 : ' ', //페르소나
    option_3 : ' ', //스타일
    option_4 : ' '  //분야
};

//생성 시점에 실행되는 함수. 생성 시점은 메뉴 컨텍스트 클릭이다
document.addEventListener('DOMContentLoaded', function() {
    console.log("[popup_2.js] 초기화 함수가 실행되었다.");
    // 각 div 요소를 변수에 할당

    var div1_b = document.getElementById('base_selection_1');
    var div2_b = document.getElementById('base_selection_2');
    var div1 = document.getElementById('selection_1');
    var div2 = document.getElementById('selection_2');
    var div3 = document.getElementById('selection_3');
    var div4 = document.getElementById('selection_4');

    //버튼 요소 호출
    var reset_b = document.getElementById('reset_button');
    var setting_page_b = document.getElementById('setting_page_link');
    var link_b = document.getElementById('chat_gpt_link');

    // 6개의 선택지에 각각 클릭 이벤트를 추가함
    div1_b.addEventListener('click', function() {
        handleDivClick(document.getElementById('base_text_1').textContent);
    });

    div2_b.addEventListener('click', function() {
        handleDivClick(document.getElementById('base_text_2').textContent);
    });

    div1.addEventListener('click', function() {
        handleDivClick(document.getElementById('ai_text_box_1').textContent);
    });

    div2.addEventListener('click', function() {
        handleDivClick(document.getElementById('ai_text_box_2').textContent);
    });

    div3.addEventListener('click', function() {
        handleDivClick(document.getElementById('ai_text_box_3').textContent);
    });

    div4.addEventListener('click', function() {
        handleDivClick(document.getElementById('ai_text_box_4').textContent);
    });

    function handleDivClick(message) {
        console.log(message);
        window.top.postMessage({message_type: 'selected_option', data: message},'*');
    }
    
    // document.getElementById('Base_Area_Control').addEventListener('click', function() {
    //     console.log("닫기버튼 클릭");
    //     window.close();
    // });

    //각 버튼 별 클릭 이벤트. 각 기능을 구현해야함
    reset_b.addEventListener('click', function() {
        console.log('리셋 버튼이 클릭되었다.');
        reset_option();
    });
    
    setting_page_b.addEventListener('click', function() {
        console.log('세팅 페이지 호출 버튼이 클릭되었다.');
        call_setting_page();
    });
    
    link_b.addEventListener('click', function() {
        console.log('지피티 링크 호출 버튼이 클릭되었다.');
        call_chat_gpt_link();
    });

    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        if (message.action === "refresh") {
            get_option_data();
            setTimeout(() => {document.getElementById('base_text_1').textContent = option_data.base_selection_1, document.getElementById('base_text_2').textContent = option_data.base_selection_2}, 200);
        }
    });
});

var message_data;
//아이콘 버튼 클릭시 
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "get_data_to popup_2_recive") {
        console.log("[[popup_2.js]]선텍한 텍스트를 받는데 성공하였다. : " + message.data);
        //선택지 중 ai로부터 받아야 할 4가지의 선택지에 비동기 애니메이션
        //선택 표시 텍스트 1 + ai생성 선택지 텍스트 4


        //데이터 스토리지에서 필요한 기본 정보를 로드한다. 초기 진입 시점에서 바로 호출후 초기화 여부 결정
        road_option_data();
        //기본 선택지 가져오기

        setTimeout(() => {document.getElementById('base_text_1').textContent = option_data.base_selection_1, document.getElementById('base_text_2').textContent = option_data.base_selection_2}, 200);

        texts[0] = '당신이 선택한 "'+ message.data +'"에 대해서 질문을 선택하세요.';

        (function() {
            var questionSpan = document.getElementById('text_box_m');
            var text = texts[0]; // texts[0]에 있는 텍스트를 가져옴
            var index = 0;
        
            function typeWriter() {
                if (index < text.length) {
                    questionSpan.textContent += text.charAt(index);
                    index++;
                    setTimeout(typeWriter, 10); // 10ms 간격으로 타이핑 효과
                }
            }
        
            // 텍스트가 존재하면 타이핑 애니메이션 시작
            if (text) {
                typeWriter();
            }
        })();
        
        message_data = message.data;
        //gpt통신 함수 호출
        sendMessageToChatGPT(message.data);

        //페이지 길이 조정 코드
        const textBox = document.getElementById('text_box_m');
        const rect = document.querySelector('rect#base_area_i');
        const rect_2 = document.querySelector('.base_area_i');
        const ewe = document.getElementById('popup_2_area');
        const pop = document.getElementById('popframe');
        const updateRectHeight = () => {
            const spanHeight = textBox.offsetHeight;
            window.top.postMessage({message_type: 'resize_height', data: (360+spanHeight+5)},'*');
            rect.setAttribute('height', (360+spanHeight));
            ewe.style.height = (360+spanHeight) + 'px';
            rect_2.style.height = (360+spanHeight) + 'px';
            pop.style.height = (360+spanHeight) + 'px';
            
            //pop.style.height = (361+spanHeight) + 'px';
            //chrome.runtime.sendMessage("reset_iframe", (361+spanHeight));
            // chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            //     chrome.tabs.sendMessage(
            //         tabs[0].id, {
            //             type: 'reset_iframe',
            //             payload: {
            //                 data: (361+spanHeight),
            //             },
            //         },
            //     )
            // });
            console.log("[[popup_2.js]] span의 길이는: " + spanHeight + " rect의 길이는: " + rect.getAttribute('height'));
        };
        const observer = new MutationObserver(updateRectHeight);

        observer.observe(textBox, { attributes: true, childList: true, subtree: true });

        // span 요소의 텍스트가 변경될 때마다 높이 업데이트
        textBox.addEventListener('input', updateRectHeight);
        updateRectHeight();

        const span_1 = document.getElementById('ai_text_box_1');
        const span_2 = document.getElementById('ai_text_box_2');
        const span_3 = document.getElementById('ai_text_box_3');
        const span_4 = document.getElementById('ai_text_box_4');

        const select_1 = document.getElementById('text_box_3');
        const select_2 = document.getElementById('text_box_4');
        const select_3 = document.getElementById('text_box_5');
        const select_4 = document.getElementById('text_box_6');

        const svg_1 = document.querySelector('.selection_area_1');

        const selection_1 = document.getElementById('selection_1');
        const selection_2 = document.getElementById('selection_2');
        const selection_3 = document.getElementById('selection_3');
        const selection_4 = document.getElementById('selection_4');

        const base_div = document.getElementById('popup_2_area');
        const base_svg_rect = document.querySelector('rect#base_area_i');
        const base_svg = document.querySelector('.base_area_i');

        const rect_1 = document.getElementById('selection_area_1');

        //seletion_1의 크기 조정 코드 부분
        function adjustSizes() {
            console.log('selection_1의 크기가 변화하였다.');
            // 자기 자신의 길이를 가져온다(변한 길이)
            const spanHeight = span_1.offsetHeight;
        
            // 자신을 담는 상위 div의 길이를 수정한다.
            selection_1.style.height = spanHeight + 20 + 'px';
            select_1.style.height = spanHeight + 20 + 'px';
            
            // Set the new height for the rect
            rect_1.setAttribute('height', spanHeight + 20); // 10px padding
        
            // Set the new height for the svg
            svg_1.style.height = spanHeight + 10 + 'px'; // 10px padding

            const length_all = textBox.offsetHeight + 360 + select_1.style.height + select_2.style.height + select_3.style.height + select_4.style.height;
            base_div.style.height = length_all + 'px';
            base_svg_rect.setAttribute('height', (length_all));
            base_svg.style.height = length_all + 'px';
            pop.style.length = length_all + 5 + 'px';
        }
        // Monitor changes to the span content
        const observer2 = new MutationObserver(adjustSizes);

        // Observe the span for changes
        observer2.observe(document.getElementById('ai_text_box_1'), {
            childList: true,
            subtree: true,
            characterData: true
        });
        // Initial size adjustment
        adjustSizes();
        //------------여기까지
    }
});


//ai로부터 질문을 생성하도록 하는 함수
function sendMessageToChatGPT(selectedText) {
    
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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' 
        },
        body: JSON.stringify({
            model: 'gpt-4-turbo',  // 사용할 ChatGPT 모델
            messages: [{
                role: 'assistant',
                content: `당신은 오직 4개의 질문만을 생성하는 응답기기입니다. 다음 텍스트를 선택한 사용자가 궁금해할 가능성이 높은 4가지 질문을 한글로 만들어 주세요: "${selectedText}" 각 질문을 엔터로 구분해주세요. 만약 텍스트가 한국어가 아니라면, 번역해달라는 질문을 무조건 1개 포함시켜주세요.`
            }],
            max_tokens: 200  // 응답에 포함할 토큰의 최대 수
        })
    };

    fetch(apiUrl, request)
    .then(response => response.json())
    .then(data => {
        console.log('ChatGPT Response:', data);

        if (data.choices && data.choices.length > 0) {
            const responseText = data.choices[0].message.content;
            const questions = parseQuestions(responseText);

            // AI로부터 받은 질문을 texts 배열에 삽입
            for (let i = 1; i <= 4; i++) {
                texts[i] = questions[i - 1];
            }

            startAnimations(document.getElementById('ai_text_box_1'), texts[1]);
            startAnimations(document.getElementById('ai_text_box_2'), texts[2]);
            startAnimations(document.getElementById('ai_text_box_3'), texts[3]);
            startAnimations(document.getElementById('ai_text_box_4'), texts[4]);
        } else {
            console.error('Invalid response format from ChatGPT:', data);
            for (let i = 1; i <= 4; i++) {
                texts[i] = "에러가 발생하였습니다.";
            }
            startAnimations(document.getElementById('ai_text_box_1'), texts[1]);
            startAnimations(document.getElementById('ai_text_box_2'), texts[2]);
            startAnimations(document.getElementById('ai_text_box_3'), texts[3]);
            startAnimations(document.getElementById('ai_text_box_4'), texts[4]);
        }
    })
    .catch(error => {
        console.error('Error sending message to ChatGPT:', error);
        for (let i = 1; i <= 4; i++) {
            texts[i] = "에러가 발생하였습니다.";
        }
        startAnimations(document.getElementById('ai_text_box_1'), texts[1]);
        startAnimations(document.getElementById('ai_text_box_2'), texts[2]);
        startAnimations(document.getElementById('ai_text_box_3'), texts[3]);
        startAnimations(document.getElementById('ai_text_box_4'), texts[4]);
    });
}

function parseQuestions(responseText) {
    const questions = responseText.split('\n').filter(line => line.trim() !== '');
    return questions.slice(0, 4); // 최대 4개의 질문만 반환
}

//텍스트 비동기 애니메이션 효과 함수
function startAnimations(element, text) { // element: 입력할 텍스트 태그, text: 입력해야 하는 텍스트
    function typeWriter(index) {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            console.log('[popup_2] startAnimations()가 문자 작성 함수를 동작시킴. 현재 값은: ' + element.textContent);
            setTimeout(function() {
                typeWriter(index + 1);
            }, 50); // 글자 입력 간격 조정
        }
    }

    // 애니메이션 시작
    typeWriter(0);
}

//ai를 재호출하여 선택지를 재생성한다.
function reset_option() {
    //요소 초기화
    document.getElementById('ai_text_box_1').textContent = '';
    document.getElementById('ai_text_box_2').textContent = '';
    document.getElementById('ai_text_box_3').textContent = '';
    document.getElementById('ai_text_box_4').textContent = '';
    //gpt재호출
    sendMessageToChatGPT(message_data);
}

//설정 페이지를 오픈한다.
function call_setting_page() {
    //content.js에서 해야하므로 메시지를 전송한다.
    window.top.postMessage({message_type: 'call_setting_page', data: ' '},'*');
}


//다른 파일에서 사용해야하지만 일단 여기에 놓는거니 옮겨야함

// //데이터를 임시로 가지는 변수
// var option_data = {
//     base_selection_1 : ' ',
//     base_selection_2 : ' ',
//     option_1 : ' ', //사용자의 나이
//     option_2 : ' ', //페르소나
//     option_3 : ' ', //스타일
//     option_4 : ' '  //분야
// };

//데이터를 스토리지에 저장하는 함수
function set_option_data(){
    chrome.storage.sync.set({
        'base_selection_1': option_data.base_selection_1,
    }, function() {
        console.log('데이터가 저장되었다.');
    });
    chrome.storage.sync.set({
        'base_selection_2': option_data.base_selection_2,
    }, function() {
        console.log('데이터가 저장되었다.');
    });
    chrome.storage.sync.set({
        'option_1': option_data.option_1,
    }, function() {
        console.log('데이터가 저장되었다.');
    });
    chrome.storage.sync.set({
        'option_2': option_data.option_2,
    }, function() {
        console.log('데이터가 저장되었다.');
    });
    chrome.storage.sync.set({
        'option_3': option_data.option_3,
    }, function() {
        console.log('데이터가 저장되었다.');
    });
    chrome.storage.sync.set({
        'option_4': option_data.option_4,
    }, function() {
        console.log('데이터가 저장되었다.');
    });
}

//데이터를 스토리지로부터 가져오는 함수
function get_option_data(){
    chrome.storage.sync.get(['base_selection_1'], function(result) {
        option_data.base_selection_1 = result.base_selection_1;
        console.log('selected_option.base_selection_1의 데이터가 호출되었다 '+result.base_selection_1);
    });
    chrome.storage.sync.get(['base_selection_2'], function(result) {
        option_data.base_selection_2 = result.base_selection_2;
        console.log('selected_option.base_selection_2의 데이터가 호출되었다 '+result.base_selection_2);
    });
    chrome.storage.sync.get(['option_1'], function(result) {
        option_data.option_1 = result.option_1;
        console.log('option_1의 데이터가 호출되었다 '+result.option_1);
    });
    chrome.storage.sync.get(['option_2'], function(result) {
        option_data.option_2 = result.option_2;
        console.log('option_2의 데이터가 호출되었다 '+result.option_2);
    });
    chrome.storage.sync.get(['option_3'], function(result) {
        option_data.option_3 = result.option_3;
        console.log('option_3의 데이터가 호출되었다 '+result.option_3);
    });
    chrome.storage.sync.get(['option_4'], function(result) {
        option_data.option_4 = result.option_4;
        console.log('option_4의 데이터가 호출되었다 '+result.option_4);
    });
}


//스토리지 초기화 함수
function Initial_settings() {
    //옵션 기본값 수동 입력
    option_data.base_selection_1 = '설명해줘';
    option_data.base_selection_2 = '번역해줘';
    option_data.option_1 = '1';
    option_data.option_2 = '1';
    option_data.option_3 = '1';
    option_data.option_4 = '1';
    //초기 저장
    set_option_data();
}

//팝업 호출 시점 데이터를 가져오는 함수
function road_option_data() {
    //1. 일단 데이터를 가져옴
    get_option_data()
    //2. 데이터가 존재하는가?
    //3. 없는경우
    setTimeout(() => set_init(), 200);
}

function set_init(){
    if(option_data.base_selection_1 == ' ') {
        //4. 데이터 초기 구성 
        console.log('저장된 데이터가 존재하지 않으므로 초기 구성을 진행한다.');
        Initial_settings();
    }
}


function call_chat_gpt_link() {
    window.open('https://chatgpt.com/', '_blank');
}
