import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/avu59xt4u.css';
import '../../css/k/kb2fxybse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="avu59xt4u"/><path class="kb2fxybse"/></g>`,
		"fallback": "coolicons:windows-logo-duotone-round",
	});
}

export default Component;
