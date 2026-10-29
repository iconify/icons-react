import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw78_1bxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw78_1bxq"/>`,
		"fallback": "withicons:weight-solid",
	});
}

export default Component;
