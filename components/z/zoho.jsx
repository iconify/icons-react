import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az2la63pq.css';
import '../../css/t/tw6cu5ihj.css';

const viewBox = {"width":1024,"height":366};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az2la63pq"/><path class="tw6cu5ihj"/>`,
		"fallback": "thesvg:zoho",
	});
}

export default Component;
