import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3t3vqbie.css';
import '../../css/u/uook0dnzb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3t3vqbie"/><path class="uook0dnzb"/>`,
		"fallback": "energy-icons:welding-mask-20-bold",
	});
}

export default Component;
