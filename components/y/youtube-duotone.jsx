import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wycy0m1dn.css';
import '../../css/i/i0_9fac9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary wycy0m1dn"/><path class="i0_9fac9g primary"/></g>`,
		"fallback": "iconaut:youtube-duotone",
	});
}

export default Component;
