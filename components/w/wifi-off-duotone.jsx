import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcq4rebkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary vcq4rebkq"/>`,
		"fallback": "iconaut:wifi-off-duotone",
	});
}

export default Component;
