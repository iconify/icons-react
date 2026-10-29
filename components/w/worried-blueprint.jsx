import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vczi7rbjb.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/g/grb3uxweq.css';
import '../../css/z/znam6bmtw.css';
import '../../css/m/mai4clilr.css';
import '../../css/m/mdve_fbzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vczi7rbjb wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="grb3uxweq wm-k"/><path class="wm-a znam6bmtw"/><path class="mai4clilr wm-s"/><path class="mdve_fbzl wm-k"/></g>`,
		"fallback": "withicons:worried-blueprint",
	});
}

export default Component;
