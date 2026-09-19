import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ioadajdvh.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ioadajdvh"/>`,
		"fallback": "f7:wrench-fill",
	});
}

export default Component;
