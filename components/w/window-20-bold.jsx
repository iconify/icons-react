import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igsew81fb.css';
import '../../css/k/ki4_wwbbd.css';
import '../../css/e/eo_qvfbbf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igsew81fb"/><path class="ki4_wwbbd"/><path class="eo_qvfbbf"/>`,
		"fallback": "energy-icons:window-20-bold",
	});
}

export default Component;
