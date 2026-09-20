import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz0800s7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz0800s7w"/>`,
		"fallback": "simple-icons:wikipedia",
	});
}

export default Component;
