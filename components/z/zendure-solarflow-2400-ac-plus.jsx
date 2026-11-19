import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di7i0q5_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di7i0q5_a"/>`,
		"fallback": "cbi:zendure-solarflow-2400-ac-plus",
	});
}

export default Component;
