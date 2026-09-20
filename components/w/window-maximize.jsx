import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t42s_s5ie.css';
import '../../css/d/drovmgbqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t42s_s5ie"/><path class="drovmgbqx"/></g>`,
		"fallback": "tabler:window-maximize",
	});
}

export default Component;
