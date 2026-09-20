import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyl7sobps.css';
import '../../css/r/r7glsubog.css';
import '../../css/m/mx__wzbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path opacity="0" class="fyl7sobps"><animate id="SVGKYQAHd9H" fill="freeze" attributeName="opacity" begin="0;SVGiICzmYiD.end+0.2s" calcMode="discrete" dur="0.25s" values="0;1"/><animate id="SVGiICzmYiD" fill="freeze" attributeName="opacity" begin="SVGqTmLtDFc.end+0.5s" dur="0.001s" values="1;0"/></path><path opacity="0" class="r7glsubog"><animate id="SVGPRCC2btp" fill="freeze" attributeName="opacity" begin="SVGKYQAHd9H.end" calcMode="discrete" dur="0.25s" values="0;1"/><animate fill="freeze" attributeName="opacity" begin="SVGqTmLtDFc.end+0.5s" dur="0.001s" values="1;0"/></path><path opacity="0" class="mx__wzbmd"><animate id="SVGqTmLtDFc" fill="freeze" attributeName="opacity" begin="SVGPRCC2btp.end" calcMode="discrete" dur="0.25s" values="0;1"/><animate fill="freeze" attributeName="opacity" begin="SVGqTmLtDFc.end+0.5s" dur="0.001s" values="1;0"/></path>`,
		"fallback": "svg-spinners:wifi",
	});
}

export default Component;
