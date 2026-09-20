import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xmwx-aczr.css';
import '../../css/k/k_soccb6w.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="xmwx-aczr"/><path class="k_soccb6w"/></g>`,
		"fallback": "skill-icons:xd",
	});
}

export default Component;
