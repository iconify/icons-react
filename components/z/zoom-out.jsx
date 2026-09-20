import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e2i4-bbgv.css';
import '../../css/p/pi3y7acqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e2i4-bbgv"/><path class="pi3y7acqw"/></g>`,
		"fallback": "proicons:zoom-out",
	});
}

export default Component;
