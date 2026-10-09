import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-pfn5jar.css';
import '../../css/l/lq1s_sbrc.css';
import '../../css/v/vhowmnhvx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-pfn5jar"/><path class="lq1s_sbrc"/><path class="vhowmnhvx"/>`,
		"fallback": "energy-icons:zoom-in-48-bold",
	});
}

export default Component;
