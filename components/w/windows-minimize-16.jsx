import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5qt0b1b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft5qt0b1b"/>`,
		"fallback": "qlementine-icons:windows-minimize-16",
	});
}

export default Component;
