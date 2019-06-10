module.exports = `
    <style type="text/css">
        .result_box div{
            margin-bottom:3px;
        }
        @font-face{
        	font-family: 'NotoSansKR';
            font-weight:700;
        	src: url('//image.reebok.co.kr/fonts/NotoSansKr/woff/NotoSansKr-bold.woff') format('woff');
        }

        @font-face{
        	font-family: 'NotoSansKR';
            font-weight:100;
        	src: url('//image.reebok.co.kr/fonts/NotoSansKr/woff/NotoSansKr-thin.woff') format('woff');
        }

        @font-face{
        	font-family: 'NotoSansKR';
            font-weight:300;
        	src: url('//image.reebok.co.kr/fonts/NotoSansKr/woff/NotoSansKr-light.woff') format('woff');
        }

        @font-face{
        	font-family: 'NotoSansKR';
            font-weight:400;
        	src: url('//image.reebok.co.kr/fonts/NotoSansKr/woff/NotoSansKr-regular.woff') format('woff');
        }

        @font-face{
        	font-family: 'NotoSansKR';
            font-weight:500;
        	src: url('//image.reebok.co.kr/fonts/NotoSansKr/woff/NotoSansKr-medium.woff') format('woff');
        }

        @font-face {
        	font-family: 'reefont-bold';
            src: url('//image.reebok.co.kr/fonts/reefont/eot/reefont-bold-webfont.eot');
        	src: url('//image.reebok.co.kr/fonts/reefont/eot/reefont-bold-webfont.eot?#iefix') format('embedded-opentype'),
        		 url('//image.reebok.co.kr/fonts/reefont/woff/reefont-bold-webfont.woff') format('woff');
        }

        @font-face {
            font-family: 'reefont';
            src: url('//image.reebok.co.kr/fonts/reefont/eot/reefont-regular-webfont.eot');
        	src: url('//image.reebok.co.kr/fonts/reefont/eot/reefont-regular-webfont.eot?#iefix') format('embedded-opentype'),
        		 url('//image.reebok.co.kr/fonts/reefont/woff/reefont-regular-webfont.woff')  format('woff');
        }

        @font-face {
          font-family: 'ReefontCondensed';
          src: url('//image.reebok.co.kr/fonts/reefont/eot/reefont-condensed-webfont.eot');
          src: url('//image.reebok.co.kr/fonts/reefont/woff/reefont-condensed-webfont.woff') format('woff');
        }

        @font-face {
          font-family: 'DINWebPro-CondLight';
          src: url('//image.reebok.co.kr/fonts/dinWebpro/eot/DINWebPro-CondLight.eot');
          src: url('//image.reebok.co.kr/fonts/dinWebpro/woff/DINWebPro-CondLight.woff') format('woff');
        }

        @font-face {
          font-family: 'DINWebPro-Cond';
          src: url('//image.reebok.co.kr/fonts/dinWebpro/eot/DINWebPro-Cond.eot');
          src: url('//image.reebok.co.kr/fonts/dinWebpro/woff/DINWebPro-Cond.woff') format('woff');
        }

        @font-face {
          font-family: 'DINWebPro-CondMedium';
          src: url('//image.reebok.co.kr/fonts/dinWebpro/eot/DINWebPro-CondMedium.eot');
          src: url('//image.reebok.co.kr/fonts/dinWebpro/woff/DINWebPro-CondMedium.woff') format('woff');
        }

        @font-face {
          font-family: 'DINWebPro-CondBold';
          src: url('//image.reebok.co.kr/fonts/dinWebpro/eot/DINWebPro-CondBold.eot');
          src: url('//image.reebok.co.kr/fonts/dinWebpro/woff/DINWebPro-CondBold.woff') format('woff');
        }

        @font-face {
          font-family: 'DINWebPro-CondBlack';
          src: url('//image.reebok.co.kr/fonts/dinWebpro/eot/DINWebPro-CondBlack.eot'),
          	   url('//image.reebok.co.kr/fonts/dinWebpro/otf/DINWebPro-CondBlack.otf') format('truetype');
        }

        @font-face {
        	font-family: 'dinpro';
            src: url('//image.reebok.co.kr/fonts/dinpro/DINPro-Regular.eot');
            src: url('//image.reebok.co.kr/fonts/dinpro/DINPro-Regular.eot?#iefix') format('embedded-opentype'),
        		 url('//image.reebok.co.kr/fonts/dinpro/DINPro-Regular.woff2') format('woff2'),
        		 url('//image.reebok.co.kr/fonts/dinpro/DINPro-Regular.woff') format('woff'),
        		 url('//image.reebok.co.kr/fonts/dinpro/DINPro-Regular.ttf') format('truetype');
        }

        @font-face {
        	font-family: 'dinpro bold';
            src: url('//image.reebok.co.kr/fonts/dinpro/DINPro-Bold.eot');
            src: url('//image.reebok.co.kr/fonts/dinpro/DINPro-Bold.eot?#iefix') format('embedded-opentype'),
        		 url('//image.reebok.co.kr/fonts/dinpro/DINPro-Bold.woff2') format('woff2'),
        		 url('//image.reebok.co.kr/fonts/dinpro/DINPro-Bold.woff') format('woff'),
        		 url('//image.reebok.co.kr/fonts/dinpro/DINPro-Bold.ttf') format('truetype');
        }

        @font-face {
          font-family: 'dinpro black';
          src: url('//image.reebok.co.kr/fonts/dinpro/DINPro-Black.eot'),
               url('//image.reebok.co.kr/fonts/dinpro/DINPro-Black.ttf') format('truetype');
        }

        @font-face {
          font-family: 'QStencil';
          src: url('//image.reebok.co.kr/fonts/QStencil/eot/Q-Stencil.eot');
          src: url('//image.reebok.co.kr/fonts/QStencil/woff/Q-Stencil.woff') format('woff');
        }

        @font-face{
            font-family: 'FrankRuhlLibre';
            font-weight: 700;
            src: url('//image.reebok.co.kr/fonts/FrankRuhlLibre/FrankRuhlLibre-Black.ttf');
        }
        @font-face{
            font-family: 'FrankRuhlLibre';
            font-weight: 500;
            src: url('//image.reebok.co.kr/fonts/FrankRuhlLibre/FrankRuhlLibre-Bold.ttf');
        }
        @font-face{
            font-family: 'FrankRuhlLibre';
            font-weight: 400;
            src: url('//image.reebok.co.kr/fonts/FrankRuhlLibre/FrankRuhlLibre-Medium.ttf');
        }
        @font-face{
            font-family: 'FrankRuhlLibre';
            font-weight: 300;
            src: url('//image.reebok.co.kr/fonts/FrankRuhlLibre/FrankRuhlLibre-Regular.ttf');
        }
        @font-face{
            font-family: 'FrankRuhlLibre';
            font-weight: 100;
            src: url('//image.reebok.co.kr/fonts/FrankRuhlLibre/FrankRuhlLibre-Light.ttf');
        }
        @font-face{
            font-family: 'PFDinMonoPro-Bold';
            src:url('//image.reebok.co.kr/fonts/PFDINMonopro/PFDINMonoPro-Bold.eot') format('embedded-opentype'),
            url('//image.reebok.co.kr/fonts/PFDINMonopro/PFDINMonoPro-Bold.otf') format('opentype'),
            url('//image.reebok.co.kr/fonts/PFDINMonopro/PFDINMonoPro-Bold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/PFDINMonopro/PFDINMonoPro-Bold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/PFDINMonopro/PFDINMonoPro-Bold.woff2') format('woff2');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 900;
            font-style:normal;
            src:url('//image.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-Black.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 900;
            font-style: italic;
            src:url('//image.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-Black-IT.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 700;
            font-style:normal;
            src:url('//image.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-Bold.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 700;
            font-style:italic;
            src:url('//image.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-Bold-IT.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 400;
            font-style:normal;
            src:url('//image.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-Regular.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 400;
            font-style:italic;
            src:url('//image.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-Regular-IT.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 300;
            font-style:normal;
            src:url('//image.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-Light.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 300;
            font-style:italic;
            src:url('//image.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-Light-IT.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 200;
            font-style:normal;
            src:url('//image.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-EL.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 200;
            font-style:italic;
            src:url('//image.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-EL-IT.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 100;
            font-style:normal;
            src:url('//image.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-UL.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 100;
            font-style:italic;
            src:url('//image.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-UL-IT.ttf') format('truetype');
        }

        @font-face{
            font-family: 'neueplakWideXBlk';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideXBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideXBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideXBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakWideBlk';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakWideBold';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakWideSB';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideSemiBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideSemiBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideSemiBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakWide';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideRegular.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideRegular.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideRegular.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakWideLi';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideLight.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakWideThin';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideThin.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideThin.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideThin.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakWideUL';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideUltraLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideUltraLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideUltraLight.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakExtXBlk';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedXBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedXBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedXBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakExtBlk';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakExtBold';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakExtSB';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedSemiBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedSemiBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedSemiBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakExt';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedRegular.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedRegular.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedRegular.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakExtLi';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedLight.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakExtThin';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedThin.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedThin.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedThin.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakExtUL';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedUltraLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedUltraLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedUltraLight.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakXBlk';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-XBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-XBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-XBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakBlk';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Black.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Black.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Black.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakBold';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Bold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Bold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Bold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakSB';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-SemiBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-SemiBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-SemiBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Regular.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Regular.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Regular.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakLi';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Light.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Light.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Light.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakThin';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Thin.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Thin.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Thin.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakUL';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-UltraLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-UltraLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-UltraLight.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakNrXBlk';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowXBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowXBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowXBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakNrBlk';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakNrBold';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakNrSB';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowSemiBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowSemiBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowSemiBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakNr';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowRegular.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowRegular.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowRegular.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakNrLi';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowLight.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakNrThin';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowThin.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowThin.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowThin.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakNrUL';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowUltraLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowUltraLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowUltraLight.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakCondXBlk';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedXBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedXBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedXBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakCondBlk';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakCondBold';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakCondSB';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedSemiBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedSemiBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedSemiBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakCond';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedRegular.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedRegular.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedRegular.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakCondLi';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedLight.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakCondThin';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedThin.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedThin.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedThin.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakCondUL';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedUltraLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedUltraLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedUltraLight.woff2') format('woff2');
        }
        
        @font-face{
            font-family: 'neueplakCompXBlk';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedXBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedXBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedXBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakCompBlk';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakCompBold';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakCompSB';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedSemiBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedSemiBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedSemiBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakComp';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedRegular.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedRegular.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedRegular.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakCompLi';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedLight.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakCompThin';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedThin.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedThin.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedThin.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplakCompUL';
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedUltraLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedUltraLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedUltraLight.woff2') format('woff2');
        }

        .neueplakWideXBlk{
            font: 25px 'neueplakWideXBlk'
        }
        .neueplakWideBlk{
            font: 25px 'neueplakWideBlk'
        }
        .neueplakWideBold{
            font: 25px 'neueplakWideBold'
        }
        .neueplakWideSB{
            font: 25px 'neueplakWideSB'
        }
        .neueplakWide{
            font: 25px 'neueplakWide'
        }
        .neueplakWideLi{
            font: 25px 'neueplakWideLi'
        }
        .neueplakWideThin{
            font: 25px 'neueplakWideThin'
        }
        .neueplakWideUL{
            font: 25px 'neueplakWideUL'
        }
        .neueplakExtXBlk{
            font: 25px 'neueplakExtXBlk'
        }
        .neueplakExtBlk{
            font: 25px 'neueplakExtBlk'
        }
        .neueplakExtBold{
            font: 25px 'neueplakExtBold'
        }
        .neueplakExtSB{
            font: 25px 'neueplakExtSB'
        }
        .neueplakExt{
            font: 25px 'neueplakExt'
        }
        .neueplakExtLi{
            font: 25px 'neueplakExtLi'
        }
        .neueplakExtThin{
            font: 25px 'neueplakExtThin'
        }
        .neueplakExtUL{
            font: 25px 'neueplakExtUL'
        }
        .neueplakXBlk{
            font: 25px 'neueplakXBlk'
        }
        .neueplakBlk{
            font: 25px 'neueplakBlk'
        }
        .neueplakBold{
            font: 25px 'neueplakBold'
        }
        .neueplakSB{
            font: 25px 'neueplakSB'
        }
        .neueplak{
            font: 25px 'neueplak'
        }
        .neueplakLi{
            font: 25px 'neueplakLi'
        }
        .neueplakThin{
            font: 25px 'neueplakThin'
        }
        .neueplakUL{
            font: 25px 'neueplakUL'
        }
        .neueplakNrXBlk{
            font: 25px 'neueplakNrXBlk'
        }
        .neueplakNrBlk{
            font: 25px 'neueplakNrBlk'
        }
        .neueplakNrBold{
            font: 25px 'neueplakNrBold'
        }
        .neueplakNrSB{
            font: 25px 'neueplakNrSB'
        }
        .neueplakNr{
            font: 25px 'neueplakNr'
        }
        .neueplakNrLi{
            font: 25px 'neueplakNrLi'
        }
        .neueplakNrThin{
            font: 25px 'neueplakNrThin'
        }
        .neueplakNrUL{
            font: 25px 'neueplakNrUL'
        }
        .neueplakCondXBlk{
            font: 25px 'neueplakCondXBlk'
        }
        .neueplakCondBlk{
            font: 25px 'neueplakCondBlk'
        }
        .neueplakCondBold{
            font: 25px 'neueplakCondBold'
        }
        .neueplakCondSB{
            font: 25px 'neueplakCondSB'
        }
        .neueplakCond{
            font: 25px 'neueplakCond'
        }
        .neueplakCondLi{
            font: 25px 'neueplakCondLi'
        }
        .neueplakCondThin{
            font: 25px 'neueplakCondThin'
        }
        .neueplakCondUL{
            font: 25px 'neueplakCondUL'
        }
        .neueplakCompXBlk{
            font: 25px 'neueplakXBlk'
        }
        .neueplakCompBlk{
            font: 25px 'neueplakBlk'
        }
        .neueplakCompBold{
            font: 25px 'neueplakBold'
        }
        .neueplakCompSB{
            font: 25px 'neueplakSB'
        }
        .neueplakComp{
            font: 25px 'neueplak'
        }
        .neueplakCompLi{
            font: 25px 'neueplakLi'
        }
        .neueplakCompThin{
            font: 25px 'neueplakThin'
        }
        .neueplakCompUL{
            font: 25px 'neueplakUL'
        }

        .notoSansBold{
            font:700 25px 'NotoSansKR';
        }
        .notoSansMedium{
            font:500 25px 'NotoSansKR';
        }
        .notoSansRegular{
            font:400 25px 'NotoSansKR';
        }
        .notoSansLight{
            font:300 25px 'NotoSansKR';
        }
        .notoSansThin{
            font:100 25px 'NotoSansKR';
        }
        .reefontBold{
            font:25px 'reefont-bold';
        }
        .reefont{
            font:25px 'reefont';
        }
        .reefontCond{
            font:25px 'ReefontCondensed';
        }
        .dinpro-CondLight{
            font:25px 'DINWebPro-CondLight';
        }
        .dinpro-Cond{
            font:25px 'DINWebPro-Cond';
        }
        .dinpro-CondMedium{
            font:25px 'DINWebPro-CondMedium';
        }
        .dinpro-CondBold{
            font:25px 'DINWebPro-CondBold';
        }
        .dinpro-CondBlack{
            font:25px 'DINWebPro-CondBlack';
        }
        .dinpro{
            font: 25px 'dinpro';
        }
        .dinproBold{
            font: 25px 'dinpro bold';
        }
        .dinproBlack{
            font: 25px 'dinpro black';
        }
        .QStencil{
            font:25px 'QStencil';
        }
        .frankRLBlack{
            font:700 25px 'FrankRuhlLibre';
        }
        .frankRLBold{
            font:500 25px 'FrankRuhlLibre';
        }
        .frankRLMedium{
            font:400 25px 'FrankRuhlLibre';
        }
        .frankRLRegular{
            font:300 25px 'FrankRuhlLibre';
        }
        .frankRLLight{
            font:100 25px 'FrankRuhlLibre';
        }
        .PFDinMonoPro-Bold{
            font:25px 'PFDinMonoPro-Bold';
        }
        .MixolydianTT-Black{
            font: 900 25px 'MixolydianTT';
        }
        .MixolydianTT-Black-IT{
            font: italic 900 25px 'MixolydianTT';
        }
        .MixolydianTT-Bold{
            font: 700 25px 'MixolydianTT';
        }
        .MixolydianTT-Bold-IT{
            font: italic 700 25px 'MixolydianTT';
        }
        .MixolydianTT-Regular{
            font:400 25px 'MixolydianTT';
        }
        .MixolydianTT-Regular-IT{
            font: italic 400 25px 'MixolydianTT';
        }
        .MixolydianTT-Light{
            font: 300 25px 'MixolydianTT';
        }
        .MixolydianTT-Light-IT{
            font: italic 300 25px 'MixolydianTT';
        }
        .MixolydianTT-EL{
            font: 200 25px 'MixolydianTT';
        }
        .MixolydianTT-EL-IT{
            font: italic 200 25px 'MixolydianTT';
        }
        .MixolydianTT-UL{
            font: 100 25px 'MixolydianTT';
        }
        .MixolydianTT-UL-IT{
            font: italic 100 25px 'MixolydianTT';
        }
    </style>


    <div class="code-wrap">
        <div class="prefix" style="">구글 노토산스 폰트</div>
        <div style="margin-bottom:10px;color:#bb0000;font-size:13px;font-weight:bold;">*** 2017-06-22 : 기존에 굵기 별로 각각 선언 되어있던 걸, 같은 font-family에 font-weight으로 구분을 하는 방법으로 수정</div>
        <div class="code-box">
            <pre class="brush: css">
                Bold {
                    font-family:'NotoSansKR';
                    font-weight:700;
                    font-size:25px;
                }

                Medium {
                    font-family:'NotoSansKR';
                    font-weight:500;
                    font-size:25px;
                }

                Regular {
                    font-family:'NotoSansKR';
                    font-weight:400;
                    font-size:25px;
                }

                Light {
                    font-family:'NotoSansKR';
                    font-weight:300;
                    font-size:25px;
                }

                Thin {
                    font-family:'NotoSansKR';
                    font-weight:100;
                    font-size:25px;
                }
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <div class="notoSansBold">본고딕 볼드체</div>
            <div class="notoSansMedium">본고딕 미디움체</div>
            <div class="notoSansRegular">본고딕 레귤러체</div>
            <div class="notoSansLight">본고딕 라이트체</div>
            <div class="notoSansThin">본고딕 Thin체</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font: 25px ReefontCondensed">ReefontCondensed</div>
        <div class="code-box">
            <pre class="brush: css">
                Regular {
                    font-family:'ReefontCondensed';
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="reefontCond">ReefontCondensed</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="">reefont</div>
        <div class="code-box">
            <pre class="brush: css">
                Bold {
                    font-family:'reefont-bold';
                    font-size:25px;
                }

                Regular {
                    font-family:'reefont';
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="reefontBold">reefont-bold</div>
            <div class="reefont">reefont</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font-family:PFDinMonoPro-Bold">PFDinMonoPro-Bold</div>
        <div class="code-box">
            <pre class="brush: css">
                Bold {
                    font-family:'PFDinMonoPro-Bold';
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="PFDinMonoPro-Bold">PFDinMonoPro-Bold</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font: 25px 'DINWebPro-Cond';">DINWebPro-Cond</div>
        <div class="code-box">
            <pre class="brush: css">
                Black {
                    font-family:'DINWebPro-CondBlack';
                    font-size:25px;
                }

                Bold {
                    font-family:'DINWebPro-CondBold';
                    font-size:25px;
                }

                Medium {
                    font-family:'DINWebPro-CondMedium';
                    font-size:25px;
                }

                Regular {
                    font-family:'DINWebPro-Cond';
                    font-size:25px;
                }

                Light {
                    font-family:'DINWebPro-CondLight';
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="dinpro-CondBlack">DINWebPro-CondBlack</div>
            <div class="dinpro-CondBold">DINWebPro-CondBold</div>
            <div class="dinpro-CondMedium">DINWebPro-CondMedium</div>
            <div class="dinpro-Cond">DINWebPro-Cond</div>
            <div class="dinpro-CondLight">DINWebPro-CondLight</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font-family:dinpro">DINPRO</div>
        <div class="code-box">
            <pre class="brush: css">
                Black {
                    font-family:'dinpro black';
                    font-size:25px;
                }

                Bold {
                    font-family:'dinpro bold';
                    font-size:25px;
                }

                Regular {
                    font-family:'dinpro';
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="dinproBlack">DINPRO Black</div>
            <div class="dinproBold">DINPRO Bold</div>
            <div class="dinpro">DINPRO</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font-family:QStencil">QStencil</div>
        <div class="code-box">
            <pre class="brush: css">
                Regular {
                    font-family:'dinpro';
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="QStencil">QStencil</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font-family:FrankRuhlLibre">FrankRuhlLibre</div>
        <div style="margin-bottom:10px;color:#bb0000;font-size:13px;font-weight:bold;">***font-family에 font-weight으로 구분을 하는 방법</div>
        <div class="code-box">
            <pre class="brush: css">
                Black {
                    font-family:'FrankRuhlLibre';
                    font-weight: 700;
                    font-size:25px;
                }
                Bold {
                    font-family:'FrankRuhlLibre';
                    font-weight: 500;
                    font-size:25px;
                }
                Medium {
                    font-family:'FrankRuhlLibre';
                    font-weight: 400;
                    font-size:25px;
                }
                Regular {
                    font-family:'FrankRuhlLibre';
                    font-weight: 300;
                    font-size:25px;
                }
                Light {
                    font-family:'FrankRuhlLibre';
                    font-weight: 100;
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="frankRLBlack">FrankRLBlack</div>
            <div class="frankRLBold">FrankRLBold</div>
            <div class="frankRLMedium">FrankRLMedium</div>
            <div class="frankRLRegular">FrankRLRegular</div>
            <div class="frankRLLight">FrankRLLight</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font-family:MixolydianTT">MixolydianTT</div>
        <div class="code-box">
            <pre class="brush: css">
                Black {
                    font-family:'MixolydianTT';
                    font-weight:900;
                    font-style:normal;
                    font-size:25px;
                }
                Black Italic{
                    font-family:'MixolydianTT';
                    font-weight:900;
                    font-style:italic;
                    font-size:25px;
                }

                Bold {
                    font-family:'MixolydianTT';
                    font-weight:700;
                    font-style:normal;
                    font-size:25px;
                }
                Bold Italic{
                    font-family:'MixolydianTT';
                    font-weight:700;
                    font-style:italic;
                    font-size:25px;
                }

                Regular {
                    font-family:'MixolydianTT';
                    font-weight:400;
                    font-style:normal;
                    font-size:25px;
                }
                
                Regular Italic{
                    font-family:'MixolydianTT';
                    font-weight:400;
                    font-style:italic;
                    font-size:25px;
                }

                Light {
                    font-family:'MixolydianTT';
                    font-weight:300;
                    font-style:normal;
                    font-size:25px;
                }
                Light Italic{
                    font-family:'MixolydianTT';
                    font-weight:300;
                    font-style:italic;
                    font-size:25px;
                }

                Extended-Light {
                    font-family:'MixolydianTT';
                    font-weight:200;
                    font-style:normal;
                    font-size:25px;
                }
                Extended-Light Italic{
                    font-family:'MixolydianTT';
                    font-weight:200;
                    font-style:italic;
                    font-size:25px;
                }

                Ultra-Light {
                    font-family:'MixolydianTT';
                    font-weight:100;
                    font-style:normal;
                    font-size:25px;
                }
                Ultra-Light Italic{
                    font-family:'MixolydianTT';
                    font-weight:100;
                    font-style:italic;
                    font-size:25px;
                }

            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="MixolydianTT-Black">MixolydianTT-Black</div>
            <div class="MixolydianTT-Black-IT">MixolydianTT-Black-IT</div>
            <div class="MixolydianTT-Bold">MixolydianTT-Bold</div>
            <div class="MixolydianTT-Bold-IT">MixolydianTT-Bold-IT</div>
            <div class="MixolydianTT-Regular">MixolydianTT-Regular</div>
            <div class="MixolydianTT-Regular-IT">MixolydianTT-Regular-IT</div>
            <div class="MixolydianTT-Light">MixolydianTT-Light</div>
            <div class="MixolydianTT-Light-IT">MixolydianTT-Light-IT</div>
            <div class="MixolydianTT-EL">MixolydianTT-EL</div>
            <div class="MixolydianTT-EL-IT">MixolydianTT-EL-IT</div>
            <div class="MixolydianTT-UL">MixolydianTT-UL</div>
            <div class="MixolydianTT-UL-IT">MixolydianTT-UL-IT</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font-family:neueplak">Neue Plak</div>
        <div class="code-box">
            <pre class="brush: css">
                Wide Extra Black {
                    font-family:'neueplakWideXBlk';
                    font-size:25px;
                }
                Wide Black {
                    font-family:'neueplakWideBlk';
                    font-size:25px;
                }
                Wide Bold {
                    font-family:'neueplakWideBold';
                    font-size:25px;
                }
                Wide Semi Bold {
                    font-family:'neueplakWideSB';
                    font-size:25px;
                }
                Wide Regular {
                    font-family:'neueplakWide';
                    font-size:25px;
                }
                Wide Light {
                    font-family:'neueplakWideLi';
                    font-size:25px;
                }
                Wide Thin {
                    font-family:'neueplakWideThin';
                    font-size:25px;
                }
                Wide Ultra Light {
                    font-family:'neueplakWideUL';
                    font-size:25px;
                }

                Extended Extra Black {
                    font-family:'neueplakExtXBlk';
                    font-size:25px;
                }
                Extended Black {
                    font-family:'neueplakExtBlk';
                    font-size:25px;
                }
                Extended Bold {
                    font-family:'neueplakExtBold';
                    font-size:25px;
                }
                Extended Semi Bold {
                    font-family:'neueplakExtSB';
                    font-size:25px;
                }
                Extended Regular {
                    font-family:'neueplakExt';
                    font-size:25px;
                }
                Extended Light {
                    font-family:'neueplakExtLi';
                    font-size:25px;
                }
                Extended Thin {
                    font-family:'neueplakExtThin';
                    font-size:25px;
                }
                Extended Ultra Light {
                    font-family:'neueplakExtUL';
                    font-size:25px;
                }

                Extra Black {
                    font-family:'neueplakXBlk';
                    font-size:25px;
                }
                Black {
                    font-family:'neueplakBlk';
                    font-size:25px;
                }
                Bold {
                    font-family:'neueplakBold';
                    font-size:25px;
                }
                Semi Bold {
                    font-family:'neueplakSB';
                    font-size:25px;
                }
                Regular {
                    font-family:'neueplak';
                    font-size:25px;
                }
                Light {
                    font-family:'neueplakLi';
                    font-size:25px;
                }
                Thin {
                    font-family:'neueplakThin';
                    font-size:25px;
                }
                Ultra Light {
                    font-family:'neueplakUL';
                    font-size:25px;
                }

                Narrow Extra Black {
                    font-family:'neueplakNrXBlk';
                    font-size:25px;
                }
                Narrow Black {
                    font-family:'neueplakNrBlk';
                    font-size:25px;
                }
                Narrow Bold {
                    font-family:'neueplakNrBold';
                    font-size:25px;
                }
                Narrow Semi Bold {
                    font-family:'neueplakNrSB';
                    font-size:25px;
                }
                Narrow Regular {
                    font-family:'neueplakNr';
                    font-size:25px;
                }
                Narrow Light {
                    font-family:'neueplakNrLi';
                    font-size:25px;
                }
                Narrow Thin {
                    font-family:'neueplakNrThin';
                    font-size:25px;
                }
                Narrow Ultra Light {
                    font-family:'neueplakNrUL';
                    font-size:25px;
                }

                Condensed Extra Black {
                    font-family:'neueplakCondXBlk';
                    font-size:25px;
                }
                Condensed Black {
                    font-family:'neueplakCondBlk';
                    font-size:25px;
                }
                Condensed Bold {
                    font-family:'neueplakCondBold';
                    font-size:25px;
                }
                Condensed Semi Bold {
                    font-family:'neueplakCondSB';
                    font-size:25px;
                }
                Condensed Regular {
                    font-family:'neueplakCond';
                    font-size:25px;
                }
                Condensed Light {
                    font-family:'neueplakCondLi';
                    font-size:25px;
                }
                Condensed Thin {
                    font-family:'neueplakCondThin';
                    font-size:25px;
                }
                Condensed Ultra Light {
                    font-family:'neueplakCondUL';
                    font-size:25px;
                }

                Compressed Extra Black {
                    font-family:'neueplakCompXBlk';
                    font-size:25px;
                }
                Compressed Black {
                    font-family:'neueplakCompBlk';
                    font-size:25px;
                }
                Compressed Bold {
                    font-family:'neueplakCompBold';
                    font-size:25px;
                }
                Compressed Semi Bold {
                    font-family:'neueplakCompSB';
                    font-size:25px;
                }
                Compressed Regular {
                    font-family:'neueplakComp';
                    font-size:25px;
                }
                Compressed Light {
                    font-family:'neueplakCompLi';
                    font-size:25px;
                }
                Compressed Thin {
                    font-family:'neueplakCompThin';
                    font-size:25px;
                }
                Compressed Ultra Light {
                    font-family:'neueplakCompUL';
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="neueplakWideXBlk">Wide Extra Black</div>
            <div class="neueplakWideBlk">Wide Black</div>
            <div class="neueplakWideBold">Wide Bold</div>
            <div class="neueplakWideSB">Wide Semi Bold</div>
            <div class="neueplakWide">Wide Regular</div>
            <div class="neueplakWideLi">Wide Light</div>
            <div class="neueplakWideThin">Wide Thin</div>
            <div class="neueplakWideUL">Wide Ultra Light</div>

            <div class="neueplakExtXBlk">Extended Extra Black</div>
            <div class="neueplakExtBlk">Extended Black</div>
            <div class="neueplakExtBold">Extended Bold</div>
            <div class="neueplakExtSB">Extended Semi Bold</div>
            <div class="neueplakExt">Extended Regular</div>
            <div class="neueplakExtLi">Extended Light</div>
            <div class="neueplakExtThin">Extended Thin</div>
            <div class="neueplakExtUL">Extended Ultra Light</div>

            <div class="neueplakXBlk">Extra Black</div>
            <div class="neueplakBlk">Black</div>
            <div class="neueplakBold">Bold</div>
            <div class="neueplakSB">Semi Bold</div>
            <div class="neueplak">Regular</div>
            <div class="neueplakLi">Light</div>
            <div class="neueplakThin">Thin</div>
            <div class="neueplakUL">Ultra Light</div>

            <div class="neueplakNrXBlk">Narrow Extra Black</div>
            <div class="neueplakNrBlk">Narrow Black</div>
            <div class="neueplakNrBold">Narrow Bold</div>
            <div class="neueplakNrSB">Narrow Semi Bold</div>
            <div class="neueplakNr">Narrow Regular</div>
            <div class="neueplakNrLi">Narrow Light</div>
            <div class="neueplakNrThin">Narrow Thin</div>
            <div class="neueplakNrUL">Narrow Ultra Light</div>

            <div class="neueplakCondXBlk">Condensed Extra Black</div>
            <div class="neueplakCondBlk">Condensed Black</div>
            <div class="neueplakCondBold">Condensed Bold</div>
            <div class="neueplakCondSB">Condensed Semi Bold</div>
            <div class="neueplakCond">Condensed Regular</div>
            <div class="neueplakCondLi">Condensed Light</div>
            <div class="neueplakCondThin">Condensed Thin</div>
            <div class="neueplakCondUL">Condensed Ultra Light</div>

            <div class="neueplakCompXBlk">Compressed Extra Black</div>
            <div class="neueplakCompBlk">CompressedBlack</div>
            <div class="neueplakCompBold">Compressed Bold</div>
            <div class="neueplakCompSB">Compressed Semi Bold</div>
            <div class="neueplakComp">Compressed Regular</div>
            <div class="neueplakCompLi">Compressed Light</div>
            <div class="neueplakCompThin">Compressed Thin</div>
            <div class="neueplakCompUL">Compressed Ultra Light</div>
        </div>
    </div>

`;
