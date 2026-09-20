import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpl0je8ew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hpl0je8ew"/>`,
		"fallback": "streamline-ultimate:wifi-alert-attention-bold",
	});
}

export default Component;
