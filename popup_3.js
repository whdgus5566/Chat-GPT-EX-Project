//선택된 옵션을 저장하는 변수
var option_data = {
    base_selection_1 : ' ',
    base_selection_2 : ' ',
    option_1 : ' ', //사용자의 나이
    option_2 : ' ', //페르소나
    option_3 : ' ', //스타일
    option_4 : ' '  //분야
};

//각 옵션별 실제 값
var option_1 = {
    '1': '10~15',
    '2': '15~20',
    '3': '20~30',
    '4': '30~40',
    '5': '40~50'
};

var option_2 = {
    '1': '기본',
    '2': '선생님',
    '3': '교수님',
    '4': '친구',
    '5': '전문가'
};

var option_3 = {
    '1': '기본',
    '2': '친근한',
    '3': '전문적인',
    '4': '사무적인',
    '5': '친절한'
};

var option_4 = {
    '1': '기본',
    '2': '번역',
    '3': '수학',
    '4': '과학',
    '5': '시사'
};
//사용 예: option_1[option_data[option_1]] <= 옵션 1에대한 디코딩. 데이터를 통해 실제 값 바로 접근

var chatgpt_message = ' ';//chatgpt 메시지를 임시로 보관하는 변수
var user_message = ' ';//사용자가 작성한 메시지를 임시로 보관하는 변수

var option_text = ' ';//외부에서 선택한 옵션을 보관하는 변수
var seleted_text = ' ';//외부에서 선택한 텍스트를 보관하는 변수

//초기화 이벤트 함수
document.addEventListener('DOMContentLoaded', function() {
    console.log("[popup_3.js] 초기화 함수가 실행되었다.");
    //초기화 직후 창 크기 맞추기
    window.top.postMessage({message_type: 'resize_height_2', data: (572.768+5)},'*');

    //스토리지에서 데이터를 불러온다.
    get_option_data();

    //뒤로가기 div 클릭 이벤트 등록
    document.getElementById('back_area').addEventListener('click', function() {
        console.log('back_area was clicked');
        window.top.postMessage({message_type: 'return_page'},'*');//페이지를 page_2로 전환하도록 contect에 메시지 전송
    });

    //옵션을 수신받음. 실질적인 프로세스 시작 지점
    chrome.runtime.onMessage.addListener(function(message) {
        if (message.action === "to_popup_3_option_data") {
            console.log('[popup_3] 옵션을 전달받는 리스너가 동작했다. option: ' + message.data + '선택한 텍스트: ' + message.seleted_text);//실제로 사용해야 할 데이터
            option_text = message.data;//선택된 옵션 저장
            seleted_text = message.seleted_text;

            //메시지를 받아서 데이터를 가져와야 초기 메시지 구성 가능함
            setTimeout(() => first_message_f(), 100);//초기 메시지를 구성하는 함수
        }
    });

    document.querySelector('.send_message_button').addEventListener('click', function() {
        console.log('메시지 전송 버튼이 클릭됨');
        //메시지 생성
        sendmessage_user();
    });

    function pressenter(e){
        if(e.keyCode==13){
            //sendmessage();
            sendmessage_user();
        }
    }
    document.getElementById('input_area').addEventListener('keyup', event=>pressenter(event));

    //사용자 관점 말풍선을 생성하고, ai에게 응답을 받는 프로세스로 이어나가는 함수
    function sendmessage_user(){
        const messageText = document.getElementById('input_area').value;
        document.getElementById('input_area').value = '';
        if (messageText.trim() !== '') {
            //메시지 input이 비어있지 않다면
            createMessageBubble(messageText, 'self');
            user_message = messageText;//사용자가 작성한 메시지를 ai에게 전송하는데 사용해야하므로
            //messageInput.value = '';
        }

        setTimeout(() => createMessageBubble_ai(messageText), 100);//사용자의 메시지 전달 이후에는 ai와의 통신이 후행됨

    }

    //테스트용(삭제필요) 상대 관점 창
    // document.getElementById('practical_working_area').addEventListener('click', function() {
    //     const messageText = '9101823432';
    
    //     if (messageText.trim() !== '') {
    //         //메시지 input이 비어있지 않다면
    //         createMessageBubble(messageText, 'ai');
    //         //messageInput.value = '';
    //     }
    // });
});

//초기 대화 구성
function first_message_f(){
    var seleted_message = seleted_text + '에 대해서 ' + option_text;
    //1. 초기 대화 말풍선을 바로 생성. 진입과 동시에 대화를 해야하므로
    if (seleted_text !== ' ' && option_text !== ' ') {
        //선택된 텍스트, 옵션 전부 존재하는 경우
        console.log('[popup_3] seleted_message: ' + seleted_message);
        createMessageBubble(seleted_message, 'self');

        //2. ai를 호출해서 선택한 질문에 대한 답변을 얻어야한다. 데이터를 불러오는데 시간이 걸리므로 잠시 대기
        setTimeout(() => createMessageBubble_ai(seleted_message), 100);//ai 메시지 전송 프로세스 시작 함수, 인자는 ai에 전달해야할 텍스트
        //프레임 진입시 외부에서 선택한 데이터에 대한 메시지를 즉시 전송. 결과를 받아야 한다.
    } else {
        //오류로 인해 아무 텍스트, 데이터도 전달받지 못한 경우
        console.log('[popup_3] 선택된 텍스트, 옵션 전부 전달받지 못해 초기 대화를 구성하지 못함');
    }
}

