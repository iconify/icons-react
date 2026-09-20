import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3s97wwwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3s97wwwl"/>`,
		"fallback": "thesvg:zdf",
	});
}

export default Component;
