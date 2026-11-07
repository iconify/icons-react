import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7zn-235y.css';
import '../../css/b/banrz7b7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7zn-235y"/><path clip-rule="evenodd" class="banrz7b7y"/>`,
		"fallback": "solar:webcam-bold",
	});
}

export default Component;
