var selected_option = {
    base_selection_1 : ' ',
    base_selection_2 : ' ',
    option_1 : ' ', 
    option_2 : ' ', 
    option_3 : ' ', 
    option_4 : ' '  
};

//seletion_group_1
var seletion_group_1_1;
var seletion_group_1_2;
var seletion_group_1_3;
var seletion_group_1_4;
var seletion_group_1_5;

//seletion_group_2
var seletion_group_2_1;
var seletion_group_2_2;
var seletion_group_2_3;
var seletion_group_2_4;
var seletion_group_2_5;

//seletion_group_3
var seletion_group_3_1;
var seletion_group_3_2;
var seletion_group_3_3;
var seletion_group_3_4;
var seletion_group_3_5;

//seletion_group_4
var seletion_group_4_1;
var seletion_group_4_2;
var seletion_group_4_3;
var seletion_group_4_4;
var seletion_group_4_5;

//seletion_group_1
var seletion_group_1_1t;
var seletion_group_1_2t;
var seletion_group_1_3t;
var seletion_group_1_4t;
var seletion_group_1_5t;

//seletion_group_2
var seletion_group_2_1t;
var seletion_group_2_2t;
var seletion_group_2_3t;
var seletion_group_2_4t;
var seletion_group_2_5t;

//seletion_group_3
var seletion_group_3_1t;
var seletion_group_3_2t;
var seletion_group_3_3t;
var seletion_group_3_4t;
var seletion_group_3_5t;

//seletion_group_4
var seletion_group_4_1t;
var seletion_group_4_2t;
var seletion_group_4_3t;
var seletion_group_4_4t;
var seletion_group_4_5t;

//btn
var save_btn;
var cancle_btn;
var save_btnt;
var cancle_btnt;

//텍스트필드
var input_field_1;
var input_field_2;

