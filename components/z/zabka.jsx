import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emx2i_-og.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emx2i_-og"/>`,
		"fallback": "thesvg-color:zabka",
	});
}

export default Component;
