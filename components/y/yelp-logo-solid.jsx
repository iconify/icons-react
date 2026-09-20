import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpg043bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cpg043bpa"/>`,
		"fallback": "streamline-logos:yelp-logo-solid",
	});
}

export default Component;
