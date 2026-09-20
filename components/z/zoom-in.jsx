import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o533a9f5c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o533a9f5c"/>`,
		"fallback": "streamline-flex:zoom-in",
	});
}

export default Component;
