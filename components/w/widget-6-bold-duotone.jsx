import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_vz0301x.css';
import '../../css/z/ziyj3ibvq.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/c/cy-v-jjkp.css';
import '../../css/u/ucveffq8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_vz0301x"/><path class="ziyj3ibvq"/><g class="xtpeb-edw"><path class="cy-v-jjkp"/><path class="ucveffq8x"/></g>`,
		"fallback": "solar:widget-6-bold-duotone",
	});
}

export default Component;
