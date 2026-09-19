import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz2uiw5iv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz2uiw5iv"/>`,
		"fallback": "ant-design:zhihu-outlined",
	});
}

export default Component;