//초기화 이벤트 함수
document.addEventListener('DOMContentLoaded', function() {
    seletion_group_1_1 = document.getElementById('seletion_group_1_1');
    seletion_group_1_2 = document.getElementById('seletion_group_1_2');
    seletion_group_1_3 = document.getElementById('seletion_group_1_3');
    seletion_group_1_4 = document.getElementById('seletion_group_1_4');
    seletion_group_1_5 = document.getElementById('seletion_group_1_5');
    seletion_group_2_1 = document.getElementById('seletion_group_2_1');
    seletion_group_2_2 = document.getElementById('seletion_group_2_2');
    seletion_group_2_3 = document.getElementById('seletion_group_2_3');
    seletion_group_2_4 = document.getElementById('seletion_group_2_4');
    seletion_group_2_5 = document.getElementById('seletion_group_2_5');
    seletion_group_3_1 = document.getElementById('seletion_group_3_1');
    seletion_group_3_2 = document.getElementById('seletion_group_3_2');
    seletion_group_3_3 = document.getElementById('seletion_group_3_3');
    seletion_group_3_4 = document.getElementById('seletion_group_3_4');
    seletion_group_3_5 = document.getElementById('seletion_group_3_5');
    seletion_group_4_1 = document.getElementById('seletion_group_4_1');
    seletion_group_4_2 = document.getElementById('seletion_group_4_2');
    seletion_group_4_3 = document.getElementById('seletion_group_4_3');
    seletion_group_4_4 = document.getElementById('seletion_group_4_4');
    seletion_group_4_5 = document.getElementById('seletion_group_4_5');
    input_field_1 = document.getElementById('input_area');
    input_field_2 = document.getElementById('input_area_2');

    seletion_group_1_1t = document.getElementById('ID1_1');
    seletion_group_1_2t = document.getElementById('ID1_2');
    seletion_group_1_3t = document.getElementById('ID1_3');
    seletion_group_1_4t = document.getElementById('ID1_4');
    seletion_group_1_5t = document.getElementById('ID1_5');
    seletion_group_2_1t = document.getElementById('ID2_1');
    seletion_group_2_2t = document.getElementById('ID2_2');
    seletion_group_2_3t = document.getElementById('ID2_3');
    seletion_group_2_4t = document.getElementById('ID2_4');
    seletion_group_2_5t = document.getElementById('ID2_5');
    seletion_group_3_5t = document.getElementById('ID3_1');
    seletion_group_3_4t = document.getElementById('ID3_2');
    seletion_group_3_3t = document.getElementById('ID3_3');
    seletion_group_3_2t = document.getElementById('ID3_4');
    seletion_group_3_1t = document.getElementById('ID3_5');
    seletion_group_4_1t = document.getElementById('ID4_1');
    seletion_group_4_2t = document.getElementById('ID4_2');
    seletion_group_4_3t = document.getElementById('ID4_3');
    seletion_group_4_4t = document.getElementById('ID4_4');
    seletion_group_4_5t = document.getElementById('ID4_5');

    save_btn = document.getElementById('save_btn');
    cancle_btn = document.getElementById('cancle_btn');
    save_btnt = document.getElementById('btn_text_1');
    cancle_btnt = document.getElementById('btn_text_2');

    //그룹 1 클릭 그룹
    seletion_group_1_1.addEventListener('click', function() {
        console.log('그룹1의 선택지 1이 클릭되었다.');
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_1 = '1';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_1_2.addEventListener('click', function() {
        console.log('그룹1의 선택지 2이 클릭되었다.');
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_1 = '2';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_1_3.addEventListener('click', function() {
        console.log('그룹1의 선택지 3이 클릭되었다.');
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_1 = '3';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_1_4.addEventListener('click', function() {
        console.log('그룹1의 선택지 4이 클릭되었다.');
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_1 = '4';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_1_5.addEventListener('click', function() {
        console.log('그룹1의 선택지 5이 클릭되었다.');
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_1 = '5';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });

    //그룹 2 클릭 그룹
    seletion_group_2_1.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_2 = '1';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_2_2.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_2 = '2';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_2_3.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_2 = '3';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_2_4.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_2 = '4';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_2_5.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_2 = '5';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    //그룹 3 클릭 그룹
    seletion_group_3_1.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_3 = '1';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_3_2.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_3 = '2';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_3_3.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_3 = '3';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_3_4.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_3 = '4';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_3_5.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_3 = '5';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    //그룹 4 클릭 그룹
    seletion_group_4_1.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_4 = '1';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_4_2.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_4 = '2';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_4_3.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_4 = '3';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_4_4.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_4 = '4';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_4_5.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_4 = '5';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    //그룹 1 클릭 그룹
    seletion_group_1_1t.addEventListener('click', function() {
        console.log('그룹1의 선택지 1이 클릭되었다.');
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_1 = '1';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_1_2t.addEventListener('click', function() {
        console.log('그룹1의 선택지 2이 클릭되었다.');
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_1 = '2';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_1_3t.addEventListener('click', function() {
        console.log('그룹1의 선택지 3이 클릭되었다.');
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_1 = '3';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_1_4t.addEventListener('click', function() {
        console.log('그룹1의 선택지 4이 클릭되었다.');
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_1 = '4';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_1_5t.addEventListener('click', function() {
        console.log('그룹1의 선택지 5이 클릭되었다.');
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_1 = '5';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });

    //그룹 2 클릭 그룹
    seletion_group_2_1t.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_2 = '1';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_2_2t.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_2 = '2';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_2_3t.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_2 = '3';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_2_4t.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_2 = '4';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_2_5t.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_2 = '5';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    //그룹 3 클릭 그룹
    seletion_group_3_1t.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_3 = '1';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_3_2t.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_3 = '2';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_3_3t.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_3 = '3';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_3_4t.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_3 = '4';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_3_5t.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_3 = '5';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    //그룹 4 클릭 그룹
    seletion_group_4_1t.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_4 = '1';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_4_2t.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_4 = '2';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_4_3t.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_4 = '3';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_4_4t.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_4 = '4';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });
    seletion_group_4_5t.addEventListener('click', function() {
        //1. 그룹에서 선택한 옵션을 삽입한다.
        selected_option.option_4 = '5';
        //2. 선택 상태를 랜더링하는 함수를 호출한다.
        render_selection_state();
    });


    //버튼 이벤트
    save_btn.addEventListener('click', function() {
        console.log('저장 버튼이 클릭되었다.');
        set_option_data();
        window.top.postMessage({message_type: 'option_save'},'*');
    });
    cancle_btn.addEventListener('click', function() {
        console.log('취소 버튼이 클릭되었다.');
        window.top.postMessage({message_type: 'option_cencle'},'*');
    });
    save_btnt.addEventListener('click', function() {
        console.log('저장 버튼이 클릭되었다.');
        set_option_data();
        window.top.postMessage({message_type: 'option_save'},'*');
    });
    cancle_btnt.addEventListener('click', function() {
        console.log('취소 버튼이 클릭되었다.');
        window.top.postMessage({message_type: 'option_cencle'},'*');
    });

    //스토리지 데이터 호출 명령 메시지 수신
    chrome.runtime.onMessage.addListener(function(message) {
        if (message.action === "to_popup_4_option_data") {
            console.log('content로부터 데이터를 가져오라는 메시지를 받았다.');
            get_option_data();
            setTimeout(() => {render_selection_state(), set_text_field()}, 200);
            console.log('get_option_data() 이후 현재 데이터의 상태: 1.'+selected_option.option_1+' 2.'+selected_option.option_2+' 3.'+selected_option.option_3+' 4.'+selected_option.option_4);
        }
    });
});




//선택한 선택지를 눈에 보이게 표시한다.
function render_selection_state() {
    //그룹 1의 경우
    switch(selected_option.option_1){
        case '1':
            design_apply(seletion_group_1_1);
            design_delete(seletion_group_1_2);
            design_delete(seletion_group_1_3);
            design_delete(seletion_group_1_4);
            design_delete(seletion_group_1_5);
            break;
        case '2':
            design_apply(seletion_group_1_2);
            design_delete(seletion_group_1_1);
            design_delete(seletion_group_1_3);
            design_delete(seletion_group_1_4);
            design_delete(seletion_group_1_5);
            break;
        case '3':
            design_apply(seletion_group_1_3);
            design_delete(seletion_group_1_2);
            design_delete(seletion_group_1_1);
            design_delete(seletion_group_1_4);
            design_delete(seletion_group_1_5);
            break;
        case '4':
            design_apply(seletion_group_1_4);
            design_delete(seletion_group_1_2);
            design_delete(seletion_group_1_3);
            design_delete(seletion_group_1_1);
            design_delete(seletion_group_1_5);
            break;
        case '5':
            design_apply(seletion_group_1_5);
            design_delete(seletion_group_1_2);
            design_delete(seletion_group_1_3);
            design_delete(seletion_group_1_4);
            design_delete(seletion_group_1_1);
            break;
    }

    switch(selected_option.option_2){
        case '1':
            design_apply(seletion_group_2_1);
            design_delete(seletion_group_2_2);
            design_delete(seletion_group_2_3);
            design_delete(seletion_group_2_4);
            design_delete(seletion_group_2_5);
            break;
        case '2':
            design_apply(seletion_group_2_2);
            design_delete(seletion_group_2_1);
            design_delete(seletion_group_2_3);
            design_delete(seletion_group_2_4);
            design_delete(seletion_group_2_5);
            break;
        case '3':
            design_apply(seletion_group_2_3);
            design_delete(seletion_group_2_2);
            design_delete(seletion_group_2_1);
            design_delete(seletion_group_2_4);
            design_delete(seletion_group_2_5);
            break;
        case '4':
            design_apply(seletion_group_2_4);
            design_delete(seletion_group_2_2);
            design_delete(seletion_group_2_3);
            design_delete(seletion_group_2_1);
            design_delete(seletion_group_2_5);
            break;
        case '5':
            design_apply(seletion_group_2_5);
            design_delete(seletion_group_2_2);
            design_delete(seletion_group_2_3);
            design_delete(seletion_group_2_4);
            design_delete(seletion_group_2_1);
            break;
    }

    switch(selected_option.option_3){
        case '1':
            design_apply(seletion_group_3_1);
            design_delete(seletion_group_3_2);
            design_delete(seletion_group_3_3);
            design_delete(seletion_group_3_4);
            design_delete(seletion_group_3_5);
            break;
        case '2':
            design_apply(seletion_group_3_2);
            design_delete(seletion_group_3_1);
            design_delete(seletion_group_3_3);
            design_delete(seletion_group_3_4);
            design_delete(seletion_group_3_5);
            break;
        case '3':
            design_apply(seletion_group_3_3);
            design_delete(seletion_group_3_2);
            design_delete(seletion_group_3_1);
            design_delete(seletion_group_3_4);
            design_delete(seletion_group_3_5);
            break;
        case '4':
            design_apply(seletion_group_3_4);
            design_delete(seletion_group_3_2);
            design_delete(seletion_group_3_3);
            design_delete(seletion_group_3_1);
            design_delete(seletion_group_3_5);
            break;
        case '5':
            design_apply(seletion_group_3_5);
            design_delete(seletion_group_3_2);
            design_delete(seletion_group_3_3);
            design_delete(seletion_group_3_4);
            design_delete(seletion_group_3_1);
            break;
    }

    switch(selected_option.option_4){
        case '1':
            design_apply(seletion_group_4_1);
            design_delete(seletion_group_4_2);
            design_delete(seletion_group_4_3);
            design_delete(seletion_group_4_4);
            design_delete(seletion_group_4_5);
            break;
        case '2':
            design_apply(seletion_group_4_2);
            design_delete(seletion_group_4_1);
            design_delete(seletion_group_4_3);
            design_delete(seletion_group_4_4);
            design_delete(seletion_group_4_5);
            break;
        case '3':
            design_apply(seletion_group_4_3);
            design_delete(seletion_group_4_2);
            design_delete(seletion_group_4_1);
            design_delete(seletion_group_4_4);
            design_delete(seletion_group_4_5);
            break;
        case '4':
            design_apply(seletion_group_4_4);
            design_delete(seletion_group_4_2);
            design_delete(seletion_group_4_3);
            design_delete(seletion_group_4_1);
            design_delete(seletion_group_4_5);
            break;
        case '5':
            design_apply(seletion_group_4_5);
            design_delete(seletion_group_4_2);
            design_delete(seletion_group_4_3);
            design_delete(seletion_group_4_4);
            design_delete(seletion_group_4_1);
            break;
    }
}

//선택여부에 따라 디자인 삽입
function design_apply(seletion) {
    seletion.style.fill = 'rgba(255,255,255,0.1)';
}

function design_delete(seletion) {
    seletion.style.fill = 'rgba(255,255,255,0.812)';
}


//데이터를 스토리지로부터 가져오는 함수
function get_option_data(){
    chrome.storage.sync.get(['base_selection_1'], function(result) {
        selected_option.base_selection_1 = result.base_selection_1;
        console.log('selected_option.base_selection_1의 데이터가 호출되었다 '+result.base_selection_1);
    });
    chrome.storage.sync.get(['base_selection_2'], function(result) {
        selected_option.base_selection_2 = result.base_selection_2;
        console.log('selected_option.base_selection_2의 데이터가 호출되었다 '+result.base_selection_2);
    });
    chrome.storage.sync.get(['option_1'], function(result) {
        selected_option.option_1 = result.option_1;
        console.log('option_1의 데이터가 호출되었다 '+result.option_1);
    });
    chrome.storage.sync.get(['option_2'], function(result) {
        selected_option.option_2 = result.option_2;
        console.log('option_2의 데이터가 호출되었다 '+result.option_2);
    });
    chrome.storage.sync.get(['option_3'], function(result) {
        selected_option.option_3 = result.option_3;
        console.log('option_3의 데이터가 호출되었다 '+result.option_3);
    });
    chrome.storage.sync.get(['option_4'], function(result) {
        selected_option.option_4 = result.option_4;
        console.log('option_4의 데이터가 호출되었다 '+result.option_4);
    });
}

//데이터를 스토리지에 저장하는 함수
function set_option_data() {
    chrome.storage.sync.set({
        'base_selection_1': document.getElementById('input_area').value,
    }, function() {
        console.log('데이터가 저장되었다.');
    });
    chrome.storage.sync.set({
        'base_selection_2': document.getElementById('input_area_2').value,
    }, function() {
        console.log('데이터가 저장되었다.');
    });
    chrome.storage.sync.set({
        'option_1': selected_option.option_1,
    }, function() {
        console.log('데이터가 저장되었다.');
    });
    chrome.storage.sync.set({
        'option_2': selected_option.option_2,
    }, function() {
        console.log('데이터가 저장되었다.');
    });
    chrome.storage.sync.set({
        'option_3': selected_option.option_3,
    }, function() {
        console.log('데이터가 저장되었다.');
    });
    chrome.storage.sync.set({
        'option_4': selected_option.option_4,
    }, function() {
        console.log('데이터가 저장되었다.');
    });
}

function set_text_field() {
    document.getElementById('input_area').value = selected_option.base_selection_1;
    document.getElementById('input_area_2').value = selected_option.base_selection_2;
}