import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gc7mvhrpq.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/z/z9v-29bvh.css';
import '../../css/v/vnyou5k3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gc7mvhrpq"/><g class="mc2zb0bvp"><path class="z9v-29bvh"/><path class="vnyou5k3z"/></g></g>`,
		"fallback": "solar:wind-bold-duotone",
	});
}

export default Component;
