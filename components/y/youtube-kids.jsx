import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuoo9wf9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuoo9wf9e"/>`,
		"fallback": "cbi:youtube-kids",
	});
}

export default Component;
