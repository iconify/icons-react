import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nb0bg6bdz.css';
import '../../css/e/e-bowmbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nb0bg6bdz"/><path class="e-bowmbfd"/></g>`,
		"fallback": "iconaut:world-map-solid",
	});
}

export default Component;
