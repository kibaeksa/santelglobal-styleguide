module.exports = `
    <div>
        <ul style="margin-bottom:30px;">
            <li style="margin-bottom:3px;font-size:13px;">* 팝업은 <strong style="font:700 italic 14px 'noto sans kr';">modal-popup-wrapper</strong> 클래스를 넣어주어야 합니다.</li>
            <li style="font-size:13px;">* 클릭부분은 <strong style="font:700 italic 14px 'noto sans kr';">modal-popup-click</strong> 클래스를 넣어주어야 합니다.</li>
        </ul>
    </div>

    <div class="code-wrap js_obj_guide">
        <div class="prefix">스크립트로 정의</div>
        <div class="code-box">
            <pre class="brush: js">
                {
                    name : String                                  //   팝업이름
                    width : Number                                 //   가로크기
                    height : Number                                //   세로크기
                    autoOpen : Boolean                             //   자동오픈 여부
                    htmlString : {                                 //   header의 제목 / body 내용(html)
                        title : String                             //   팝업 header 제목
                        contents : String                          //   팝업 body 내용
                    }
                    disableClose : Boolean                         //   기본 닫기기능 제거 ( X 버튼 , background 클릭 )
                    onload : function(obj){                        //   로드 되었을 때 실행되는 콜백함수

                    },
                    onopen : function(obj){                        //   팝업이 열릴 때 마다 실행되는 콜백함수

                    },
                    onclose : function(obj){                       //   팝업이 닫힐 때 마다 실행되는 콜백함수

                    },
                    buttons : [                                    //   하단에 버튼 커스터마이징
                        {
                            text : String                          //   버튼의 글자
                            className : String                     //   버튼에 추가 될 클래스 (복수 클래스 선언 시 공백으로 구분)
                            link : String                          //   링크
                            attrs : {                              //   버튼에 추가 될 html 속성들 정의
                                html속성이름 : String
                            }
                            callback : function(event , obj){      // 클릭 시 실행되는 콜백함수

                            }
                        }
                    ]


                }
            </pre>
        </div>

        <div class="prefix" style="margin-top:30px;">예제</div>
        <div class="code-box">
            <pre class="brush: js">
                ModalPopup.init({
                    name : 'modal-dialog',
                    width : 500,
                    height : 300,
                    autoOpen : true,  /* 예제에서 autoOpen 은 정신이 없어서 뺌.. */
                    htmlString : {
                        contents : '<div style="margin-bottom:10px;font:500 14px/14px \\'NotoSansKR\\';color:#000;">진행 하시겠습니까?</div>'
                    },
                    disableClose : true,
                    onload : function(obj){
                        console.log(obj.name,' is loaded');
                    },
                    onopen : function(obj){
                        console.log(obj.name,' is opened');
                    },
                    onclose : function(obj){
                        console.log(obj.name,' is closed');
                    },
                    buttons : [
                        {
                            text : '확인',
                            className : 'btn-ctm btn-blue',
                            callback : function(event , obj){
                                alert('확인')
                            }
                        },
                        {
                            text : '취소',
                            className : 'btn-ctm btn-gray',
                            callback : function(event , obj){
                                alert('취소');
                            }
                        },
                        {
                            text : '닫기',
                            className : 'btn-ctm btn-lgray',
                            callback : function(event , obj){
                                ModalPopup.closePopup(obj.name);
                            }
                        },
                        {
                            text : '아디다스 온라인스토어 바로가기',
                            link : 'http://shop.adidas.co.kr',
                            className : 'btn-ctm',
                            attrs : {
                                target : '_blank',
                                dataTest : 'HEY'
                            }
                        }
                    ]
                });
            </pre>
        </div>
        <div class="result_box">
            <button class="modal-popup-click" data-modalpop-click="modal-dialog">팝업 열기</button>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">전체팝업 이벤트 바인딩</div>
        <div class="code-box">
            <pre class="brush: js">
                ModalPopup.bind({
                    onload : function(obj){
                        console.log(obj.name);
                        console.log('전체팝업 onload 이벤트 바인딩');
                        console.log('-----------------');
                    },
                    onopen : function(obj){
                        console.log(obj.name);
                        console.log('전체팝업 onopen 이벤트 바인딩');
                        console.log('-----------------');
                    },
                    onclose : function(obj){
                        console.log(obj.name);
                        console.log('전체팝업 onclose 이벤트 바인딩');
                        console.log('-----------------');
                    }
                });
            </pre>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">특정 팝업 이벤트 바인딩</div>
        <div class="code-box">
            <pre class="brush: js">
                ModalPopup.bind('default-popup',{
                    onload : function(obj){
                        console.log('기본팝업 LOADED');
                    },
                    onopen : function(obj){
                        alert('기본팝업 OPEN');
                    },
                    onclose : function(obj){
                        alert('기본팝업 CLOSE');
                    }
                });
            </pre>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">스크립트에서 팝업열기</div>
        <div class="code-box">
            <pre class="brush: js">
                ModalPopup.openPopup('popupName');
            </pre>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">스크립트에서 팝업닫기</div>
        <div class="code-box">
            <pre class="brush: js">
                ModalPopup.closePopup('popupName');
            </pre>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">기본 팝업 / 이벤트 바인딩</div>
        <div class="code-box">
            <pre class="brush: html">
                &lt;div class="modal-popup-wrapper"
                     data-modalpop=""
                     data-modalpop-name="default-popup"
                     data-modalpop-width="600"
                     data-modalpop-height="500"
                &gt;
                    &lt;div class="overlay"&gt;&lt;/div&gt;
                    &lt;div class="popup"&gt;
                        &lt;div class="popup-header"&gt;
                            &lt;h2&gt;팝업 제목&lt;/h2&gt;
                            &lt;a href="javascript:void(0)" class="close"&gt;&lt;span class="spt_bg"&gt;&lt;/span&gt;&lt;/a&gt;
                        &lt;/div&gt;
                        &lt;div class="popup-contents"&gt;
                            팝업내용
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;

                &lt;button class="modal-popup-click" data-modalpop-click="default-popup"&gt;팝업 열기&lt;/button&gt;
            </pre>
        </div>

        <div class="code-box">
            <pre class="brush: js">
                ModalPopup.bind('default-popup',{
                    onload : function(obj){
                        console.log('기본팝업 LOADED');
                    },
                    onopen : function(obj){
                        alert('기본팝업 OPEN');
                    },
                    onclose : function(obj){
                        alert('기본팝업 CLOSE');
                    }
                });
            </pre>
        </div>


        <div class="result_box">
            <button class="modal-popup-click" data-modalpop-click="default-popup-real">팝업 열기</button>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">윈도우 로딩 시 자동오픈 팝업</div>
        <div class="code-box">
            <pre class="brush: html">
                &lt;div class="modal-popup-wrapper"
                     data-modalpop=""
                     data-modalpop-name="fade-popup"
                     data-modalpop-width="600"
                     data-modalpop-height="500"
                     data-modalpop-autoopen=""
                &gt;
                    &lt;div class="overlay"&gt;&lt;/div&gt;
                    &lt;div class="popup"&gt;
                        &lt;div class="popup-header"&gt;
                            &lt;h2&gt;자동오픈 팝업&lt;/h2&gt;
                            &lt;a href="javascript:void(0)" class="close"&gt;&lt;span class="spt_bg"&gt;&lt;/span&gt;&lt;/a&gt;
                        &lt;/div&gt;
                        &lt;div class="popup-contents"&gt;
                            팝업내용
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;

            </pre>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">페이드인 효과 팝업</div>
        <div class="code-box">
            <pre class="brush: html">
                &lt;div class="modal-popup-wrapper"
                     data-modalpop=""
                     data-modalpop-name="fade-popup"
                     data-modalpop-width="600"
                     data-modalpop-height="500"
                     data-modalpop-fade=""
                &gt;
                    &lt;div class="overlay"&gt;&lt;/div&gt;
                    &lt;div class="popup"&gt;
                        &lt;div class="popup-header"&gt;
                            &lt;h2&gt;팝업 제목&lt;/h2&gt;
                            &lt;a href="javascript:void(0)" class="close"&gt;&lt;span class="spt_bg"&gt;&lt;/span&gt;&lt;/a&gt;
                        &lt;/div&gt;
                        &lt;div class="popup-contents"&gt;
                            팝업내용
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;

                &lt;button class="modal-popup-click" data-modalpop-click="fade-popup"&gt;팝업 열기&lt;/button&gt;

            </pre>
        </div>

        <div class="result_box">
            <button class="modal-popup-click" data-modalpop-click="fade-popup-real">팝업 열기</button>
        </div>
    </div>



    <div class="modal-popup-wrapper"
         data-modalpop=""
         data-modalpop-name="default-popup-real"
         data-modalpop-width="600"
         data-modalpop-height="500"
    >
        <div class="overlay"></div>
        <div class="popup">
            <div class="popup-header">
                <h2>기본 팝업</h2>
                <a href="javascript:void(0)" class="close"><span class="spt_bg"></span></a>
            </div>
            <div class="popup-contents">
                팝업내용
            </div>
        </div>
    </div>

    <div class="modal-popup-wrapper"
         data-modalpop=""
         data-modalpop-name="fade-popup-real"
         data-modalpop-width="600"
         data-modalpop-height="500"
         data-modalpop-fade=""
    >
        <div class="overlay"></div>
        <div class="popup">
            <div class="popup-header">
                <h2>페이드인 팝업</h2>
                <a href="javascript:void(0)" class="close"><span class="spt_bg"></span></a>
            </div>
            <div class="popup-contents">
                팝업내용
            </div>
        </div>
    </div>

    <div class="modal-popup-wrapper"
         data-modalpop=""
         data-modalpop-name="auto-popup-real"
         data-modalpop-width="600"
         data-modalpop-height="500"
         data-modalpop-autoopen=""
    >
        <div class="overlay"></div>
        <div class="popup">
            <div class="popup-header">
                <h2>자동오픈 팝업</h2>
                <a href="javascript:void(0)" class="close"><span class="spt_bg"></span></a>
            </div>
            <div class="popup-contents">
                팝업내용
            </div>
        </div>
    </div>

    <script type="text/javascript" src="/js/modalPopup.js"></script>
    <style>
        #wrap #contents .code-wrap .syntaxhighlighter table td.code .line.alt1{
            background:#eee !important;
        }
        #wrap #contents .code-wrap .syntaxhighlighter table td.gutter .line.alt1{
            background:#eee !important;
        }
    </style>


    <script>
        ModalPopup.init({
            name : 'modal-dialog',
            width : 500,
            height : 300,
            htmlString : {
                contents : '<div style="margin-bottom:10px;font:500 14px/14px \\'NotoSansKR\\';color:#000;">진행 하시겠습니까?</div>'
            },
            disableClose : true,
            onload : function(obj){
                console.log(obj.name,' is loaded');
            },
            onopen : function(obj){
                console.log(obj.name,' is opened');
            },
            onclose : function(obj){
                console.log(obj.name,' is closed');
            },
            buttons : [
                {
                    text : '확인',
                    className : 'btn-ctm btn-blue',
                    callback : function(event , obj){
                        alert('확인')
                    }
                },
                {
                    text : '취소',
                    className : 'btn-ctm btn-gray',
                    callback : function(event , obj){
                        alert('취소');
                    }
                },
                {
                    text : '닫기',
                    className : 'btn-ctm btn-lgray',
                    callback : function(event , obj){
                        ModalPopup.closePopup(obj.name);
                    }
                },
                {
                    text : '아디다스 온라인스토어 바로가기',
                    link : 'http://shop.adidas.co.kr',
                    className : 'btn-ctm',
                    attrs : {
                        target : '_blank',
                        dataTest : 'HEY'
                    }
                }
            ]
        });

        ModalPopup.bind('default-popup-real',{
            onload : function(obj){
                console.log('기본팝업 LOADED');
            },
            onopen : function(obj){
                alert('기본팝업 OPEN');
            },
            onclose : function(obj){
                alert('기본팝업 CLOSE');
            }
        });

        ModalPopup.bind({
            onload : function(obj){
                console.log(obj.name);
                console.log('전체팝업 onload 이벤트 바인딩');
                console.log('-----------------');
            },
            onopen : function(obj){
                console.log(obj.name);
                console.log('전체팝업 onopen 이벤트 바인딩');
                console.log('-----------------');
            },
            onclose : function(obj){
                console.log(obj.name);
                console.log('전체팝업 onclose 이벤트 바인딩');
                console.log('-----------------');
            }
        });


    </script>

`;
