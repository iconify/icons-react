import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n01nh0bss.css';
import '../../css/i/if7mopb_h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="n01nh0bss"/><path class="if7mopb_h"/></g>`,
		"fallback": "cryptocurrency-color:wpr",
	});
}

export default Component;
