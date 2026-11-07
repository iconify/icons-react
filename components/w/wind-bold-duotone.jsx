import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqjmeqb-q.css';
import '../../css/x/xtpeb-edw.css';
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
		"content": `<path clip-rule="evenodd" class="iqjmeqb-q"/><g class="xtpeb-edw"><path class="z9v-29bvh"/><path class="vnyou5k3z"/></g>`,
		"fallback": "solar:wind-bold-duotone",
	});
}

export default Component;
