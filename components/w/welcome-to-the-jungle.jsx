import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9zetgbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9zetgbfd"/>`,
		"fallback": "thesvg-color:welcome-to-the-jungle",
	});
}

export default Component;
