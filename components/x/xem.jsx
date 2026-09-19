import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vdxm5qbzn.css';
import '../../css/d/du0700bwk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="vdxm5qbzn"/><path class="du0700bwk"/></g>`,
		"fallback": "cryptocurrency-color:xem",
	});
}

export default Component;
