import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/if8avqb2l.css';
import '../../css/x/x-hw30lbb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="if8avqb2l"/><path class="x-hw30lbb"/></g>`,
		"fallback": "cryptocurrency:wtc",
	});
}

export default Component;
