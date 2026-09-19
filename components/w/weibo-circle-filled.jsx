import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j317_ccvk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j317_ccvk"/>`,
		"fallback": "ant-design:weibo-circle-filled",
	});
}

export default Component;
