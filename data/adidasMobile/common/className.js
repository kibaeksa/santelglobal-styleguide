var objClassName = [
    {
        name : 'clearfix',
        desc : 'float 속성 제거 클래스'
    },
    {
        name : 'rating',
        desc : '별점',
        descCode : '<div class="rating-star"><div class="star-container"><div class="star-point" style="width:50%;"><img src="//image.adidas.co.kr/images/adidas/common/ico_rating.png" alt=""></div><div class="star-bg"><img src="//image.adidas.co.kr/images/adidas/common/ico_rating_empty.png" alt=""></div></div><div class="star-count">4.5/5</div></div>'
    },
    {
        name : 'price',
        desc : '가격',
        descCode : '<div class="price-container"><span class="prc line">249,000<span class="won">원</span></span><span class="prc sale">249,000<span class="won">원</span></span></div>'
    },
    {
        name : 'sel_boxtype sel_design',
        desc : '공통 셀렉트박스'
    },
    {
        name : 'button_area',
        desc : '공통 버튼'
    },
    {
        name : 'rdo_box1',
        desc : '공통 라디오버튼'
    },
    {
        name : 'chk_box1',
        desc : '공통 체크박스 버튼'
    },
    {
        name : 'icons',
        desc : '공통 아이콘'
    },
    {
        name : 'label',
        desc : '상품이미지 라벨',
        descCode : '<img src="/images/adidas-mobile-label.jpg" alt="">'

    },
    {
        name : 'header_layerpopup',
        desc : '모달 팝업 껍데기'
    }
];
module.exports = `
    <style>
        @font-face {
        	font-family: 'adinenuPro-bold';
        	src: url('//image.adidas.co.kr/fonts/adineuePro/eot/adineuePRO-Bold.eot');
        	src: url('//image.adidas.co.kr/fonts/adineuePro/woff/adineuePRO-Bold.woff') format('woff');
        }
        @font-face {
        	font-family: 'adinenuPro-regular';
        	src: url('//image.adidas.co.kr/fonts/adineuePro/eot/adineuePRO-Regular.eot');
        	src: url('//image.adidas.co.kr/fonts/adineuePro/woff/adineuePRO-Regular.woff') format('woff');
        }
        @font-face {
        	font-family: 'adinenuPro-light';
        	src: url('//image.adidas.co.kr/fonts/adineuePro/eot/adineuePRO-Light.eot');
        	src: url('//image.adidas.co.kr/fonts/adineuePro/woff/adineuePRO-Light.woff') format('woff');
        }
        @font-face {
        	font-family: 'adihaus-bold';
            src: url('//image.adidas.co.kr/fonts/adihaus/bold/ADIHDB.eot');
        	src: url('//image.adidas.co.kr/fonts/adihaus/bold/ADIHDB.eot?#iefix') format('embedded-opentype'),
        	     url('//image.adidas.co.kr/fonts/adihaus/bold/ADIHDB.ttf')  format('truetype');
        }
        @font-face {
        	font-family: 'adihaus';
            src: url('//image.adidas.co.kr/fonts/adihaus/regular/ADIHRG.eot');
        	src: url('//image.adidas.co.kr/fonts/adihaus/regular/ADIHRG.eot?#iefix') format('embedded-opentype'),
        	     url('//image.adidas.co.kr/fonts/adihaus/regular/ADIHRG.ttf')  format('truetype');
        }
        /* rating */
        .rating-star{
        	position: relative;
        }

        .rating-star::after{
        	content:'.'; display:block; height:0; font-size:0; clear:both; visibility:hidden;
        }

        .rating-star .star-container{
        	position: relative;
        	display: inline-block;
        	vertical-align: middle;
        }

        .rating-star .star-container .star-bg{
        	width: 100%;
        	position: absolute;
        	top: 0;
        	left: 0;
        }
        .rating-star .star-container .star-bg img{
        	width: 62px;
        }

        .rating-star .star-container .star-point{
        	position: relative;
        	overflow: hidden;
        }

        .rating-star .star-container .star-point img{
        	width: 62px;
        	vertical-align:top;
        }

        .rating-star .star-count{
        	padding-left: 5px;
        	display: inline-block;
        	vertical-align: middle;
        	color: #000;
        	font:13px/13px 'adinenuPro-light';
            letter-spacing:0;
        }

        /* price */
        .price-container{
        	display: inline-block;
        }

        .price-container .prc{
        	position: relative;
        	font:16px 'adihaus-bold';
        	color: #000;
        	vertical-align: baseline;
        }

        .price-container .prc .won{
        	margin-left: 1px;
        	color: #000;
        	font:12px 'noto sans kr';
        	vertical-align: baseline;
        }

        .price-container .prc.sale{
        	color: #c53622;
        }

        .price-container .prc.sale .won{
        	color: #c53622;
        }

        .price-container .prc.line{
        	margin-right: 5px;
        	font:15px 'adihaus';
        	color: #000;
        	text-decoration: line-through;
        }

        .price-container .prc.line .won{
        	color: #000;
        	font:12px 'NotoSansKRLight','Nanum Gothic';
        }
    </style>
    <ul class="classname-list">
    ${objClassName.map(v => (
        `
        <li>
            <div class="name">${v.name}</div>
            <div class="desc">${v.desc}</div>
            ${(v.descCode != undefined ? `<div class="code">${v.descCode}</div>` : '')}
        </li>
        `
    ))}
    </ul>
`;
