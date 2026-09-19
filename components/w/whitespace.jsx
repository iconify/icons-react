import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip7p42btd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ip7p42btd"/>`,
		"fallback": "codicon:whitespace",
	});
}

export default Component;
