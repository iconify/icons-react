import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdqxufbeu.css';

const viewBox = {"width":39,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdqxufbeu"/>`,
		"fallback": "garden:wordmark-capital-the-26",
	});
}

export default Component;
