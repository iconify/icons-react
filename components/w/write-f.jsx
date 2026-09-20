import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1dqn_bgp.css';

const viewBox = {"width":24,"height":24,"left":-0.5,"top":-0.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1dqn_bgp"/>`,
		"fallback": "jam:write-f",
	});
}

export default Component;
