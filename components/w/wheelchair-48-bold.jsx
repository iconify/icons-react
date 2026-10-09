import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5f0qtb6n.css';
import '../../css/y/yji6vpglu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5f0qtb6n"/><path class="yji6vpglu"/>`,
		"fallback": "energy-icons:wheelchair-48-bold",
	});
}

export default Component;
