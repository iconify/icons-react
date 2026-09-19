import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfzb2rv_e.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfzb2rv_e"/>`,
		"fallback": "ant-design:yahoo-filled",
	});
}

export default Component;
