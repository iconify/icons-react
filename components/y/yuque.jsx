import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf0-e1b2x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf0-e1b2x"/>`,
		"fallback": "ant-design:yuque",
	});
}

export default Component;
