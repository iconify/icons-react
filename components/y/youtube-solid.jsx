import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nke7y8bpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nke7y8bpm"/>`,
		"fallback": "flowbite:youtube-solid",
	});
}

export default Component;
