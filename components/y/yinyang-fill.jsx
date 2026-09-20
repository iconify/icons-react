import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfm92ac7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfm92ac7c"/>`,
		"fallback": "mingcute:yinyang-fill",
	});
}

export default Component;
