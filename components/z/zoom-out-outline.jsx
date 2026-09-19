import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3wh155go.css';
import '../../css/i/i_8ytb8-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3wh155go"/><path clip-rule="evenodd" class="i_8ytb8-s"/>`,
		"fallback": "basil:zoom-out-outline",
	});
}

export default Component;
