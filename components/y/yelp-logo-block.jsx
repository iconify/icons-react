import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa422ab5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wa422ab5r"/>`,
		"fallback": "streamline-logos:yelp-logo-block",
	});
}

export default Component;
