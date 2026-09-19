import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj7tpabbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj7tpabbj"/>`,
		"fallback": "cbi:wiser-heating-ctl-off",
	});
}

export default Component;
