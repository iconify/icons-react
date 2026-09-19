import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrdg4tgbu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrdg4tgbu"/>`,
		"fallback": "fa7-solid:won",
	});
}

export default Component;
