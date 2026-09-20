import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/venf5ntdo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="venf5ntdo"/>`,
		"fallback": "osmic:wilderness-hut-14",
	});
}

export default Component;
