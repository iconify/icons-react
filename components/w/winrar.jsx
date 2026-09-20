import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v2ku8r5oc.css';
import '../../css/c/cfpg-3jeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v2ku8r5oc"/><path clip-rule="evenodd" class="cfpg-3jeb"/></g>`,
		"fallback": "reicon:winrar",
	});
}

export default Component;
