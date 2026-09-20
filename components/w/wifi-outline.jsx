import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zro8qtbno.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zro8qtbno"/>`,
		"fallback": "lsicon:wifi-outline",
	});
}

export default Component;
