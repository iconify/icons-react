import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggaa8vbqw.css';
import '../../css/d/dgyyfkyiu.css';
import '../../css/l/l97nb-quh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggaa8vbqw"/><path class="dgyyfkyiu"/><circle class="l97nb-quh"/>`,
		"fallback": "bx:wifi",
	});
}

export default Component;
