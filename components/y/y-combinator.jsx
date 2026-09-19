import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcop5xikc.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcop5xikc"/>`,
		"fallback": "fa:y-combinator",
	});
}

export default Component;
