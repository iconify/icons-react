import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v35oqbc4e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v35oqbc4e"/>`,
		"fallback": "fluent-emoji-high-contrast:womans-clothes",
	});
}

export default Component;
