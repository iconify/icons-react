import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hp3kc7bgg.css';
import '../../css/f/f2p-x5b5n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="hp3kc7bgg"/><path class="f2p-x5b5n"/></g>`,
		"fallback": "charm:zoom-out",
	});
}

export default Component;
