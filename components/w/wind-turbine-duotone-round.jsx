import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytyn1kb9c.css';
import '../../css/a/a14vpk97p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ytyn1kb9c"/><path class="a14vpk97p"/></g>`,
		"fallback": "coolicons:wind-turbine-duotone-round",
	});
}

export default Component;
