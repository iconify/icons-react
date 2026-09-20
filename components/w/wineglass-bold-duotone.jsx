import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yfd_9u91z.css';
import '../../css/a/ascandb9a.css';
import '../../css/v/vxq16ebfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yfd_9u91z"/><path class="ascandb9a"/><path class="vxq16ebfq"/></g>`,
		"fallback": "solar:wineglass-bold-duotone",
	});
}

export default Component;
