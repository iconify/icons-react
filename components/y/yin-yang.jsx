import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go7za8b6c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go7za8b6c"/>`,
		"fallback": "la:yin-yang",
	});
}

export default Component;
