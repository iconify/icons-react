import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_qg1h19u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t_qg1h19u"/>`,
		"fallback": "streamline-flex:zoom-out-gesture-remix",
	});
}

export default Component;
