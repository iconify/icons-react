import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahe5khbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahe5khbii"/>`,
		"fallback": "hugeicons:wifi-02",
	});
}

export default Component;
