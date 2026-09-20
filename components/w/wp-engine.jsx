import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt76y9bvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt76y9bvd"/>`,
		"fallback": "thesvg-color:wp-engine",
	});
}

export default Component;
