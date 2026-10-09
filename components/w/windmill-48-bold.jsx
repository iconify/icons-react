import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxhd3fa8c.css';
import '../../css/l/l19np-bgg.css';
import '../../css/e/e3xg10aou.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxhd3fa8c"/><path class="l19np-bgg"/><path class="e3xg10aou"/>`,
		"fallback": "energy-icons:windmill-48-bold",
	});
}

export default Component;
