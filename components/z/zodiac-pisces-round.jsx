import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyr-ws_tx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyr-ws_tx"/>`,
		"fallback": "coolicons:zodiac-pisces-round",
	});
}

export default Component;