//텍스트 버블 생성 함수 (사용자 관점)
function createMessageBubble(text, type) {

    const frame = document.createElement('div');
    frame.className = 'bubble_frame';
    //
    const messageBubble = document.createElement('div');
    messageBubble.addEventListener('click', function() {
        copyToClipboard(text);
    });
    messageBubble.className = 'message_bubble';
    if (type) {
        messageBubble.classList.add(type);
    }
    const content = document.createTextNode(text);
    messageBubble.appendChild(content);

    const chatArea = document.getElementById('practical_working_area');
    //chatArea.appendChild(messageBubble);
    frame.appendChild(messageBubble);
    document.getElementById('practical_working_area').appendChild(frame);
    chatArea.scrollTop = chatArea.scrollHeight;
}


//텍스트 버블 생성 함수 (ai 관점), (사용자 관점 텍스트 버블 생성 함수와 즉시 실행 연결됨)
function createMessageBubble_ai(message_text) {

    //1. 프레임을 만든다.
    const frame = document.createElement('div');
    frame.className = 'bubble_frame';
    
    //2. 말풍선을 만든다.
    const messageBubble = document.createElement('div');
    // messageBubble.addEventListener('click', function() {
    //     copyToClipboard(text);
    // });
    messageBubble.className = 'message_bubble';
    messageBubble.classList.add('ai');

    //3. ...이라는 말을 담은 말풍선을 만들어 그대로 append한다. 
    const content = document.createTextNode('...');
    messageBubble.appendChild(content);
    const chatArea = document.getElementById('practical_working_area');
    //chatArea.appendChild(messageBubble);
    frame.appendChild(messageBubble);
    document.getElementById('practical_working_area').appendChild(frame);
    chatArea.scrollTop = chatArea.scrollHeight;

    //4. chatgpt를 호출하기 위한 함수
    send_message_to_gpt(message_text);
}

function render_api_answer(result) {
    //5. 1초의 텀을 두고 메시지를 작성한다. <--------------------이 아래 과정은 chatgpt 비동기 호출 이후 프로세스이다. 따라서 통신 완료 이벤트에 넣는게 편할수도 있다. 안되면.
    last_child = document.getElementById('practical_working_area').lastChild;//...으로 둔 마지막 요소

    //...으로 둔 마지막 요소(의 프레임)를 삭제한다.
    document.getElementById('practical_working_area').removeChild(document.getElementById('practical_working_area').lastElementChild);
    
    //1. 프레임을 만든다.
    const frame = document.createElement('div');
    frame.className = 'bubble_frame';

    //2. 말풍선을 만든다.
    const messageBubble = document.createElement('div');
    messageBubble.addEventListener('click', function() {
        copyToClipboard(result);
    });
    messageBubble.className = 'message_bubble';
    messageBubble.classList.add('ai');

    // const content = document.createTextNode(chatgpt_message);//전역으로 선언한 메시지를 텍스트로 넣는다.
    // messageBubble.appendChild(content);

    const content = document.createTextNode('');
    messageBubble.appendChild(content);

    const chatArea = document.getElementById('practical_working_area');
    //chatArea.appendChild(messageBubble);
    frame.appendChild(messageBubble);
    document.getElementById('practical_working_area').appendChild(frame);

    (function() {
        var last_child = document.getElementById('practical_working_area').lastElementChild.firstChild;
        var text = result;
        var index = 0;
    
        function typeWriter() {
            if (index < text.length) {
                last_child.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 10); // 10ms 간격으로 타이핑 효과
            }
        }
    
        // 텍스트가 존재하면 타이핑 애니메이션 시작
        if (text) {
            typeWriter();
        }
    })();
    chatArea.scrollTop = chatArea.scrollHeight;
    //5. --------------------- 여기까지
}


function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    copy_alret();
}

function copy_alret(){
    const alret = document.createElement('div');
    alret.className = 'copy_alret';
    alret.style.opacity = '0';
    alret.style.width = '30%';
    alret.style.height = '10%';
    alret.style.top = '75%';
    alret.style.position = 'absolute';
    alret.style.left = '35%';
    alret.style.backgroundColor = 'rgb(112,112,112)';
    alret.style.transition = 'opacity 0.3s ease-in-out';
    alret.textContent = '복사되었습니다'
    document.getElementById('popup_3').appendChild(alret);
    setTimeout(() => {
        alret.style.opacity = 1;
    }, 10);
    setTimeout(() => {
        setTimeout(() => {
            alret.style.opacity = 0;
        }, 50);
    }, 2000);
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


//chatgpt 통신 부분 프로세스 함수
function send_message_to_gpt(message_text) {
    var result;//함수 내에서 임시로 결과를 저장하는 변수
    var option_applyed_question = '사용자는 ' + option_1[option_data.option_1] + '의 나이이고, 당신의 역할은 ' + option_2[option_data.option_2] + '입니다. 당신은 ' + option_3[option_data.option_3] + ' 말투로 ' + option_4[option_data.option_4] + ' 분야에 대해 한글로 답변하세요. ' + '질문: ' + message_text;


    //ai로부터 질문을 생성하도록 하는 코드
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
                content: option_applyed_question
            }],
            max_tokens: 1000  // 응답에 포함할 토큰의 최대 수
        })
    };

    fetch(apiUrl, request)
    .then(response => response.json())
    .then(data => {
        console.log('ChatGPT Response:', data);

        if (data.choices && data.choices.length > 0) {
            result = data.choices[0].message.content;
            render_api_answer(result);
        } else {
            console.error('Invalid response format from ChatGPT:', data);
        }
    })
    .catch(error => {
        console.error('Error sending message to ChatGPT:', error);
    });

    console.log(result);
}