import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/za5v79b2j.css';
import '../../css/t/tiuuqfbzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="za5v79b2j"/><path class="tiuuqfbzw"/></g>`,
		"fallback": "hugeicons:wifi-error-01",
	});
}

export default Component;
