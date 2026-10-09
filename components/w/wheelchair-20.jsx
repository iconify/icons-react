import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u48dvzb0i.css';
import '../../css/j/j9cnkbbzh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u48dvzb0i"/><path class="j9cnkbbzh"/>`,
		"fallback": "energy-icons:wheelchair-20",
	});
}

export default Component;
