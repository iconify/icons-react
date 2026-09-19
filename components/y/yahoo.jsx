import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akdnkpb1d.css';

const viewBox = {"width":940,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akdnkpb1d"/>`,
		"fallback": "ls:yahoo",
	});
}

export default Component;
