import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt_i27b9p.css';
import '../../css/s/s60hnq-cg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt_i27b9p"/><path class="s60hnq-cg"/>`,
		"fallback": "energy-icons:wrench-20",
	});
}

export default Component;
