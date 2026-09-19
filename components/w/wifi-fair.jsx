import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lpitmabnk.css';
import '../../css/o/oyxz6ib2l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lpitmabnk"/><path class="oyxz6ib2l"/></g>`,
		"fallback": "charm:wifi-fair",
	});
}

export default Component;
