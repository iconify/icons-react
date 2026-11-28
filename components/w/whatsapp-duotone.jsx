import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bxdrd57tt.css';
import '../../css/i/iguwsgb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bxdrd57tt secondary"/><path class="iguwsgb7m primary"/></g>`,
		"fallback": "iconaut:whatsapp-duotone",
	});
}

export default Component;
