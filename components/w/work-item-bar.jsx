import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsr5subpf.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsr5subpf"/>`,
		"fallback": "fluent-mdl2:work-item-bar",
	});
}

export default Component;
