import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/blil4ds5p.css';
import '../../css/c/cwfl97bsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="blil4ds5p"/><path class="cwfl97bsr"/></g>`,
		"fallback": "hugeicons:zodiac-ophiuchus",
	});
}

export default Component;
