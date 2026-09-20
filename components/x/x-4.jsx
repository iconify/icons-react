import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd4icx4ma.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd4icx4ma"/>`,
		"fallback": "roentgen:x-4",
	});
}

export default Component;
