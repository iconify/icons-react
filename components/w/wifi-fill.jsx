import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab28fgbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab28fgbde"/>`,
		"fallback": "ri:wifi-fill",
	});
}

export default Component;
