import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/si8xltb9c.css';
import '../../css/n/n3vbv1bpu.css';
import '../../css/a/ahxs4fbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="si8xltb9c"/><path class="n3vbv1bpu"/><path class="ahxs4fbhl"/></g>`,
		"fallback": "tdesign:window",
	});
}

export default Component;
