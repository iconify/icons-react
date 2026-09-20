import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyzvz69_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gyzvz69_w"/>`,
		"fallback": "streamline-ultimate:wrestling-mask-1-bold",
	});
}

export default Component;
