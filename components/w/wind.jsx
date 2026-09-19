import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj305obcj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vj305obcj"/>`,
		"fallback": "at-icons:wind",
	});
}

export default Component;
