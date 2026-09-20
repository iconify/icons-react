import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvmm8ib9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvmm8ib9p"/>`,
		"fallback": "tabler:windmill",
	});
}

export default Component;
