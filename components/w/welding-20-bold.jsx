import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzs4rus3p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzs4rus3p"/>`,
		"fallback": "energy-icons:welding-20-bold",
	});
}

export default Component;
