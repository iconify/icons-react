import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/opi0yfbgs.css';
import '../../css/f/f0xxkyjkv.css';
import '../../css/e/ej_c7zbbd.css';
import '../../css/w/wwounvblr.css';
import '../../css/n/nlkyo6b_t.css';
import '../../css/f/faoe3kvrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="opi0yfbgs"/><path class="f0xxkyjkv"/><path class="ej_c7zbbd"/><path class="wwounvblr"/><path clip-rule="evenodd" class="nlkyo6b_t"/><path class="faoe3kvrs"/></g>`,
		"fallback": "solar:wi-fi-cog-outline",
	});
}

export default Component;
