import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v47yz274o.css';
import '../../css/h/h7ieklbgl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v47yz274o"/><path class="h7ieklbgl"/></g>`,
		"fallback": "charm:wifi-warning",
	});
}

export default Component;
