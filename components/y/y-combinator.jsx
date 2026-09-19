import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfdxomh6w.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfdxomh6w"/>`,
		"fallback": "fa-brands:y-combinator",
	});
}

export default Component;
