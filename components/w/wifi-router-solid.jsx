import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukmhh1bey.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ukmhh1bey"/>`,
		"fallback": "streamline:wifi-router-solid",
	});
}

export default Component;
