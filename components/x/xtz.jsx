import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp4h6scln.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp4h6scln"/>`,
		"fallback": "cryptocurrency:xtz",
	});
}

export default Component;
