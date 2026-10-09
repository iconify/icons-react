import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg-g_cb3x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg-g_cb3x"/>`,
		"fallback": "energy-icons:welding-48-bold",
	});
}

export default Component;
