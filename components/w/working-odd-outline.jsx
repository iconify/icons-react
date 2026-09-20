import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qirq4acbs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qirq4acbs"/>`,
		"fallback": "lsicon:working-odd-outline",
	});
}

export default Component;
