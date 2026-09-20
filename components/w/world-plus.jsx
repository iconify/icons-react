import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bngho9abm.css';
import '../../css/x/xmy3efaud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bngho9abm"/><path class="xmy3efaud"/></g>`,
		"fallback": "tabler:world-plus",
	});
}

export default Component;
