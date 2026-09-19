import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/efg-ksb2t.css';
import '../../css/k/kib5neb7d.css';
import '../../css/l/lki-ik7dz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="efg-ksb2t"/><path class="kib5neb7d"/><path class="lki-ik7dz"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-health-worker",
	});
}

export default Component;
