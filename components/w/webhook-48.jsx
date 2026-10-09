import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejvdg2q1j.css';
import '../../css/p/p2_kkklpr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejvdg2q1j"/><path class="p2_kkklpr"/>`,
		"fallback": "energy-icons:webhook-48",
	});
}

export default Component;
