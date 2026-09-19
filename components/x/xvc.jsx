import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cye_ary3w.css';
import '../../css/b/bvaiq_bit.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="cye_ary3w"/><path class="bvaiq_bit"/></g>`,
		"fallback": "cryptocurrency-color:xvc",
	});
}

export default Component;
