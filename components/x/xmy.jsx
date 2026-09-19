import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ibdnq5fhs.css';
import '../../css/g/g41thc0as.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ibdnq5fhs"/><path class="g41thc0as"/></g>`,
		"fallback": "cryptocurrency-color:xmy",
	});
}

export default Component;
