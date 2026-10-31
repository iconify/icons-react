import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xfzqhg7ia.css';
import '../../css/r/rf8gehb2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xfzqhg7ia"/><path class="rf8gehb2u"/></g>`,
		"fallback": "coolicons:window-sidebar-duotone-round",
	});
}

export default Component;
