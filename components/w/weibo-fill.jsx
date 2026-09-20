import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb-m5b01n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb-m5b01n"/>`,
		"fallback": "ri:weibo-fill",
	});
}

export default Component;
