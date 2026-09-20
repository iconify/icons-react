import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzw5gqb_m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jzw5gqb_m"/>`,
		"fallback": "streamline-flex:zoom-out-gesture-solid",
	});
}

export default Component;
