import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/b/bct90hbvh.css';
import '../../css/j/j697l3uzc.css';
import '../../css/i/ikk32rx1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="bct90hbvh"/><path class="j697l3uzc"/><path class="ikk32rx1w"/></g>`,
		"fallback": "streamline-logos:whitesource-logo-1",
	});
}

export default Component;
