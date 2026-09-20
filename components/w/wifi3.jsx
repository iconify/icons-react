import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcyefbb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcyefbb5w"/>`,
		"fallback": "reicon:wifi3",
	});
}

export default Component;
