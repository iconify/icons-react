import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/u0vby8oio.css';
import '../../css/s/szh19hpiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="u0vby8oio"/><path class="szh19hpiz"/></g>`,
		"fallback": "keyline-icons:wrench-sharp-duotone",
	});
}

export default Component;
