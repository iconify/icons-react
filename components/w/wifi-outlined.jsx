import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmyfs8bbr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmyfs8bbr"/>`,
		"fallback": "ant-design:wifi-outlined",
	});
}

export default Component;
