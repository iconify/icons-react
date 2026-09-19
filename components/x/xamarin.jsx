import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr_hp9bnm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr_hp9bnm"/>`,
		"fallback": "file-icons:xamarin",
	});
}

export default Component;
