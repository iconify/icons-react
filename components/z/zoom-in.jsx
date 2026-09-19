import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hp3kc7bgg.css';
import '../../css/k/ky3xqnbty.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="hp3kc7bgg"/><path class="ky3xqnbty"/></g>`,
		"fallback": "charm:zoom-in",
	});
}

export default Component;
