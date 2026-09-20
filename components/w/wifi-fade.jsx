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
		"content": `<path opacity="0" class="fyl7sobps"><animate id="SVGkbUu7KtW" fill="freeze" attributeName="opacity" begin="0;SVGAiUxzdjl.end+0.2s" dur="0.25s" values="0;1"/><animate id="SVGAiUxzdjl" fill="freeze" attributeName="opacity" begin="SVGV9fG3lbe.end+0.5s" dur="0.1s" values="1;0"/></path><path opacity="0" class="r7glsubog"><animate id="SVG2sZSgdIQ" fill="freeze" attributeName="opacity" begin="SVGkbUu7KtW.end" dur="0.25s" values="0;1"/><animate fill="freeze" attributeName="opacity" begin="SVGV9fG3lbe.end+0.5s" dur="0.1s" values="1;0"/></path><path opacity="0" class="mx__wzbmd"><animate id="SVGV9fG3lbe" fill="freeze" attributeName="opacity" begin="SVG2sZSgdIQ.end" dur="0.25s" values="0;1"/><animate fill="freeze" attributeName="opacity" begin="SVGV9fG3lbe.end+0.5s" dur="0.1s" values="1;0"/></path>`,
		"fallback": "svg-spinners:wifi-fade",
	});
}

export default Component;
