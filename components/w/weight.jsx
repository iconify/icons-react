import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fayq1yzso.css';
import '../../css/k/ka_uhbckf.css';
import '../../css/r/ryp_kebrt.css';
import '../../css/x/xlocksb5o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fayq1yzso"/><path class="ka_uhbckf"/><path class="ryp_kebrt"/><path class="xlocksb5o"/></g>`,
		"fallback": "icon-park:weight",
	});
}

export default Component;
