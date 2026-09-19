import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mh-1qobsq.css';
import '../../css/y/y7zppqbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mh-1qobsq"/><path class="y7zppqbne"/></g>`,
		"fallback": "hugeicons:wps-office-rectangle",
	});
}

export default Component;
