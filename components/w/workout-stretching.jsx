import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lmgk-_5ll.css';
import '../../css/j/j6togjb9b.css';
import '../../css/v/v8x0izeuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lmgk-_5ll"/><path class="j6togjb9b"/><path class="v8x0izeuy"/></g>`,
		"fallback": "hugeicons:workout-stretching",
	});
}

export default Component;
