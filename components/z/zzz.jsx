import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doj9dq_jg.css';
import '../../css/e/ehv3lsbxi.css';
import '../../css/h/hb8m0waiv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="doj9dq_jg"><path class="ehv3lsbxi"/><path class="hb8m0waiv"/></g>`,
		"fallback": "openmoji:zzz",
	});
}

export default Component;
