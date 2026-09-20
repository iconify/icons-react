import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csah_sx9w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csah_sx9w"/>`,
		"fallback": "raphael:zoomin",
	});
}

export default Component;
