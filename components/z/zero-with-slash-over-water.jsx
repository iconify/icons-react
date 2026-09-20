import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5-gh6bzg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5-gh6bzg"/>`,
		"fallback": "pinhead:zero-with-slash-over-water",
	});
}

export default Component;
