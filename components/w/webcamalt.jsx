import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc4cqtmyo.css';

const viewBox = {"width":833,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc4cqtmyo"/>`,
		"fallback": "whh:webcamalt",
	});
}

export default Component;
