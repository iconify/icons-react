import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoe_q5b2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zoe_q5b2b"/>`,
		"fallback": "streamline-logos:whitesource-logo-2-block",
	});
}

export default Component;
