import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/m1dmxobcp.css';
import '../../css/e/e2wn6cbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="m1dmxobcp"/><path class="e2wn6cbko"/></g>`,
		"fallback": "keyline-icons:whole-word-sharp-duotone",
	});
}

export default Component;
