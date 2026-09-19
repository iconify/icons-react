import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9rnf9u2e.css';

const viewBox = {"width":450,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9rnf9u2e"/>`,
		"fallback": "file-icons:webpack-old",
	});
}

export default Component;
