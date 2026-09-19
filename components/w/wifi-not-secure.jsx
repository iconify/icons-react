import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxs02k2xl.css';
import '../../css/c/c681w5y_p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxs02k2xl"/><path class="c681w5y_p"/>`,
		"fallback": "carbon:wifi-not-secure",
	});
}

export default Component;
