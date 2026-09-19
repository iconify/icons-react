import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvg2_zb3l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvg2_zb3l"/>`,
		"fallback": "fa7-brands:zhihu",
	});
}

export default Component;
