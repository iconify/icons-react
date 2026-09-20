import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h0240db0u.css';
import '../../css/g/gtbkqob5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h0240db0u"/><path class="gtbkqob5d"/></g>`,
		"fallback": "nrk:xmark-circle-checked-expressive",
	});
}

export default Component;
