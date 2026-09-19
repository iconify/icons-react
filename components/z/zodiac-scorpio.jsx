import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oford0b1p.css';
import '../../css/w/wxtjo7_gk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oford0b1p"/><path class="wxtjo7_gk"/></g>`,
		"fallback": "hugeicons:zodiac-scorpio",
	});
}

export default Component;
