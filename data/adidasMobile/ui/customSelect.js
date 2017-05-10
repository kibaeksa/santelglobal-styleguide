module.exports = `
    <style>
        .sel_boxtype{
            position: relative;
        }
        .sel_boxtype select{
            height: 45px;
        }
        /* image slide left,right button */
        .slide_btn_left,.slide_btn_right{
        	width: 40px;
        	height: 50px;
        	display: block;
        	position: absolute;
        	top: 0;
        }
        .slide_btn_left{
        	left: 0;
        }
        .slide_btn_right{
        	right: 0;
        }
        .slide_btn_left:before,.slide_btn_right:before,
        .slide_btn_left:after,.slide_btn_right:after{
        	content:'';
        	display: block;
        	position: absolute;
        	width: 40%;
        	height: 1px;
        	background: #fff;
        	position: absolute;
        	left: 50%;
        	top: 50%;

        	transform:rotate(45deg) translate3d(-50%,-50%,0);
        	-webkit-transform:rotate(45deg) translate3d(-50%,-50%,0);
        }
        .slide_btn_right:after{
        	transform:rotate(-45deg) translate3d(-50%,-50%,0);
        	-webkit-transform:rotate(-45deg) translate3d(-50%,-50%,0);
        }
        .slide_btn_left:after,.slide_btn_left:before{
        	transform-origin:-50% 50%;
        	-webkit-transform-origin:-50% 50%;
        }
        .slide_btn_left:after{
        	transform:rotate(-45deg) translate3d(-50%,-50%,0);
        	-webkit-transform:rotate(-45deg) translate3d(-50%,-50%,0);
        }
        /* design select box - common type */
        .sel_design{
        	position: relative;
        	box-sizing:border-box;
        	-webkit-box-sizing:border-box;
        }

        .sel_design>a{
        	width: 100%;
        	height: 100%;
        	padding:15px 0 0 10px;
        	position: absolute;
        	top: 0;
        	left: 0;
        	z-index:5;
        	border:1px solid #e6e6e6;
        	box-sizing:border-box;
        	-webkit-box-sizing:border-box;
        	color:#000;
        	font-size:12px;
        	background: #fff;
        }

        .sel_design.focused>a{
        	/*background: #000;*/
        	/*border:4px solid #000;*/
        	-webkit-animation: size-error-blink 1s ease 5;
        	-webkit-animation-iteration-count:infinite;
        	animation: size-error-blink 1s ease 5;
        	animation-iteration-count:infinite;
        }

        .sel_design.focused_line::before{
        	content:'';
        	width: 100%;
        	height: 100%;
        	box-sizing: border-box;
        	-webkit-box-sizing: border-box;
        	border: 3px solid #027dbf;
        	position: absolute;
        	top: 0;
        	left: 0;
        	opacity: 0;
        	z-index: 9;

        	-webkit-animation: size-error-line 1s ease 5;
        	-webkit-animation-iteration-count:infinite;
        	animation: size-error-line 1s ease 5;
        	animation-iteration-count:infinite;
        }

        .sel_design>select{
        	width: 100%;
        	-webkit-appearance: none;
        	-moz-appearance: none;
        	border-radius:0;
        	border-width:0;
        	color: #000;
        	position: relative;
        	opacity: 0;
        	z-index:10
        }

        .sel_design>select:disabled+a{
        	background: #eee;
        	color: #999;
        }

        .sel_design>select:disabled+a::before{
        	background: #eee;
        }

        .sel_design>select:disabled+a::after{
        	border-top-color: #ccc;
        }

        .sel_design>select:disabled+a.toggle_arw::before,
        .sel_design>select:disabled+a.toggle_arw::after{
        	background: #ccc;
        }

        /*  toggle +/-  button */
        .toggle_arw:before,
        .toggle_arw:after{
        	transform-origin:50% 50%;
        	-webkit-transform-origin:50% 50%;
        	content:'';
        	width:12px;
        	height:4px;
        	background: #000;
        	position: absolute;
        	top:50%;
        	box-sizing:border-box;
        	-webkit-box-sizing:border-box;
        	transition:all 0.3s cubic-bezier(1,0,0,1);
        	-webkit-transition:all 0.3s cubic-bezier(1,0,0,1);
        }

        .toggle_arw:before{
        	right:21px;
        	transform:rotate(45deg);
        	-webkit-transform:rotate(45deg);
        }

        .toggle_arw:after{
        	right:15px;
        	transform:rotate(-45deg);
        	-webkit-transform:rotate(-45deg);
        }

        .toggle_arw.open:before{
        	right:21px;
        	transform:rotate(-45deg);
        	-webkit-transform:rotate(-45deg);
        }

        .toggle_arw.open:after{
        	right:15px;
        	transform:rotate(45deg);
        	-webkit-transform:rotate(45deg);
        }
        #nav_menu_overlay{display:none !important;}

    </style>
    <div class="code-wrap">
        <div class="prefix">기본 셀렉트박스</div>
        <div class="code-box">
            <pre class="brush: html">
                <div class="sel_boxtype sel_design">
                    <a href="#" class="toggle_arw"><span>베스트순</span></a>
                    <select name="order_by" id="order_by">
                        <option value="1" selected="">베스트순</option>
                        <option value="2">신상품순</option>
                        <option value="5">상품평순</option>
                        <option value="3">높은가격순</option>
                        <option value="4">낮은가격순</option>
                    </select>
                </div>
            </pre>
        </div>

        <div class="result_box" style="width:400px;">

            <div class="sel_boxtype sel_design">
                <a href="#" class="toggle_arw"><span>베스트순</span></a>
                <select name="order_by" id="order_by">
                    <option value="1" selected="">베스트순</option>
                    <option value="2">신상품순</option>
                    <option value="5">상품평순</option>
                    <option value="3">높은가격순</option>
                    <option value="4">낮은가격순</option>
                </select>
            </div>

        </div>
    </div>



    <script type="text/javascript" src="http://imagem.adidas.co.kr/js/adidas/common.js"></script>
    <script type="text/javascript">

    </script>

`;
