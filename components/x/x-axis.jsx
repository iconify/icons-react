import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh6i7hbio.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh6i7hbio"/>`,
		"fallback": "carbon:x-axis",
	});
}

export default Component;
