import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ump_5_t_k.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ump_5_t_k"/>`,
		"fallback": "ant-design:windows-outline",
	});
}

export default Component;
