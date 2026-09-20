import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uxtnc17-m.css';
import '../../css/t/twhxbyd9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uxtnc17-m"/><path class="twhxbyd9g"/></g>`,
		"fallback": "reicon:widget-duotone",
	});
}

export default Component;
