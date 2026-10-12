import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx1t0xbct.css';
import '../../css/u/u899ipb3o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx1t0xbct"/><path class="u899ipb3o"/>`,
		"fallback": "energy-icons:whiteboard-48-bold",
	});
}

export default Component;
