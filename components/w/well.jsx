import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9e7hmbvm.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9e7hmbvm"/>`,
		"fallback": "memory:well",
	});
}

export default Component;
