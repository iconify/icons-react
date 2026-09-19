import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmc6usb2o.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmc6usb2o"/>`,
		"fallback": "fluent-mdl2:zoom-out",
	});
}

export default Component;
