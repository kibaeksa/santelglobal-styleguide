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
            font-family: 'neueplak-wide';
            font-weight: 900;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideXBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideXBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideXBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-wide';
            font-weight: 800;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-wide';
            font-weight: 700;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-wide';
            font-weight: 600;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideSemiBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideSemiBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideSemiBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-wide';
            font-weight: 400;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideRegular.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideRegular.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideRegular.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-wide';
            font-weight: 300;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideLight.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-wide';
            font-weight: 200;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideThin.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideThin.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideThin.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-wide';
            font-weight: 100;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideUltraLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideUltraLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-WideUltraLight.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-ext';
            font-weight: 900;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedXBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedXBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedXBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-ext';
            font-weight: 800;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-ext';
            font-weight: 700;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-ext';
            font-weight: 600;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedSemiBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedSemiBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedSemiBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-ext';
            font-weight: 400;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedRegular.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedRegular.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedRegular.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-ext';
            font-weight: 300;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedLight.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-ext';
            font-weight: 200;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedThin.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedThin.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedThin.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-ext';
            font-weight: 100;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedUltraLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedUltraLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-ExtendedUltraLight.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak';
            font-weight: 900;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-XBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-XBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-XBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak';
            font-weight: 800;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Black.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Black.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Black.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak';
            font-weight: 700;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Bold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Bold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Bold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak';
            font-weight: 600;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-SemiBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-SemiBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-SemiBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak';
            font-weight: 400;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Regular.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Regular.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Regular.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak';
            font-weight: 300;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Light.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Light.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Light.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak';
            font-weight: 200;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Thin.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Thin.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-Thin.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak';
            font-weight: 100;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-UltraLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-UltraLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-UltraLight.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-nrrw';
            font-weight: 900;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowXBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowXBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowXBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-nrrw';
            font-weight: 800;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-nrrw';
            font-weight: 700;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-nrrw';
            font-weight: 600;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowSemiBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowSemiBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowSemiBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-nrrw';
            font-weight: 400;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowRegular.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowRegular.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowRegular.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-nrrw';
            font-weight: 300;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowLight.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-nrrw';
            font-weight: 200;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowThin.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowThin.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowThin.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-nrrw';
            font-weight: 100;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowUltraLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowUltraLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-NarrowUltraLight.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-cond';
            font-weight: 900;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedXBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedXBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedXBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-cond';
            font-weight: 800;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-cond';
            font-weight: 700;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-cond';
            font-weight: 600;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedSemiBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedSemiBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedSemiBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-cond';
            font-weight: 400;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedRegular.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedRegular.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedRegular.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-cond';
            font-weight: 300;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedLight.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-cond';
            font-weight: 200;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedThin.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedThin.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedThin.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-cond';
            font-weight: 100;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedUltraLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedUltraLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CondensedUltraLight.woff2') format('woff2');
        }
        
        @font-face{
            font-family: 'neueplak-comp';
            font-weight: 900;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedXBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedXBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedXBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-comp';
            font-weight: 800;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedBlack.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedBlack.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedBlack.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-comp';
            font-weight: 700;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-comp';
            font-weight: 600;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedSemiBold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedSemiBold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedSemiBold.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-comp';
            font-weight: 400;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedRegular.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedRegular.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedRegular.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-comp';
            font-weight: 300;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedLight.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-comp';
            font-weight: 200;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedThin.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedThin.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedThin.woff2') format('woff2');
        }
        @font-face{
            font-family: 'neueplak-comp';
            font-weight: 100;
            src:url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedUltraLight.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedUltraLight.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/neuePlak/NeuePlakW05-CompressedUltraLight.woff2') format('woff2');
        }

        .neueplakWideXBlk{
            font: 900 25px 'neueplak-wide'
        }
        .neueplakWideBlk{
            font: 800 25px 'neueplak-wide'
        }
        .neueplakWideBold{
            font: 700 25px 'neueplak-wide'
        }
        .neueplakWideSB{
            font: 600 25px 'neueplak-wide'
        }
        .neueplakWide{
            font: 400 25px 'neueplak-wide'
        }
        .neueplakWideLi{
            font: 300 25px 'neueplak-wide'
        }
        .neueplakWideThin{
            font: 200 25px 'neueplak-wide'
        }
        .neueplakWideUL{
            font: 100 25px 'neueplak-wide'
        }
        .neueplakExtXBlk{
            font: 900 25px 'neueplak-ext'
        }
        .neueplakExtBlk{
            font: 800 25px 'neueplak-ext'
        }
        .neueplakExtBold{
            font: 700 25px 'neueplak-ext'
        }
        .neueplakExtSB{
            font: 600 25px 'neueplak-ext'
        }
        .neueplakExt{
            font: 400 25px 'neueplak-ext'
        }
        .neueplakExtLi{
            font: 300 25px 'neueplak-ext'
        }
        .neueplakExtThin{
            font: 200 25px 'neueplak-ext'
        }
        .neueplakExtUL{
            font: 100 25px 'neueplak-ext'
        }
        .neueplakXBlk{
            font: 900 25px 'neueplak'
        }
        .neueplakBlk{
            font: 800 25px 'neueplak'
        }
        .neueplakBold{
            font: 700 25px 'neueplak'
        }
        .neueplakSB{
            font: 600 25px 'neueplak'
        }
        .neueplak{
            font: 400 25px 'neueplak'
        }
        .neueplakLi{
            font: 300 25px 'neueplak'
        }
        .neueplakThin{
            font: 200 25px 'neueplak'
        }
        .neueplakUL{
            font: 100 25px 'neueplak'
        }
        .neueplakNrXBlk{
            font: 900 25px 'neueplak-nrrw'
        }
        .neueplakNrBlk{
            font: 800 25px 'neueplak-nrrw'
        }
        .neueplakNrBold{
            font: 700 25px 'neueplak-nrrw'
        }
        .neueplakNrSB{
            font: 600 25px 'neueplak-nrrw'
        }
        .neueplakNr{
            font: 400 25px 'neueplak-nrrw'
        }
        .neueplakNrLi{
            font: 300 25px 'neueplak-nrrw'
        }
        .neueplakNrThin{
            font: 200 25px 'neueplak-nrrw'
        }
        .neueplakNrUL{
            font: 100 25px 'neueplak-nrrw'
        }
        .neueplakCondXBlk{
            font: 900 25px 'neueplak-cond'
        }
        .neueplakCondBlk{
            font: 800 25px 'neueplak-cond'
        }
        .neueplakCondBold{
            font: 700 25px 'neueplak-cond'
        }
        .neueplakCondSB{
            font: 600 25px 'neueplak-cond'
        }
        .neueplakCond{
            font: 400 25px 'neueplak-cond'
        }
        .neueplakCondLi{
            font: 300 25px 'neueplak-cond'
        }
        .neueplakCondThin{
            font: 200 25px 'neueplak-cond'
        }
        .neueplakCondUL{
            font: 100 25px 'neueplak-cond'
        }
        .neueplakCompXBlk{
            font: 900 25px 'neueplak-comp'
        }
        .neueplakCompBlk{
            font: 800 25px 'neueplak-comp'
        }
        .neueplakCompBold{
            font: 700 25px 'neueplak-comp'
        }
        .neueplakCompSB{
            font: 600 25px 'neueplak-comp'
        }
        .neueplakComp{
            font: 400 25px 'neueplak-comp'
        }
        .neueplakCompLi{
            font: 300 25px 'neueplak-comp'
        }
        .neueplakCompThin{
            font: 200 25px 'neueplak-comp'
        }
        .neueplakCompUL{
            font: 100 25px 'neueplak-comp'
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
        <div class="prefix" style="font-family:neueplak">Neue Plak Wide</div>
        <div class="code-box">
            <pre class="brush: css">
                Wide Extra Black {
                    font-family:'neueplak-wide';
                    font-weight:900;
                    font-size:25px;
                }
                Wide Black {
                    font-family:'neueplak-wide';
                    font-weight:800;
                    font-size:25px;
                }
                Wide Bold {
                    font-family:'neueplak-wide';
                    font-weight:700;
                    font-size:25px;
                }
                Wide Semi Bold {
                    font-family:'neueplak-wide';
                    font-weight:600;
                    font-size:25px;
                }
                Wide Regular {
                    font-family:'neueplak-wide';
                    font-weight:400;
                    font-size:25px;
                }
                Wide Light {
                    font-family:'neueplak-wide';
                    font-weight:900;
                    font-size:25px;
                }
                Wide Thin {
                    font-family:'neueplak-wide';
                    font-weight:200;
                    font-size:25px;
                }
                Wide Ultra Light {
                    font-family:'neueplak-wide';
                    font-weight:100;
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
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font-family:neueplak">Neue Plak Extended</div>
        <div class="code-box">
            <pre class="brush: css">
                Extended Extra Black {
                    font-family:'neueplak-ext';
                    font-weight:900;
                    font-size:25px;
                }
                Extended Black {
                    font-family:'neueplak-ext';
                    font-weight:800;
                    font-size:25px;
                }
                Extended Bold {
                    font-family:'neueplak-ext';
                    font-weight:700;
                    font-size:25px;
                }
                Extended Semi Bold {
                    font-family:'neueplak-ext';
                    font-weight:600;
                    font-size:25px;
                }
                Extended Regular {
                    font-family:'neueplak-ext';
                    font-weight:400;
                    font-size:25px;
                }
                Extended Light {
                    font-family:'neueplakExtLi';
                    font-weight:300;
                    font-size:25px;
                }
                Extended Thin {
                    font-family:'neueplakExtThin';
                    font-weight:200;
                    font-size:25px;
                }
                Extended Ultra Light {
                    font-family:'neueplak-ext';
                    font-weight:100;
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="neueplakExtXBlk">Extended Extra Black</div>
            <div class="neueplakExtBlk">Extended Black</div>
            <div class="neueplakExtBold">Extended Bold</div>
            <div class="neueplakExtSB">Extended Semi Bold</div>
            <div class="neueplakExt">Extended Regular</div>
            <div class="neueplakExtLi">Extended Light</div>
            <div class="neueplakExtThin">Extended Thin</div>
            <div class="neueplakExtUL">Extended Ultra Light</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font-family:neueplak">Neue Plak</div>
        <div class="code-box">
            <pre class="brush: css">
                Extra Black {
                    font-family:'neueplak';
                    font-weight:900;
                    font-size:25px;
                }
                Black {
                    font-family:'neueplak';
                    font-weight:800;
                    font-size:25px;
                }
                Bold {
                    font-family:'neueplak';
                    font-weight:700;
                    font-size:25px;
                }
                Semi Bold {
                    font-family:'neueplak';
                    font-weight:600;
                    font-size:25px;
                }
                Regular {
                    font-family:'neueplak';
                    font-weight:400;
                    font-size:25px;
                }
                Light {
                    font-family:'neueplak';
                    font-weight:300;
                    font-size:25px;
                }
                Thin {
                    font-family:'neueplak';
                    font-weight:200;
                    font-size:25px;
                }
                Ultra Light {
                    font-family:'neueplak';
                    font-weight:100;
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="neueplakXBlk">Extra Black</div>
            <div class="neueplakBlk">Black</div>
            <div class="neueplakBold">Bold</div>
            <div class="neueplakSB">Semi Bold</div>
            <div class="neueplak">Regular</div>
            <div class="neueplakLi">Light</div>
            <div class="neueplakThin">Thin</div>
            <div class="neueplakUL">Ultra Light</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font-family:neueplak">Neue Plak Narrow</div>
        <div class="code-box">
            <pre class="brush: css">
                Narrow Extra Black {
                    font-family:'neueplak-nrrw';
                    font-weight:900;
                    font-size:25px;
                }
                Narrow Black {
                    font-family:'neueplak-nrrw';
                    font-weight:800;
                    font-size:25px;
                }
                Narrow Bold {
                    font-family:'neueplak-nrrw';
                    font-weight:700;
                    font-size:25px;
                }
                Narrow Semi Bold {
                    font-family:'neueplak-nrrw';
                    font-weight:600;
                    font-size:25px;
                }
                Narrow Regular {
                    font-family:'neueplak-nrrw';
                    font-weight:400;
                    font-size:25px;
                }
                Narrow Light {
                    font-family:'neueplak-nrrw';
                    font-weight:300;
                    font-size:25px;
                }
                Narrow Thin {
                    font-family:'neueplak-nrrw';
                    font-weight:200;
                    font-size:25px;
                }
                Narrow Ultra Light {
                    font-family:'neueplak-nrrw';
                    font-weight:100;
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="neueplakNrXBlk">Narrow Extra Black</div>
            <div class="neueplakNrBlk">Narrow Black</div>
            <div class="neueplakNrBold">Narrow Bold</div>
            <div class="neueplakNrSB">Narrow Semi Bold</div>
            <div class="neueplakNr">Narrow Regular</div>
            <div class="neueplakNrLi">Narrow Light</div>
            <div class="neueplakNrThin">Narrow Thin</div>
            <div class="neueplakNrUL">Narrow Ultra Light</div>
        </div>
    </div>
    <div class="code-wrap">
        <div class="prefix" style="font-family:neueplak">Neue Plak Condensed</div>
        <div class="code-box">
            <pre class="brush: css">
                Condensed Extra Black {
                    font-family:'neueplak-cond';
                    font-weight:900;
                    font-size:25px;
                }
                Condensed Black {
                    font-family:'neueplak-cond';
                    font-weight:800;
                    font-size:25px;
                }
                Condensed Bold {
                    font-family:'neueplak-cond';
                    font-weight:700;
                    font-size:25px;
                }
                Condensed Semi Bold {
                    font-family:'neueplak-cond';
                    font-weight:600;
                    font-size:25px;
                }
                Condensed Regular {
                    font-family:'neueplak-cond';
                    font-weight:400;
                    font-size:25px;
                }
                Condensed Light {
                    font-family:'neueplak-cond';
                    font-weight:300;
                    font-size:25px;
                }
                Condensed Thin {
                    font-family:'neueplak-cond';
                    font-weight:200;
                    font-size:25px;
                }
                Condensed Ultra Light {
                    font-family:'neueplak-cond';
                    font-weight:100;
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="neueplakCondXBlk">Condensed Extra Black</div>
            <div class="neueplakCondBlk">Condensed Black</div>
            <div class="neueplakCondBold">Condensed Bold</div>
            <div class="neueplakCondSB">Condensed Semi Bold</div>
            <div class="neueplakCond">Condensed Regular</div>
            <div class="neueplakCondLi">Condensed Light</div>
            <div class="neueplakCondThin">Condensed Thin</div>
            <div class="neueplakCondUL">Condensed Ultra Light</div>
        </div>
    </div>
    <div class="code-wrap">
        <div class="prefix" style="font-family:neueplak">Neue Plak Compressed</div>
        <div class="code-box">
            <pre class="brush: css">
                Compressed Extra Black {
                    font-family:'neueplak-comp';
                    font-weight:900;
                    font-size:25px;
                }
                Compressed Black {
                    font-family:'neueplak-comp';
                    font-weight:800;
                    font-size:25px;
                }
                Compressed Bold {
                    font-family:'neueplak-comp';
                    font-weight:700;
                    font-size:25px;
                }
                Compressed Semi Bold {
                    font-family:'neueplak-comp';
                    font-weight:600;
                    font-size:25px;
                }
                Compressed Regular {
                    font-family:'neueplak-comp';
                    font-weight:400;
                    font-size:25px;
                }
                Compressed Light {
                    font-family:'neueplak-comp';
                    font-weight:300;
                    font-size:25px;
                }
                Compressed Thin {
                    font-family:'neueplak-comp';
                    font-weight:200;
                    font-size:25px;
                }
                Compressed Ultra Light {
                    font-family:'neueplak-comp';
                    font-weight:100;
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="neueplakCompXBlk">Compressed Extra Black</div>
            <div class="neueplakCompBlk">Compressed Black</div>
            <div class="neueplakCompBold">Compressed Bold</div>
            <div class="neueplakCompSB">Compressed Semi Bold</div>
            <div class="neueplakComp">Compressed Regular</div>
            <div class="neueplakCompLi">Compressed Light</div>
            <div class="neueplakCompThin">Compressed Thin</div>
            <div class="neueplakCompUL">Compressed Ultra Light</div>
        </div>
    </div>

`;
