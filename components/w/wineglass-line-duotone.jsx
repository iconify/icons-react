import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nycani22t.css';
import '../../css/k/kvwd90-nm.css';
import '../../css/s/sjslhg_9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nycani22t"/><path class="kvwd90-nm"/><path class="sjslhg_9y"/></g>`,
		"fallback": "solar:wineglass-line-duotone",
	});
}

export default Component;
