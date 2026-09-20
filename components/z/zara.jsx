import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyto0dbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyto0dbtc"/>`,
		"fallback": "thesvg-color:zara",
	});
}

export default Component;
