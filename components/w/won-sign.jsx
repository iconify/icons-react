import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhamvcu8j.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhamvcu8j"/>`,
		"fallback": "fa-solid:won-sign",
	});
}

export default Component;
