import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ok4hk_31l.css';
import '../../css/w/wttqjwbaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ok4hk_31l"/><path class="wttqjwbaf"/></g>`,
		"fallback": "hugeicons:wind-power",
	});
}

export default Component;
