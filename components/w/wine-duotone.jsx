import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nzpxhuiof.css';
import '../../css/j/j5ikm6bmb.css';
import '../../css/a/ap2nzgbjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nzpxhuiof"/><path class="j5ikm6bmb"/><path class="ap2nzgbjj"/></g>`,
		"fallback": "lucide-extended:wine-duotone",
	});
}

export default Component;
