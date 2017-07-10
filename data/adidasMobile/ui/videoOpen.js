module.exports = `
    <style type="text/css">



    </style>
    <div class="code-wrap">

        <div class="code-box">
            <pre class="brush: js">
                /*
                    * openModalVideoViewer 함수
                      파라미터로 유투브 아이디 전달
                      ex ) <button onclick="openModalVideoViewer('EspMCuyslXY')">영상 열기</button>
                */


            </pre>
        </div>

        <div class="result_box">

            <button onclick="openModalVideoViewer('EspMCuyslXY')">영상 열기</button>

        </div>
    </div>



    <script src="http://imagem.adidas.co.kr/MO/js/jquery/jquery-1.4.2.js"></script>
    <script src="http://imagem.adidas.co.kr/js/swipe.js"></script>


    <script type="text/javascript">
        var adiApp = {};
        (function($){
            adiApp.getNodefromString = function (htmlString) {
            	var dummy = document.createElement('div');
            	dummy.innerHTML = htmlString;
            	return dummy.children[0];
            };
            window.openModalVideoViewer = function (ytbId, width, height) {
        		var popElem = void 0;
        		var htmlString = '<div id="video-modal-popup" style="width:100%;height:100%;position:fixed;top:0;left:0;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:301;opacity:0;transition:opacity 0.3s;-webkit-transition:opacity 0.3s;">';
        		htmlString += '	<div class="overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;box-sizing:border-box;-webkit-box-sizing:border-box;background:rgba(0,0,0,0.8);"></div>';
        		htmlString += '	<div class="popup" style="width:80%;height:60%;position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);-webkit-transform:translate3d(-50%,-50%,0);box-sizing:border-box;-webkit-box-sizing:border-box;transition:opacity 0.3s;-webkit-transition:opacity 0.3s;opacity:1">';
        		htmlString += '		<a href="javascript:void(0)" class="close_x_btn white" style="width:50px;height:50px;position:absolute;top:-50px;right:0;background:#000;"></a>';
        		htmlString += '		<iframe class="video" id="main_video" frameborder="0" allowfullscreen="1" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/' + ytbId + '?rel=0"></iframe>';
        		htmlString += '	</div>';
        		htmlString += '</div">';

        		document.getElementsByTagName('body')[0].appendChild(adiApp.getNodefromString(htmlString));
        		popElem = document.getElementById('video-modal-popup');

        		var pm = new Promise(function (resolve, reject) {
        			setTimeout(function () {
        				popElem.style.opacity = 1;
        				resolve();
        			}, 10);
        		});
        		pm.then(function (data) {
        			setTimeout(function () {
        				popElem.querySelector('.popup').style.opacity = 1;
        			}, 500);
        		});

        		popElem.querySelector('.overlay').addEventListener('click', function (e) {
        			popElem.parentNode.removeChild(popElem);
        		});

        		popElem.querySelector('.close_x_btn').addEventListener('click', function (e) {
        			popElem.parentNode.removeChild(popElem);
        		});
        	};

        })(jQuery);
    </script>


`;
