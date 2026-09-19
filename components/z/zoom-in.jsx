import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mnkjusn8d.css';
import '../../css/u/ung6xvbrz.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mnkjusn8d"/><path class="ung6xvbrz"/></g>`,
		"fallback": "si-glyph:zoom-in",
	});
}

export default Component;
