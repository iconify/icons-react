import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vaaps2u-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vaaps2u-d"/>`,
		"fallback": "thesvg-color:webdriverio",
	});
}

export default Component;
