import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2mq-n2xz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2mq-n2xz"/>`,
		"fallback": "coolicons:window-fill-round",
	});
}

export default Component;
