import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdc4_i2ya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdc4_i2ya"/>`,
		"fallback": "uil:yellow",
	});
}

export default Component;
