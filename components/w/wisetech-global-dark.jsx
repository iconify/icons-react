import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amc34abky.css';

const viewBox = {"width":1534,"height":1534};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amc34abky"/>`,
		"fallback": "thesvg-color:wisetech-global-dark",
	});
}

export default Component;
