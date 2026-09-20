import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9zwoobyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u9zwoobyy"/>`,
		"fallback": "reicon:whisk-filled",
	});
}

export default Component;
