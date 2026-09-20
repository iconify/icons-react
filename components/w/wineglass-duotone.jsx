import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rm0-lnbdd.css';
import '../../css/p/pzwkpurmq.css';
import '../../css/y/y1gskxbjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rm0-lnbdd"/><path clip-rule="evenodd" class="pzwkpurmq"/><path class="y1gskxbjf"/></g>`,
		"fallback": "reicon:wineglass-duotone",
	});
}

export default Component;
