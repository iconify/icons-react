import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-pfn5jar.css';
import '../../css/a/anc-0tb3m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-pfn5jar"/><path class="anc-0tb3m"/>`,
		"fallback": "energy-icons:zoom-out-48-bold",
	});
}

export default Component;
