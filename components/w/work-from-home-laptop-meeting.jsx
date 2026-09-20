import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/m/m9ko8cqoj.css';
import '../../css/n/n0tniobhp.css';
import '../../css/m/mrvttfbdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="m9ko8cqoj"/><path class="n0tniobhp"/><path class="mrvttfbdt"/></g>`,
		"fallback": "streamline-ultimate:work-from-home-laptop-meeting",
	});
}

export default Component;
