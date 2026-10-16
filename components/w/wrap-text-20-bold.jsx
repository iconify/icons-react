import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt6-vgweh.css';
import '../../css/y/yu6035bqd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt6-vgweh"/><path class="yu6035bqd"/>`,
		"fallback": "energy-icons:wrap-text-20-bold",
	});
}

export default Component;
