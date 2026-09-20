import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yle_3hkkh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yle_3hkkh"/>`,
		"fallback": "selfhst:xbox-game-pass-light",
	});
}

export default Component;
