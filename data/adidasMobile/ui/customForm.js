module.exports = `
    <style>
        .chk_box1,
        .rdo_box1{
        	display: inline-block;
        	position: relative;
        	font-size:13px;
        }
        .chk_box1>input,
        .rdo_box1>input{
        	opacity: 0;
        	position: absolute;
        	top: 0;
        	left: 0;
        }
        .chk_box1>input+label:before,.chk_box1>input+label:after,
        .rdo_box1>input+label:before,.chk_box1>input+label:after{
        	content:'';
        	display:inline-block;
        }

        .chk_box1>input+label:after,
        .rdo_box1>input+label:after{
        	display: none;
        }
        .chk_box1>input+label:before{
        	width: 20px;
        	height: 20px;
        	border:1px solid #b8b8b8;
        	vertical-align: middle;
        	margin-right: 5px;
        }
        .chk_box1.blue>input:checked+label:before{
        	background: #027dbf;
        	border-color: #027dbf;
        }

        .chk_box1.line_blue>input:checked+label:before{
        	border-color: #027dbf;
        }

        .chk_box1>input:checked + label:after{
        	content:'';
        	width: 12px;
        	height:5px;
        	display:block;
        	border-bottom:2px solid #000;
        	border-left:2px solid #000;
        	position: absolute;
        	top:6px;
            left:4px;
        	transform:rotate(-45deg);
        	-webkit-transform:rotate(-45deg);
        }

        .chk_box1.blue>input:checked+label:after{
        	border-color: #fff;
        }

        .chk_box1.line_blue>input:checked+label:after{
            border-color: #027dbf;
        }
        .rdo_box1>input+label:before{
        	width: 20px;
        	height: 20px;
        	border-radius:20px;
        	border:1px solid #b8b8b8;
        	vertical-align: middle;
        	margin-right: 5px;
        }
        .rdo_box1>input:checked + label:after{
        	content:'';
        	width: 10px;
        	height:10px;
        	border-radius:10px;
        	display:block;
        	background: #3a3a3a !important;
        	position: absolute;
        	top:6px;
            left:6px;
        }

        .rdo_box1.blue>input+label:before{
        	width: 20px;
        	height: 20px;
        	border-radius:20px;
        	border:1px solid #ebebeb;
        	background: #ebebeb;
        	vertical-align: middle;
        	margin-right: 5px;
        }

        .rdo_box1.blue>input + label:after{
        	content:'';
        	width: 10px;
        	height:10px;
        	border-radius:10px;
        	display:block;
        	background: #fff !important;
        	position: absolute;
        	top:6px;
            left:6px;
        }

        .rdo_box1.blue>input:checked + label:after{
        	background: #027dbf !important;
        }

    </style>
    <div class="code-wrap">
        <div class="prefix">체크박스</div>
        <div class="code-box">
            <pre class="brush: html">
                // 기본 체크박스
                <div class="chk_box1">
                    <input type="checkbox" id="check_basic">
                    <label for="check_basic">
                        타입1
                    </label>
                </div>
                // 체크시 파란박스
                <div class="chk_box1 blue">
                    <input type="checkbox" id="check_blue">
                    <label for="check_blue">
                        타입2
                    </label>
                </div>
            </pre>
        </div>

        <div class="result_box">

            <div class="chk_box1" style="margin-right:40px;">
                <input type="checkbox" id="check_basic">
                <label for="check_basic">
                    타입1
                </label>
            </div>

            <div class="chk_box1 blue">
                <input type="checkbox" id="check_blue">
                <label for="check_blue">
                    타입2
                </label>
            </div>

        </div>
    </div>



    <div class="code-wrap">
        <div class="prefix">라디오버튼</div>
        <div class="code-box">
            <pre class="brush: html">
                // 기본 라디오버튼
                <div class="rdo_box1">
                    <input type="radio" id="radio_real2" name="radio_group" value="OPS2">
                    <label for="cart_prod_all">
                        타입1
                    </label>
                </div>
                // 파란 라디오버튼
                <div class="rdo_box1 blue">
                    <input type="radio" id="order_mem2" name="order_choice" value="Y" checked="">
                    <label for="order_mem2" class="adipro-r" id="loginLabel">타입2</label>
                </div>
            </pre>
        </div>

        <div class="result_box">

            <div class="rdo_box1 blue" style="margin-right:40px;">
				<input type="radio" id="order_mem" name="order_choice" value="Y" checked="">
				<label for="order_mem" class="adipro-r" id="loginLabel">타입1</label>
			</div>

            <div class="rdo_box1 blue">
                <input type="radio" id="order_mem2" name="order_choice" value="Y" checked="">
                <label for="order_mem2" class="adipro-r" id="loginLabel">타입2</label>
            </div>

        </div>
    </div>

    <script type="text/javascript" src="//image.adidas.co.kr/js/customForm.js"></script>
    <script type="text/javascript">
        $.fn.cmtInputInit ();
    </script>

`;
