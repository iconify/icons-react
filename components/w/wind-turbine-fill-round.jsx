import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_d9wxb8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_d9wxb8h"/>`,
		"fallback": "coolicons:wind-turbine-fill-round",
	});
}

export default Component;
