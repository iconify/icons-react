import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_aev9b6z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l_aev9b6z"/>`,
		"fallback": "streamline-flex:wifi-antenna-remix",
	});
}

export default Component;
