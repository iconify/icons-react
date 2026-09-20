import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf73bwb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf73bwb6g"/>`,
		"fallback": "thesvg-color:y-combinator",
	});
}

export default Component;
