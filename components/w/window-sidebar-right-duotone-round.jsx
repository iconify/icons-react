import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nm5m83bee.css';
import '../../css/m/m1oqaxx_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nm5m83bee"/><path class="m1oqaxx_v"/></g>`,
		"fallback": "coolicons:window-sidebar-right-duotone-round",
	});
}

export default Component;
