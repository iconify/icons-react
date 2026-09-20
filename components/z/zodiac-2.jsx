import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/s/sgz3rlbjr.css';
import '../../css/y/yhwctlb5k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="sgz3rlbjr"/><path class="yhwctlb5k"/></g>`,
		"fallback": "streamline-color:zodiac-2",
	});
}

export default Component;
