import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr9fsfb8t.css';

const viewBox = {"width":2048,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr9fsfb8t"/>`,
		"fallback": "fa:window-restore",
	});
}

export default Component;
