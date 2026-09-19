import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg9d7cc2x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg9d7cc2x"/>`,
		"fallback": "ant-design:zhihu-circle",
	});
}

export default Component;
