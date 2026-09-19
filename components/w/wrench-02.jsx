import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/mp0vydb-q.css';
import '../../css/j/j5knwxbsn.css';
import '../../css/v/vw0y74bfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="mp0vydb-q"/><path class="j5knwxbsn"/><path class="vw0y74bfz"/></g>`,
		"fallback": "hugeicons:wrench-02",
	});
}

export default Component;
