import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x33rsnb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x33rsnb6c"/>`,
		"fallback": "thesvg:zencoder",
	});
}

export default Component;
