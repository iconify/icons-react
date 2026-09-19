import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km9q51bpt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km9q51bpt"/>`,
		"fallback": "entypo-social:xing",
	});
}

export default Component;
