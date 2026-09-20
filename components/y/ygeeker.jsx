import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgovvk22o.css';
import '../../css/e/eapcgfbcu.css';
import '../../css/v/vuimjcshx.css';
import '../../css/v/v14kdv8za.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wgovvk22o"><path class="eapcgfbcu"/><path class="vuimjcshx"/><path class="v14kdv8za"/></g>`,
		"fallback": "thesvg-color:ygeeker",
	});
}

export default Component;
