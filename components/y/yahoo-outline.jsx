import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1ii5ybol.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1ii5ybol"/>`,
		"fallback": "ant-design:yahoo-outline",
	});
}

export default Component;
