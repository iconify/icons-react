import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xp4vt6b0m.css';
import '../../css/x/x5hm26qtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xp4vt6b0m"/><path class="x5hm26qtw"/></g>`,
		"fallback": "hugeicons:web-programming",
	});
}

export default Component;
