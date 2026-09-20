import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqrrfm5ch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqrrfm5ch"/>`,
		"fallback": "simple-icons:zalando",
	});
}

export default Component;
