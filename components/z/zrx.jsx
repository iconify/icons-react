import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z61wt6vzm.css';
import '../../css/j/jz7sqkbtw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="z61wt6vzm"/><path class="jz7sqkbtw"/></g>`,
		"fallback": "cryptocurrency-color:zrx",
	});
}

export default Component;
