import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joehd8b7w.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="joehd8b7w"/>`,
		"fallback": "topcoat:wordpress",
	});
}

export default Component;
