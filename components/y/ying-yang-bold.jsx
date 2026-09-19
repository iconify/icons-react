import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p1uypcbqv.css';
import '../../css/g/g7f03lbok.css';
import '../../css/m/m-u0l2bzu.css';
import '../../css/s/snq0_74tm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p1uypcbqv"/><path class="g7f03lbok"/><path clip-rule="evenodd" class="m-u0l2bzu"/><rect class="snq0_74tm"/></g>`,
		"fallback": "glyphs:ying-yang-bold",
	});
}

export default Component;
