import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ls_43mben.css';
import '../../css/a/abiwwp56o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ls_43mben"/><path class="abiwwp56o"/></g>`,
		"fallback": "coolicons:window-check-duotone-round",
	});
}

export default Component;
