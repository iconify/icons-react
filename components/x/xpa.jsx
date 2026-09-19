import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i2bgz5bwa.css';
import '../../css/v/vvbswzbba.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="i2bgz5bwa"/><path class="vvbswzbba"/></g>`,
		"fallback": "cryptocurrency-color:xpa",
	});
}

export default Component;
