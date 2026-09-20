import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xo9ubbzzb.css';
import '../../css/m/m-39ime3o.css';
import '../../css/z/z7bmdpbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xo9ubbzzb"/><path class="m-39ime3o"/><path class="z7bmdpbkb"/></g>`,
		"fallback": "solar:win-rar-line-duotone",
	});
}

export default Component;
