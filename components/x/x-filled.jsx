import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4w5c7bsr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4w5c7bsr"/>`,
		"fallback": "ant-design:x-filled",
	});
}

export default Component;
