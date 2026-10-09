import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3kg39hqy.css';
import '../../css/e/exsoqbbod.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3kg39hqy"/><path class="exsoqbbod"/>`,
		"fallback": "energy-icons:wheelchair-20-bold",
	});
}

export default Component;
