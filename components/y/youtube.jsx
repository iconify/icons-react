import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmbos6o5z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmbos6o5z"/>`,
		"fallback": "entypo-social:youtube",
	});
}

export default Component;
