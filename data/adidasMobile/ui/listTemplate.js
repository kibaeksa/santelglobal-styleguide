module.exports = `
    <div class="code-wrap">
        <div class="prefix">타이픈 (-) 리스트</div>
        <div class="code-box">
            <pre class="brush: html">
                <ul class="li_hypn">
                    <li>첫번째 리스트</li>
                    <li>두번째 리스트</li>
                    <li>세번째 리스트</li>
                    <li>네번째 리스트</li>
                </ul>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <ul class="li_hypn">
                <li>첫번째 리스트</li>
                <li>두번째 리스트</li>
                <li>세번째 리스트</li>
                <li>네번째 리스트</li>
            </ul>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">점 리스트</div>
        <div class="code-box">
            <pre class="brush: html">
                <ul class="li_dot">
                    <li>첫번째 리스트</li>
                    <li>두번째 리스트</li>
                    <li>세번째 리스트</li>
                    <li>네번째 리스트</li>
                </ul>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <ul class="li_dot">
                <li>첫번째 리스트</li>
                <li>두번째 리스트</li>
                <li>세번째 리스트</li>
                <li>네번째 리스트</li>
            </ul>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">숫자 리스트</div>
        <div class="code-box">
            <pre class="brush: html">
                <ul class="li_num">
                    <li>첫번째 리스트</li>
                    <li>두번째 리스트</li>
                    <li>세번째 리스트</li>
                    <li>네번째 리스트</li>
                </ul>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <ol class="li_num">
                <li>첫번째 리스트</li>
                <li>두번째 리스트</li>
                <li>세번째 리스트</li>
                <li>네번째 리스트</li>
            </ol>
        </div>
    </div>

    <style>
    /* hyphen list */
    .li_hypn li{
        position: relative;
        padding-left: 10px;
        font-size: 13px;
    }
    .li_hypn li:before{
        content:'-';
        position: absolute;
        top: 0;
        left: 0;
    }

    .li_dot li{
        position: relative;
        padding-left:7px;
        font-size: 13px;
    }
    .li_dot li:before{
        content:'';
        width: 2px;
        height: 2px;
        position: absolute;
        top:5px;
        left: 0;
        background: #505050;
    }

    .li_num{
        counter-reset:num;
    }

    .li_num li{
        padding-left: 12px;
        position: relative;
    }

    .li_num li::before{
        position: absolute;
        top: 0;
        left: 0;
        content:counter(num)'. ';
        counter-increment: num;
    }
    </style>

`;
