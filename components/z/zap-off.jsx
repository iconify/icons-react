import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/y48klo2sh.css';
import '../../css/v/vp0b50bgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="y48klo2sh"/><path class="vp0b50bgz"/></g>`,
		"fallback": "withicons-kawaii:zap-off",
	});
}

export default Component;
