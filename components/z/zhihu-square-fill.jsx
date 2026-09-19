import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfu2u4csl.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfu2u4csl"/>`,
		"fallback": "ant-design:zhihu-square-fill",
	});
}

export default Component;
