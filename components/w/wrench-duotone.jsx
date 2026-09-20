import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kvn0wjhxk.css';
import '../../css/g/gn15j-blt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kvn0wjhxk"/><path class="gn15j-blt"/></g>`,
		"fallback": "si:wrench-duotone",
	});
}

export default Component;
