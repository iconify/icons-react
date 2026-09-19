import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs5wzbb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs5wzbb1g"/>`,
		"fallback": "hugeicons:xls-01",
	});
}

export default Component;
