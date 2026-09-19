import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufs6mebkv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufs6mebkv"/>`,
		"fallback": "game-icons:wind-turbine",
	});
}

export default Component;
