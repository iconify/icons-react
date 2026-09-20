import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_lrjbcru.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_lrjbcru"/>`,
		"fallback": "wpf:worldwide-location",
	});
}

export default Component;
